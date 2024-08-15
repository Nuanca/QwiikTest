import type { PlaywrightTestConfig } from '@playwright/test';

const config : PlaywrightTestConfig = {
    testMatch: ["tests/qwiik.test.ts"],
    use: {
      headless:false,
      viewport: { width: 1280, height: 720 },
    }
};
export default config; 