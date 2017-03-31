const selector = (state = 'triangle', action) => {
	if (action.type === 'SELECT_IMAGE') {
        return action.image
	} else {
		return state
	}
}

export default selector