import { TOKEN } from '../utils/config';
import Cookies from 'js-cookie'

function useToken(remove?: boolean) {
  if (remove) {
    Cookies.remove(TOKEN)
    return ''
  }

  const token = Cookies.get(TOKEN) || ''

  return token
}

export default useToken