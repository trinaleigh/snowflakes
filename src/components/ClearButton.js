import React, { PropTypes } from 'react'

const ClearButton = ( {resetClick} ) => (
	<button className="clear" onClick={resetClick}>Clear</button>
)

ClearButton.propTypes = {
	resetClick: PropTypes.func.isRequired
}

export default ClearButton
