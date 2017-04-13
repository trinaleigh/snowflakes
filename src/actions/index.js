export const selectImage = (slice) => {
	return {
		type: 'SELECT_IMAGE',
		image: slice
	}
}

export const reset = () => {
	return {
		type: 'RESET'
	}
}

export const startDraw = () => {
	return {
		type: 'START_DRAW'
	}
}

export const stopDraw = () => {
	return {
		type: 'STOP_DRAW'
	}
}