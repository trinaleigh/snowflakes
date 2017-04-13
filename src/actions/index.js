export const selectImage = (slice) => {
	return {
		type: 'SELECT_IMAGE',
		image: slice
	}
}

export const animate = () => {
	return {
		type: 'ANIMATE'
	}
}

export const reset = () => {
	return {
		type: 'RESET'
	}
}