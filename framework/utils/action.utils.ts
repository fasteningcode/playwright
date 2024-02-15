import { GotoOptions, FillOptions, ClickOptions } from '../setup/optional.parameter.types';
import { getPage } from './page.utils';
import { LOADSTATE } from '../../playwright.config';
import { Dialog, Locator, Response } from '@playwright/test';
import { getLocator } from './locator.utils';

export async function gotoURL(path: string, options: GotoOptions = { waitUntil: LOADSTATE }): Promise<null | Response> {
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

// const locator = getLocator(input);
// try {

//     await locator.click(options);
// }catch{
//     if (!locator) {
//         // If not found, iterate through iframes and search within them
//         const iframes = getPage().frames();
//         for (const iframe of iframes) {
//           const context = await iframe.content();// .contentFrame();
//           locator = await context. waitForSelector(elementSelector, { state: 'visible' });
//           if (elementHandle) {
//             break; // Exit the loop if found in an iframe
//           }
//         }
//       }
// }

