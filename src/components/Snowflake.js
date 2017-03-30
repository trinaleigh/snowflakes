import React, { PropTypes } from 'react'

const Snowflake = ({ hexagon, visible }) => {

	var sliceArray = []
	for (let angle = 0; angle < 360; angle += 60) {
		var src = "url('images/" + hexagon + ".png')"
		var transform = "rotate(" + angle + "deg)"
		sliceArray.push(<img src={src} style={{ transform: transform }}/>)
	}

	console.log(hexagon)

	return (
		<div className="snowflake">
		{sliceArray}
		</div>
	)

}

Snowflake.propTypes = {
	hexagon: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired
}

export default Snowflake
