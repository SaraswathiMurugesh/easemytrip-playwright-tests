import test, { expect, Frame, FrameLocator, Locator, Page } from '@playwright/test';
import { TimeOut } from './constants/constants';
import axeBuilder from '@axe-core/playwright';
import { convertAxeToSarif } from 'axe-sarif-converter';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';
// `uuid` is an ES module; use a dynamic import inside the async function
// to avoid require() of an ES module from CommonJS context.
import { promisify } from 'util';
import * as fs from 'fs';

type Locatable = Page | Locator | FrameLocator | Frame;

/**
 * Get Element Inner Text
 * @param page
 * @param selector
 * @returns inner text
 */
export const elementInnerText = async (page: Locatable, selector: string) => {
  const text: string = await page.locator(selector).first().innerText();
  return text;
};

/**
 * Fill Text Input
 * @param locatable Locator
 * @param selector Selector
 * @param textToFill Input Text
 */
export async function fillTextInput(locatable: Locatable, selector: string, textToFill: string) {
  const siteNameBox = locatable.locator(selector);
  await siteNameBox.fill(textToFill);
}

/**
 * Import Files For Non-Input Node
 * @param page Page Contexts
 * @param selector Selector
 * @param filePath File Path
 */
export async function uploadFile(page: Page, selector: string, filePath: string) {
  const fileChooserPromise = page.waitForEvent('filechooser');
  await clickSelector(page, selector);
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(filePath);
}

/**
 * Clear and Fill Text Input
 * @param locatable Locator
 * @param selector Selector
 * @param textToFill Input Text
 */
export async function clearAndFillTextInput(locatable: Locatable, selector: string, textToFill: string) {
  const siteNameBox = locatable.locator(selector);
  await siteNameBox.clear();
  await siteNameBox.fill(textToFill);
}

/**
 * Wait For Selector To Enable
 * @param locatable Locator
 * @param selector
 */
export function waitForSelectorToEnable(locatable: Locatable, selector: string): Promise<void> {
  return locatable
    .locator(selector)
    .first()
    .waitFor({ state: 'attached', timeout: TimeOut.DefaultMaxWaitTime });
}

/**
 * Wait For Selector To Disable
 * @param locatable Locator
 * @param selector
 */
export function waitForSelectorToDisable(locatable: Locatable, selector: string): Promise<void> {
  return locatable
    .locator(selector)
    .first()
    .waitFor({ state: 'hidden', timeout: TimeOut.DefaultMaxWaitTime });
}

/**
 * Get Element Attribute Value
 * @param page Page
 * @param selector Selector
 * @param attributeName Attribute
 */
export const getAttributeValue = async (page: Page, selector: string, attributeName: string) => {
  const text = await page.locator(selector).getAttribute(attributeName);
  return text;
};

/**
 * Navigate to a page in new tab
 * @param page Page reference
 * @param selector Selector
 */
export const navigateToNewTab = async (page: Page, selector: string) => {
  const [newTab] = await Promise.all([page.waitForEvent('popup'), page.locator(selector).first().click()]);
  await page.waitForLoadState();
  return newTab;
};

/**
 * Clicks the selector
 * @param locatable Locator
 * @param selector Selector
 */
export const clickSelector = async (locatable: Locatable, selector: string) => {
  await locatable.locator(selector).waitFor({ timeout: TimeOut.LoadTimeOut });
  await locatable.locator(selector).click();
};

/**
 * Drag and Drop
 * @param sourceSelector Source Selector which we dragging
 * @param targetSelector Target Selector where we need to drop
 */
export const dragAndDrop = async (page: Page, sourceSelector: string, targetSelector: string) => {
  await page.dragAndDrop(sourceSelector, targetSelector);
};

/**
 * Get Element Property Value
 * @param locatable Locator
 * @param selector Selector
 */
export const getElementPropertyValue = async (locatable: Locatable, selector: string, property: string) => {
  const element = locatable.locator(selector).first();
  const value = await element.evaluate((el: Element, prop: string) => {
    return window.getComputedStyle(el).getPropertyValue(prop);
  }, property);
  return value;
};

/**
 * Navigate to page URL
 * @param page Page
 * @param url Url to navigate
 */
export async function navigateToUrl(page: Page, url: string) {
  await page.waitForLoadState();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: TimeOut.LoadTimeOut });
}

/**
 * Set Input Text Value Using JavaScript
 * @param locatable Locator
 * @param textToFill Input Text
 */
export async function setInputTextUsingJS(locatable: Locator, textToFill: string) {
  await locatable.evaluate((el: HTMLInputElement, value: string) => (el.value = value), textToFill);
}

/**
 * Checks accessibility for a particular page
 * @param page Page against which accessibility check runs.
 * @param testTitle title of the test
 */
export const a11y = async (
  page: Page,
  testTitle: string = test.info().title
): Promise<void> => {
  await page.waitForLoadState('load');
  const builder = new axeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']);
  const accessibilityScanResults = await builder.analyze();
  await exportAccessibilityTestReport(`${testTitle}`, accessibilityScanResults);
  expect(accessibilityScanResults.violations).toEqual([]);
  return;
};

/**
 * Export results from accessibility check to a new file in the output directory.
 * @param fileName Name for the file to which the results are exported.
 * @param axeResults results from the accessibility check
 * @returns accessibility test report
 */
export async function exportAccessibilityTestReport(fileName: string, axeResults: any): Promise<void> {
  const accessibilityTestResult = convertAxeToSarif(axeResults);
  const accessibilityTestResultsDirectory = path.join(
    'downloads',
    'artifacts',
    'accessibility-test-results'
  );
  if (!existsSync(accessibilityTestResultsDirectory)) {
    mkdirSync(accessibilityTestResultsDirectory, { recursive: true });
  }
  const { v4: uuidv4 } = await import('uuid');
  const exportFileName = `${fileName}_${uuidv4()}.sarif`;
  const accessibilityTestResultFilePath = path.join(accessibilityTestResultsDirectory, exportFileName);
  await promisify(fs.writeFile)(
    accessibilityTestResultFilePath,
    JSON.stringify(accessibilityTestResult, null, 2)
  );
  console.log(`Exported axe results to ${accessibilityTestResultFilePath}`);
}