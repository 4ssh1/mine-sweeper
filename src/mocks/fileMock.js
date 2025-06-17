export const __esModule = true;
export const defaults = 'test-file-stub';

/**
 * In a TypeScript + Jest project, fileMock.js is often used to mock static assets (like images, SVGs, CSS, etc.) during tests.

Since Jest doesn't understand how to import files like .png, .svg, .css, etc., you create a manual mock so those imports don’t cause errors in your tests.

__esModule = true — This tells Jest that this mock behaves like an ES module.

default = 'test-file-stub' — When you import the file, Jest will return this string instead of trying to load the real image or file.
 */