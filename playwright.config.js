// @ts-check
import {defineConfig, devices} from '@playwright/test';

const port = 3001;

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: true,
    baseURL: `http://127.0.0.1:${port}`,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
  ],

  webServer: {
    port,
    command: 'npm run build && npm run preview',
    reuseExistingServer: false,
  },
});

