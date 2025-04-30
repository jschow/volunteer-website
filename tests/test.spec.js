// @ts-check
import {expect, test} from '@playwright/test';

// Utils

test.beforeEach(async ({page}) => {
  await page.goto('/');
});

test('Sample Test', async ({page}) => {
  // Change page size
  await page.setViewportSize({width: 1920, height: 1080});

  // Arrange
  const main = page.locator('main');

  await expect(main, 'main should be visible').toBeVisible();
});
