import { gotoURL } from '../utils/action.utils'



export async function openPage(url) {
    await gotoURL(url);
}