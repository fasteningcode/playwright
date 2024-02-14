import { Page } from "@playwright/test";

let page: Page;

/**
 * Returns the current Page.
 * @returns {Page} The current Page.
 */
export function getPage(): Page {
    return page;
}
export function setPage(pageInstance: Page): void {
    page = pageInstance;
}