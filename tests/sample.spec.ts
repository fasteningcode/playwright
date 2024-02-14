import { test } from "../setup/page.setup";
import * as LoginPage from '../pages/login.page'


test('Login Tests', async () => {
    LoginPage.openPage("https://www.saucedemo.com/");
    LoginPage.login("standard_user", "secret_sauce")
})
