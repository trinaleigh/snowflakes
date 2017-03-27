import React from 'react';
import { Link } from 'react-router';
import AllSlices from '../components/AllSlices.js';

export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}

  	render() {

	    return (
	    	<div>
	    	<AllSlices/>
	    	</div>
	    );
	}
}

