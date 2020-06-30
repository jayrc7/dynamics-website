import React, { Component } from 'react';
import Toolbar from '../components/Toolbar.js';
import WaysToGiveText from '../components/WaysToGiveText.js';
import Amazon from '../images/waytogive/amazon smile.jpg';
import CurrentFund from '../images/waytogive/Kendra Scott Fundraiser 1.png';
import Instructions from '../images/waytogive/amazon smile instructions.jpg';
import ModalImage from 'react-modal-image';
import '../css/Support.css';
import '../css/WaysToGive.css';
import '../css/Global.css';
import SupportStates from '../components/SupportStates.js';

class WaysToGive extends Component {
    constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.imageRef = React.createRef();
	}

	state= {
		donateButtonClicked: false
	}

	handleDonateButtonClicked = () =>{
		this.setState({
			donateButtonClicked: true
		});
	}


    render() {
		// component will render JSX (react's version of html) inside return statement
		//window.textTimer = setInterval(this.changeStyle, 1000);
		if(this.state.donateButtonClicked) {
		return (
			// can only return one element so if you want more than one make sure they're nested inside a div
			<div>
			<div className="textWays" >
				<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
				<h1><span style={{fontStyle: 'normal',fontWeight: 'normal'}}id='dynamics' ref={this.myRef}>Ways to  <br/>Give</span></h1>
                <WaysToGiveText />
				<SupportStates />
			</div>
			</div>
		);
		}
		else {
			return (
				// can only return one element so if you want more than one make sure they're nested inside a div
				<div>
				<div className="textWays" >
					<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
					<h1><span style={{fontStyle: 'normal',fontWeight: 'normal'}}id='dynamics' ref={this.myRef}>Ways to  <br/>Give</span></h1>
					<WaysToGiveText />
					<button 
						className="btn btn-secondary Donate-Button"
						style = {{marginLeft:"calc(-5.5vw"}}
						onClick={this.handleDonateButtonClicked}
					>
						Donate 
				</button>
				</div>
				</div>
			);
		}
	}
}

export default WaysToGive;