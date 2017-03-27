const drawing = (state = false, action) => {
	if (action.type === 'RESET'){
		return false
	} else if (action.type === 'ANIMATE'){
		return true
	} else {
		return state
	}
}

export default drawing