const hp=require('http');
const file=require('fs');
file.readFile("index.html",(err,htmlfile)=>{
	if(err)
	{
		throw err;
	}


const host=process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1' ;
const port=process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server=hp.createServer((req,res)=> {
	res.statusCode=200;
	res.setHeader('cont-type','text/plain')
	res.write(htmlfile);
	res.end('hello world');
});
server.listen(port, host,()=>{console.log('server started')});
});
