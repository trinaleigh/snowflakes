import { connect } from 'react-redux'
import ClearButton from '../components/ClearButton.js'
import { reset } from '../actions'


const mapStateToProps = (state) => {
	return 
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		resetClick: () => dispatch(reset())
	}
}

const Reset = connect(
	mapStateToProps,
	mapDispatchToProps
)(ClearButton)

export default Reset