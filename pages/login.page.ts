import { gotoURL, fill } from '../utils/action.utils'
import { getLocator } from '../utils/locator.utils';



const usernameE = `#user-name`;
const passwordE = () => getLocator('[data-test="password"]')


export async function openPage(url) {
    await gotoURL(url);
}

export async function login(username: string, password: string) {
    await fill(usernameE, username);
}


