import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import storeConfigurator from 'services/ReduxStoreConfigurator'
import ForecastsConnector from 'connectors/ForecastsConnector'

const store = storeConfigurator.configureStore()

const history = createBrowserHistory()

class Router extends Component {
  render() {
    console.log('router...', process.env.PUBLIC_URL)
    return (
      <Provider store={store}>
        <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path='/' component={ForecastsConnector} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Router