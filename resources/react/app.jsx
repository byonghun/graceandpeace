import { Route, BrowserRouter } from 'react-router-dom'
import App from './containers'
import Header from './containers/header'

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={App} />
        </div>
      </BrowserRouter>
    )
  }
}
