import Carousel from 'nuka-carousel'

export default class extends Component {
  render() {
    return (
      <div id="main" style={style.main}>
        <h1>IMAGE GOES HERE</h1>
      </div>
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
