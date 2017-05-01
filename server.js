import express from 'express';
import config from './config/config.js';
const app = express();

app.use(async(req, res, next)=>{
	let start = new Date();
	await next();
	let handleCost = new Date() - start;
	console.log(`${req.method} ${req.url} -> ${handleCost}ms`);
});

app.use(express.static(__dirname + '/static'));
app.use('/api/index',express.static(__dirname + '/static/index.html'));
app.use('/api/browser',express.static(__dirname + '/static/browser.html'));

app.get("/api/haha", (req, res)=>{
	res.send("hahahhahahha@$%T#%^.......");
});

app.use("*", (req, res)=>{
	res.send("404 page not found!")
});

app.listen(config.port, ()=>console.log("server is running at "+config.port+"..."));
