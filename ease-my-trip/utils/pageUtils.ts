import { Frame, FrameLocator, Locator, Page } from '@playwright/test';
import { TimeOut } from './constants/constants';

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