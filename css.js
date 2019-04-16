// index.js
const serverless = require('serverless-http');
const express = require('express')
const styles = express()

//font-family: 'Gravitas One', cursive;
//font-family: 'Cabin Sketch', cursive;
//font-family: 'Amatic SC', cursive;
function buildCSS (bgImage = '') {
	var css = `/* site css */
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Gravitas+One|Cabin+Sketch');

body {
	background-image: url(${bgImage});
	background-position: center center;
	background-size: cover;
}

nav {
	background-color: #e3f2fd;
}

#mainContent {
	height: 100%;
}

#mainContent > div:first-child, div:last-child {
	height: 20%;
}

#mainContent > div:nth-child(2) {
	height: 60%;
}`;

	return css
}

module.exports.handler = (event, context, callback) => {
	var bgImage = 'https://s3-us-west-2.amazonaws.com/my-portfolio-dev-images/IMG_20180825_134847.jpg'
	var css = buildCSS(bgImage)
	const response = {
	  	  'statusCode': 200,
	      'headers': {'Content-Type': 'text/css'},
	      'body': css
	  }
	callback(null, response)
}