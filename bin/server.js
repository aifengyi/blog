import express from 'express';
const app = express();

app.use(async(req, res, next)=>{
	let start = new Date();
	await next();
	let handleCost = new Date() - start;
	console.log(`${req.method} ${req.url} -> ${handleCost}ms`);
});

app.get("/index", (req, res)=>{
	res.send("index");
});

app.use("*", (req, res)=>{
	res.send("404 page not found!")
});

app.listen(3000,()=>console.log("server is running ..."));