import { combineReducers } from 'redux'
import forecasts from './forecasts'

const appReducer = combineReducers({
  forecasts
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
