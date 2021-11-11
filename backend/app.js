import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port =3005

//static files

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/css',express.static(__dirname + 'public/images'))

app.set('views', './views')
app.set('view engine', 'ejs')
app.get("", (req, res) => {
	res.render('index')
	app.get('', (req, res) => {
		res.render('index', {text: "This is ejs"})

	})
})






app.listen(port, function(){
	console.info("listening on port: " + port);
})
