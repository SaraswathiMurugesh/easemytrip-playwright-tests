import { defineConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './ease-my-trip/tests',
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html', // [['json', { outputFile: './report.json' }]]
  timeout: 180000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: null, 
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    actionTimeout: 30000,
    storageState: './ease-my-trip/authArtifacts/storageState.json',
    launchOptions: {
      headless: false,
      timeout: 60000,
      slowMo: 400,
      args: [
        '--start-maximized',
        '--start-fullscreen',
        '--window-size=1920,1080',
      ]
    }
  },
});