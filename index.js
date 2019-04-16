// index.js
const serverless = require('serverless-http');
const express = require('express')
const app = express()

//var dynamicHtml = `<h1>Home?</h1>`
function buildHTML (cssPath = '', dynamicHtml = '') {
	var html = `<!doctype html>
	<html lang="en">
	  <head>
	    <!-- Required meta tags -->
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	    <!-- Bootstrap CSS -->
	    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	    <!-- Font Awesome CSS -->
	    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
	    <link href="https://fonts.googleapis.com/css?family=Gravitas+One" rel="stylesheet">
	    <link href="/css/${cssPath}" rel="stylesheet">

	    <title>Hello, world!</title>
	  </head>
	  <body class="vh-100">
		<nav class="navbar navbar-expand-lg navbar-light">
		  <a class="navbar-brand" href="/"><span style="font-size: 30px; color: black;">&#60; <i class="fas fa-home"></i> &#47;&#62;</span></a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div class="navbar-nav">
		      <a class="nav-item nav-link active" href="/">Home<span class="sr-only">(current)</span></a>
		      <a class="nav-item nav-link" href="/about">About</a>
		      <a class="nav-item nav-link" href="/projects">Projects</a>
		      <a class="nav-item nav-link" href="/contact">Contact</a>
		    </div>
		  </div>
		</nav>
		<div id="mainContent" class="container-fluid"">
		  <div class="row">
		  </div>
		  <div class="row justify-content-center"">
		    <div class="col-6">
		    ${dynamicHtml}
		    </div>
		  </div>
		  <div class="row"">
		  </div>
		</div>
		<!-- Optional JavaScript -->
	    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
	    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	  </body>
	</html>`;

	return html
}

app.get('/', function (req, res) {
	var cssPath = 'home'
	var dynamicHtml = `<h1 style="font-family: 'Gravitas One', cursive;">Welcome</h1><p>My name is Jacob Anavisca and this is my portfolio website.</p>`
	var html = buildHTML(cssPath, dynamicHtml)
	res.send(html)
})

app.get('/about', function (req, res) {
	//var bgImage = 'https://s3-us-west-2.amazonaws.com/my-portfolio-dev-images/IMG_2929.JPG'
	var dynamicHtml = '<h1>About</h1>'
	var html = buildHTML('', dynamicHtml)
	html = html.replace(/ active|<span class="sr-only">\(current\)<\/span>/g, '')
	html = html.replace(/(nav-item nav-link)(?=" href="\/about)/g, '$1 active')
	html = html.replace(/(About)/g, '$1<span class="sr-only">(current)</span>')
	res.send(html)
})

app.get('/projects', function (req, res) {
	//var bgImage = 'https://s3-us-west-2.amazonaws.com/my-portfolio-dev-images/IMG_2929.JPG'
	dynamicHtml = `<h1>Projects</h1>`
	var html = buildHTML('', dynamicHtml)
	html = html.replace(/ active|<span class="sr-only">\(current\)<\/span>/g, '')
	html = html.replace(/(nav-item nav-link)(?=" href="\/projects)/g, '$1 active')
	html = html.replace(/(Projects)/g, '$1<span class="sr-only">(current)</span>')
	res.send(html)
})

app.get('/contact', function (req, res) {
	//var bgImage = 'https://s3-us-west-2.amazonaws.com/my-portfolio-dev-images/IMG_2929.JPG'
	dynamicHtml = `<h1>Contact</h1>`
	var html = buildHTML('', dynamicHtml)
	html = html.replace(/ active|<span class="sr-only">\(current\)<\/span>/g, '')
	html = html.replace(/(nav-item nav-link)(?=" href="\/contact)/g, '$1 active')
	html = html.replace(/(Contact)/g, '$1<span class="sr-only">(current)</span>')
	res.send(html)
})

app.post('/', function (req, res) {
	res.send('Hello Post World!')
})

module.exports.handler = serverless(app);