import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default class extends Component {
  render() {
    const {actions} = this.props

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" style={style.flex}>
              Title
            </Typography>
            {actions && this.renderActions(actions)}
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  renderActions = actions => (
    actions.map(({label, onPress}) => (
      <div style={[style.button, style.flex]}>
        <Button onClick={onPress}>{label}</Button>
      </div>
    ))
  )
}

const style = {
  button: {
    width: 100,
  },
  flex: {
    flex: 1
  }
}
