import React, { PropTypes } from 'react'

const Hexagon = ({ name, selected, selectClick }) => (

	<img className="hex" 
		onClick={selectClick} 
		src={"images/" + name + ".png"} 
		style={{ boxShadow: selected ? "0px 0px 2px 2px var(--secondary)" : "none" }}
	/>
)

Hexagon.propTypes = {
	name: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
	selectClick: PropTypes.func.isRequired
}

export default Hexagon
