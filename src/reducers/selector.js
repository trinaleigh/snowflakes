const selector = (state = ['line'], action) => {
	if (action.type === 'SELECT_IMAGE') {
		if (state.includes(action.image)) {
			var index = state.indexOf(action.image);
			return state.slice(0, index).concat(state.slice(index + 1))
		} else {
			return state.concat(action.image)
		} 
	} else {
		return state
	}
}

export default selector