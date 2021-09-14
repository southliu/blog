import { TOKEN } from '../utils/config';
import Cookies from 'js-cookie'

function useToken() {
  const token = Cookies.get(TOKEN) || ''

  return token
}

export default useToken