import React from 'react';
import { Link } from 'react-router';
import AllSlices from '../components/AllSlices.js';
import FlakeDisplay from '../containers/FlakeDisplay.js';

export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}

  	render() {

	    return (
	    	<div>
	    	<FlakeDisplay/>
	    	<AllSlices/>
	    	</div>
	    );
	}
}

