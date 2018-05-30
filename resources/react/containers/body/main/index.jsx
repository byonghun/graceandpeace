import Carousel from 'nuka-carousel'

export default class extends Component {
  render() {
    return (
      <div id="main" style={style.main}>
        <Form />
      </div>
    )
  }
}

import { reduxForm, Field } from 'redux-form'
import { postSermon } from '../../../actions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

@reduxForm({form: 'SermonForm'})
@connect(null, {postSermon})
class Form extends Component {
  render() {
    const { postSermon, handleSubmit } = this.props

    return (
      <div style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Field name="label" component="input" type="text" placeholder="firebase"/>
        <Button
          variant="outlined" color="primary"
          onClick={handleSubmit(postSermon)}>
          Post
        </Button>
      </div>
    )
  }
}

class Upload extends Component {
  render() {
    return (
      <div>hello</div>
    )
  }
}

const style = {
  main: {
    height: 500,
    width: 800,
    background: 'white',
    margin: '40px auto',
    display: 'flex',
    flexDirection: 'row'
  }
}
