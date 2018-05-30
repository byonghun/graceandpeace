import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as form } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import { dataService } from '../react/middleware'

const middleware = applyMiddleware(
  thunkMiddleware,
  dataService
)

const reducer = combineReducers({form})
const initialState = {}

export const store = createStore(reducer,
                                 initialState,
                                 middleware)
