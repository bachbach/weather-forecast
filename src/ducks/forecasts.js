import ForecastsService from 'services/ForecastsService'
import { transformById } from 'helpers/redux'

const forecastsService = new ForecastsService()

export const actions = {
  GET_FORECASTS_SUCCESS: Symbol('GET_FORECASTS_SUCCESS'),
  GET_FORECASTS_ERROR: Symbol('GET_FORECASTS_ERROR')
}

const getForecastsSuccess = (forecasts) => ({ type: actions.GET_FORECASTS_SUCCESS, forecasts })
const getForecastsError = (error) => ({ type: actions.GET_FORECASTS_ERROR, error })

export const getForecasts = (query) => {
  return async dispatch => {
    try {
      const { data } = await forecastsService.getForecasts(query)
      
      dispatch(getForecastsSuccess(data))
      return data
    } catch (e) {
      return dispatch(getForecastsError(e.response.data))
    }
  }
}

const initState = {
  entires: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case actions.GET_FORECASTS_SUCCESS:
      return {
        ...state,
        entires: transformById(action.forecasts)
      }
    default: 
      return state
  }
}