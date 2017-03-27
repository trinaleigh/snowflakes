import React, { PropTypes } from 'react'

const Hexagon = ({ name, selected, visible, selectClick }) => (

	<div className="hex" onClick={selectClick} style={{ backgroundImage: "url('images/" + name + ".png')" }}>
	</div>
)

Hexagon.propTypes = {
	name: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
	visible: PropTypes.bool.isRequired,
	selectClick: PropTypes.func.isRequired
}

export default Hexagon
