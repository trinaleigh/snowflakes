import { combineReducers } from 'redux'
import drawing from './drawing.js'
import selector from './selector.js'

const snowflakeApp = combineReducers({
  drawing,
  selector
})

export default snowflakeApp
