import Header from './header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Body from './body'

export default class extends Component {
  componentDidMount() {
    const search = trimStart(this.props.location.search, '?r=')
    if (search) this.props.history.replace(search)
  }
  render() {
    return (
      <div>
        <Header actions={actions} />
        <Switch>
          <Route exact path="/home" component={Body} />
        </Switch>
      </div>
    )
  }
}

const actions = [{label: "ACTIONS", onPress: () => console.log('action')}]
