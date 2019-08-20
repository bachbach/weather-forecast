import { connect } from 'react-redux'
import { getForecasts } from 'ducks/forecasts'
import { Forecasts } from 'screens/Forecasts'

const mapDispatchToProps = dispatch => ({
  getForecasts: () => dispatch(getForecasts())
})

export default connect(null, mapDispatchToProps)(Forecasts)
