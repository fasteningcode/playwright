import { Locator, Page } from '@playwright/test';


// Navigation Options
export type GotoOptions = Parameters<Page['goto']>[1];
export type WaitForLoadStateOptions = Parameters<Page['waitForLoadState']>[0];

// Actions Options
export type FillOptions = Parameters<Locator['fill']>[1];

//Locator Options
export type LocatorOptions = Parameters<Page['locator']>[1];