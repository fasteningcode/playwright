import { test } from "../package/setup/page.setup";
import * as LoginPage from '../pages/login.page'
import * as IFramePage from '../pages/iFrame.page'


test('Login Tests', async () => {
    await LoginPage.openPage("https://www.saucedemo.com/");
    await LoginPage.login("standard_user", "secret_sauce")
})

test('iFrames', async () => {
    await LoginPage.openPage("https://csreis.github.io/tests/cross-site-iframe.html");
    await IFramePage.clickComplexPage();
    await IFramePage.clickElementInFrame();
})
