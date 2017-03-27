export const selectImage = (slice) => {
	console.log(slice)
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