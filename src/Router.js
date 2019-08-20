import React, { Component } from 'react'
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import storeConfigurator from 'services/ReduxStoreConfigurator'
import ForecastsConnector from 'connectors/ForecastsConnector'

const store = storeConfigurator.configureStore()

const history = createBrowserHistory()

class Router extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path='/' component={ForecastsConnector} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Router