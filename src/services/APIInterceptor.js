import axios from 'axios'
// import mitt from 'mitt'
import appRegistry from './AppRegistry'

class APIInterceptor {
  constructor (baseURL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}`) {
    console.log(process.env)
    this.baseURL = baseURL

    const settings = {
      baseURL: this.baseURL
    }

    this.api = axios.create(settings)
  }


  get (url) {
    console.log('get???', url)
    return this.api.get(url, this.mergeConfig())
  }

  post (url, payload) {
    return this.api.post(url, payload, this.mergeConfig())
  }

  mergeConfig (config = {}) {
    const token = appRegistry.storage.get('token')

    return Object.assign({}, config, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...config.headers
      }
    })
  }
}

export { APIInterceptor }
export default new APIInterceptor()
