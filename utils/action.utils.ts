import { GotoOptions, FillOptions } from '../setup/optional.parameter.types';
import { getPage } from './page.utils';
import { LOADSTATE } from '../playwright.config';
import { Dialog, Locator, Response } from '@playwright/test';
import { getLocator } from './locator.utils';

export async function gotoURL(path: string, options: GotoOptions = { waitUntil: LOADSTATE }): Promise<null | Response> {
    return await getPage().goto(path, options);
}

export async function fill(input: string | Locator, value: string, options?: FillOptions): Promise<void> {
    const locator = getLocator(input);
    await locator.fill(value, options);
}