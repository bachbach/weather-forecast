import { connect } from 'react-redux'
import { getForecasts } from 'ducks/forecasts'
import { Forecasts } from 'screens/Forecasts'

const mapStateToProps = state => ({
  forecasts: state.forecasts.entries
})

const mapDispatchToProps = dispatch => ({
  getForecasts: () => dispatch(getForecasts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Forecasts)
