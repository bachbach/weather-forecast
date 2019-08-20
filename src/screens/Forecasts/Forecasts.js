import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Forecasts = props => {
  console.log('forecasts screen!!!!')
  useEffect(() => {
    console.log('effect')
    props.getForecasts()
  }, [])

  const getForecasts = () => {
    return props.forecasts.map(forecast => (
      <div>
        <span>{forecast.dt_txt}</span>
      </div>
    ))
  }

  return (
    <div>
      <h1>Hello from Forecasts!</h1>
      <div>
        <div>{getForecasts()}</div>
      </div>
    </div>
  )
}

Forecasts.propTypes = {
  forecasts: PropTypes.array.isRequired
}

export default Forecasts