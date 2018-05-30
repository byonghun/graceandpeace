import Header from './header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Body from './body'
import Sermons from './body/sermons'

export default class extends Component {
  componentDidMount() {
    const search = trimStart(this.props.location.search, '?r=')
    if (search) this.props.history.replace(search)
  }
  render() {
    return (
      <div>
        <Header actions={actions(this.props)} />
        <Switch>
          <Route exact path="/home" component={Body} />
          <Route exact path="/sermons" component={Sermons} />
        </Switch>
      </div>
    )
  }
}

const actions = props => ([
  {label: "Sermons", onPress: () => props.history.push('/sermons')},
  {label: "ACTIONS", onPress: () => console.log('action')},
  {label: "ABOUT US", onPress: () => console.log('aboutus')}
])
