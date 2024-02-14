import { GotoOptions } from '../setup/optional.parameter.types';
import { getPage } from './page.utils';
import { LOADSTATE } from '../playwright.config';


import { Dialog, Locator, Response } from '@playwright/test';




export async function gotoURL(path: string, options: GotoOptions = { waitUntil: LOADSTATE }): Promise<null | Response> {
    return await getPage().goto(path, options);
}