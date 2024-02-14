import { FrameLocator, Locator, selectors } from '@playwright/test';
import { getPage } from './page.utils';
import {
    LocatorOptions,
} from '../setup/optional.parameter.types';

export function getLocator(input: string | Locator, options?: LocatorOptions): Locator {
    return typeof input === 'string' ? getPage().locator(input, options) : input;
}
