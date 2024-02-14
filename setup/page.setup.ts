/**
 * This module handles the initial setup of a page before running each test. 
 * It includes a beforeEach hook that runs before every test, establishing the page context. 
 * By centralizing these setup operations, it guarantees a consistent starting point for each test, 
 * enhancing test reliability. Additionally, it exports a base test object with a pre-configured beforeEach hook. 
 * This allows defining tests with the page context already set up.
*/
import { Page, test as baseTest } from '@playwright/test'
import { setPage } from '../utils/page.utils'

baseTest.beforeEach(({ page }: { page: Page }) => {
    setPage(page)
})

export const test = baseTest