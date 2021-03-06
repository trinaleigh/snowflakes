import { connect } from 'react-redux'
import Hexagon from '../components/Hexagon.js'
import { selectImage } from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		name: ownProps.name,
		selected: state.selector.includes(ownProps.name)
	} 
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		selectClick: () => {

			dispatch(selectImage(ownProps.name))
		}
	}
}

const HexSelection = connect(
	mapStateToProps,
	mapDispatchToProps
)(Hexagon)

export default HexSelection