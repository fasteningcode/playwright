import { click } from '../package/utils/action.utils'
import { getLocatorByLabel, getLocatorByRole } from '../package/utils/locator.utils'

const goCrossSite = () => getLocatorByRole('button', { name: 'Go cross-site (complex page)' });

const searchLink = () => getLocatorByLabel('Search page')

export async function clickComplexPage() {
    await click(goCrossSite());
}

export async function clickElementInFrame() {
    await click(searchLink());
}
