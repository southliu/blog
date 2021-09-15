import { TOKEN } from '../utils/config';
import Cookies from 'js-cookie'

function useToken(token?: string, remove?: boolean) {
  if (remove) {
    Cookies.remove(TOKEN)
    return ''
  }
  if (token) Cookies.set(TOKEN, token)

  const tokenData = Cookies.get(TOKEN) || ''

  return tokenData
}

export default useToken