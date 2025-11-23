import { defineConfig, devices } from '@playwright/test';

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
   //browserName: 'chromium',
    headless: true,
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
    }
  },
  projects: [
  {
    name: 'default',
    use: {
        browserName: 'chromium',
        launchOptions: {
          args: [
            '--start-maximized',
            '--window-size=1920,1080',
          ]
        }
      },
      grepInvert: /@cross | @mobile/  // default project runs all tests EXCEPT tagged
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
    grep: /@cross/,
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
    grep: /@cross/,
  },
  {
    name: 'Mobile Chrome',
    use: { ...devices['Pixel 5'] },
    grep: /@mobile/,
  },
  {
    name: 'iPhone 13 Pro',
    use: { ...devices['iPhone 13 Pro'] },
    grep: /@mobile/,
  },
]
});