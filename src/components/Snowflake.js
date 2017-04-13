import React, { PropTypes } from 'react'

const Snowflake = ({ hexagons, visible }) => {

	var sliceArray = []
	for (let hexagon of hexagons){
		for (let angle = 0; angle < 360; angle += 60) {
			var src = "images/" + hexagon + ".png"
			var transform = "rotate(" + angle + "deg)"
			sliceArray.push(<img src={src} style={{ transform: transform }}/>)
		}
	}


	return (
		<div className="snowflake">
		{sliceArray}
		</div>
	)

}

Snowflake.propTypes = {
	hexagons: PropTypes.array.isRequired,
	visible: PropTypes.bool.isRequired
}

export default Snowflake
