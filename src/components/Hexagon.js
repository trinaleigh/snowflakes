import React, { PropTypes } from 'react'

const Hexagon = ({ name, selected, visible, selectClick }) => (

	<img className="hex" onClick={selectClick} src={"images/" + name + ".png"}/>
)

Hexagon.propTypes = {
	name: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
	visible: PropTypes.bool.isRequired,
	selectClick: PropTypes.func.isRequired
}

export default Hexagon
