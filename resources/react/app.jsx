import { Route, BrowserRouter } from 'react-router-dom'
import App from './containers'
import Header from './containers/header'
import { Provider } from 'react-redux'
import { store } from './store'

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Route path="/" component={App} />
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}
