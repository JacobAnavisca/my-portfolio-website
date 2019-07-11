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
	background-repeat: no-repeat;
    background-attachment: fixed;
}

nav {
	background-color: #e3f2fd;
}

#mainContent {
}

#footer p {
	font-weight: bold;
	margin-inline-start: 1rem;
}

@media (max-width: 1200px) {
	legend {
		font-size: calc(1.275rem + 0.3vw);
	}
	h1, .h1 {
		font-size: calc(1.375rem + 1.5vw) !important;
	}
	h2, .h2 {
		font-size: calc(1.325rem + 0.9vw);
	}
	h3, .h3 {
		font-size: calc(1.3rem + 0.6vw);
	}
	h4, .h4 {
		font-size: calc(1.275rem + 0.3vw);
	}
	.display-1 {
		font-size: calc(1.725rem + 5.7vw);
	}
	.display-2 {
		font-size: calc(1.675rem + 5.1vw);
	}
	.display-3 {
		font-size: calc(1.575rem + 3.9vw);
	}
	.display-4 {
		font-size: calc(1.475rem + 2.7vw);
	}
	.close {
		font-size: calc(1.275rem + 0.3vw);
	}
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