const drawing = (state = false, action) => {
	if (action.type === 'START_DRAW'){
		return true
	} else if (action.type === 'STOP_DRAW'){
		return false
	} else {
		return state
	}
}

export default drawing