import APIInterceptor from './APIInterceptor'

export default class ForecastsService {
  constructor (api = APIInterceptor) {
    this.api = api
  }

  getForecasts(query = 'id=524901') {
    // return this.api.get(`/forecast?${query}`)
    return this.api.get('/forecast?id=524901&appid=c7d9c985558627e1717792be2372eaa4')
  }
}
