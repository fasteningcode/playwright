import { gotoURL, fill } from '../../package/utils/action.utils'
import { getLocator } from '../../package/utils/locator.utils';


const userName = `#user-name`;
const passWord = () => getLocator(`#password`);


export async function openPage(url) {
    await gotoURL(url);
}

export async function login(username: string, password: string) {
    await fill(userName, username);
    await fill(passWord(), password);

}


