import { GotoOptions, FillOptions, ClickOptions } from '../setup/optional.parameter.types';
import { getPage } from './page.utils';
// import { LOADSTATE } from '../../playwright.config';
import { Dialog, Locator, Response, type Page } from '@playwright/test';
import { getLocator } from './locator.utils';


export async function gotoURL(path: string, options: GotoOptions = { waitUntil: 'domcontentloaded' }): Promise<null | Response> {
    console.log("just a  test")
    return await getPage().goto(path, options);
}

export async function fill(input: string | Locator, value: string, options?: FillOptions): Promise<void> {
    const locator = getLocator(input);
    await locator.fill(value, options);
}

export async function click(input: string | Locator, options?: ClickOptions): Promise<void> {
    let locator = getLocator(input);
    await locator.click(options)
}


/*
// export class ActionUtils {
//     page: Page;

//     constructor(page: Page) {
//         this.page = page;
//     }
//     async gotoURL(path: string, options: GotoOptions = { waitUntil: 'domcontentloaded' }): Promise<null | Response> {
//         console.log("just a  test")
//         return await getPage().goto(path, options);
//     }

//     async fill(input: string | Locator, value: string, options?: FillOptions): Promise<void> {
//         const locator = getLocator(input);
//         await locator.fill(value, options);
//     }

//     async click(input: string | Locator, options?: ClickOptions): Promise<void> {
//         let locator = getLocator(input);
//         await locator.click(options)
//     }

// }
*/