import React, { Component } from 'react';
//can import your own css file here instead of App.css
import dancer from './Dancer.jpg';
import '../css/DynamicStyle.css';
import '../css/Global.css';
// must extend "Component" and it's recommended to name the class the same name as the filename
class HomePage extends React.Component {
	// area where functions are defined (See FormExample.js)
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.imageRef = React.createRef();
		this.changeStyle = this.changeStyle.bind(this);
	}
	changeStyle(){
		const x = this.myRef.current;
		const y = this.imageRef.current;
		var count = 0;
		if(x.style.fontStyle='italic'){
			x.style.fontWeight= 'bold';
			x.style.fontStyle='normal';
			y.style.transform = "rotate(0deg)";
		}
		else if(x.style.fontStyle='normal'&&x.style.fontWeight=='normal'){
			x.style.fontWeight = 'bold';
			x.style.textDecorationLine = 'underline';
			y.style.transform = "rotate(0deg)";
		}
		else if(x.style.textDecorationLine='underline'){
			x.style.fontStyle='italic';
			x.style.fontWeight = 'normal';
			x.style.textDecorationLine = 'initial';
			y.style.transform = "rotate(-5deg)";
		}
		else if(x.style.fontWeight='bold'){
			x.style.fontStyle='normal';
			x.style.fontWeight='normal';
			y.style.transform = "rotate(5deg)";
		}
	}
	// render function takes care of displaying component
	render() {
		// component will render JSX (react's version of html) inside return statement
		setInterval(this.changeStyle, 1000);
		return (
			// can only return one element so if you want more than one make sure they're nested inside a div
			<div>
				<toolbar/>
			<div className="text" >
				<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
				<p>A team of <span style={{color: '#FF4081',fontStyle: 'normal',fontWeight: 'normal'}}id='dynamics' ref={this.myRef}> <br/>dynamic</span> <span><br/>dancers.</span></p>
				<img src={dancer} style={{transform: "rotate(5deg)"}} ref = {this.imageRef}/>
			</div>
			</div>
		);
	}
}

// always export to allow importing in other files
export default HomePage;