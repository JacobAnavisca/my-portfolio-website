// index.js
const serverless = require('serverless-http')
const express = require('express')
const app = express()
const fs = require('fs')
//var favicon = require('serve-favicon')

//var dynamicHtml = `<h1>Home?</h1>`
function buildHTML (cssPath = '', dynamicHtml = '') {
	var year = new Date().getFullYear();
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
	    <link rel='shortcut icon' type='image/x-icon' href='https://my-portfolio-dev-images.s3-us-west-2.amazonaws.com/favicon.ico' />

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
		<div id="mainContent" class="container-fluid">
		  <div class="row justify-content-center">
		    <div class="col-6">
		    ${dynamicHtml}
		    </div>
		  </div>
		  <div id="footer" class="row fixed-bottom">
		    <div class="col-5">
		      <p>Jacob Anavisca ©${year}</p>
		    </div>
		    <div class="col-2 text-center">
		    	<a class="fab fa-facebook-square pull-right fa-2x" href="https://www.facebook.com/jacob.anavisca"></a>
    			<a class="fab fa-instagram pull-right fa-2x" href="https://www.instagram.com/skanbananas/"></a>
  				<a class="fab fa-linkedin pull-right fa-2x" href="https://www.linkedin.com/in/jacob-anavisca-8b424ab8/"></a>
    		</div>
		  </div>
		</div>
		<script>
		// var mainContentHeight = window.screen.height - document.getElementById("mainContent").offsetTop; //71
		// document.getElementById("mainContent").style.height = mainContentHeight + "px";
		// console.log(mainContentHeight + "px");
		</script>
		<!-- Optional JavaScript -->
	    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
	    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	  </body>
	</html>`;

	return html
}

/*app.get('/favicon.ico', (req, res) => {
	var favicon = new Buffer(__dirname + "/images/android-chrome-192x192.png")
	res.statusCode = 200
	res.setHeader('Content-Length', favicon.length)
	res.setHeader('Content-Type', 'image/png')
    res.end(favicon)
})*/

//app.use("/images", express.static('images'))

/*app.get('/favicon.ico', function (req, res) {
	//var img = fs.readFileSync(__dirname + '/images/favicon.ico')
	//express.static(__dirname + '/images/favicon.ico')
	//res.writeHead(200, {"Content-Type": "image/x-icon"})
	//res.end(img,'binary')
	res.send(img)
})*/

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