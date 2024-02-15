import { FrameLocator, Locator, selectors } from '@playwright/test';
import { getPage } from './page.utils';
import {
    GetByRoleOptions,
    GetByRoleTypes,
    LocatorOptions,
} from '../setup/optional.parameter.types';

export function getLocator(input: string | Locator, options?: LocatorOptions): Locator {
    return typeof input === 'string' ? getPage().locator(input, options) : input;
}

export function getLocatorByRole(role: GetByRoleTypes, options?: GetByRoleOptions): Locator {
    return getPage().getByRole(role, options);
}

export function getLocatorByLabel(text: string | RegExp, options?: GetByRoleOptions): Locator {
    return getPage().getByLabel(text, options);
}
