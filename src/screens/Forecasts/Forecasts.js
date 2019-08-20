import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Forecasts = props => {
  useEffect(() => {
    props.getForecasts()
  }, [])

  return (
    <div>Hello from Forecasts!</div>
  )
}

export default Forecasts