import { Locator, Page } from '@playwright/test';


//NAVIGATION OPTIONS
export type GotoOptions = Parameters<Page['goto']>[1];
export type WaitForLoadStateOptions = Parameters<Page['waitForLoadState']>[0];