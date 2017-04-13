import { connect } from 'react-redux'
import Snowflake from '../components/Snowflake.js'

const mapStateToProps = (state) => {
	return {
		hexagons: state.selector
	} 
}

const FlakeDisplay = connect(
	mapStateToProps
)(Snowflake)

export default FlakeDisplay