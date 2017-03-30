import { connect } from 'react-redux'
import Snowflake from '../components/Snowflake.js'

const mapStateToProps = (state) => {
	return {
		hexagon: state.selector, 
		visible: state.drawing === true
	} 
}

const FlakeDisplay = connect(
	mapStateToProps
)(Snowflake)

export default FlakeDisplay