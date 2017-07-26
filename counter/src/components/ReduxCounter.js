import React, {Component} from 'react'
import { Provider } from 'react-redux'

import store from '../stores'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class ReduxCounter extends Component {
  constructor() {
    super()
  }

  render () {
    return (
    <Provider store={store}>
      <div>
        <h1>Counter: {this.props.currentCounter.counter}</h1>
        <button onClick={() => this.props.tambah()}> INCREMENT </button>
        <button onClick={() => this.props.kurang()}> DECREMENT </button>
      </div>
    </Provider>
    )
  }

}

//store
const mapStateToProps = (state) => {
  return {
    currentCounter: state.penghitungCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tambah: () => dispatch(increment),
    kurang: () => dispatch(decrement)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)
