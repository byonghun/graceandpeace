const SERMONS = [
  {
    uploadDate: "2018-05-18",
    file: "sermon.mp3",
    title: "Test Sermon",
    description: "This is a test",
    label: "test"
  },
  {
    uploadDate: "2018-05-25",
    file: "sermon01.mp3",
    title: "Test Sermon 2",
    description: "This is a test number 2",
    label: "test-1"
  }
]

export default class extends Component {
  state = {sermons: SERMONS}
  render() {

    return (
      <div>
        <div>
          <h1>SERMONS</h1>
        </div>
        <Upload />
        <Form postSermon={this.postSermon} />
        {this.state.sermons.map(({uploadDate, file, title, description, label}) => {
           return (
             <div style={{display: 'flex', flexDirection: 'row', background: 'white', width: '90%', margin: '10px auto', alignContent: 'space-between'}}>
               <div style={{flex: 1, flexDirection: 'column', justifyContent: 'center', marginLeft: '20px'}}>
                 <h3>{title}</h3>
                 <p>{`Posted on ${uploadDate}`}</p>
                 <p>{description}</p>
               </div>
               <div style={{flex: 1, textAlign: 'center'}}>
                 <p>The audio file</p>
               </div>
             </div>
           )})}
      </div>
    )
  }

  postSermon = ({label}) => {
    const sermon = {
      uploadDate: "2018-06-03",
      file: label,
      title: "Test Sermon 03",
      description: "This is a test 2",
      label: "Post sermon"
    }
    SERMONS.push(sermon)
    this.setState({sermons: SERMONS})
  }
}


import { reduxForm, Field } from 'redux-form'
import { postSermon } from '../../../actions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

@reduxForm({form: 'SermonForm'})
class Form extends Component {
  render() {
    const { postSermon, handleSubmit } = this.props

    return (
      <div style={{flex: 1}}>
        <Field
          name="label" component="input"
          type="text" placeholder="firebase"
        />
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
