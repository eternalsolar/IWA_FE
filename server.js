var express = require('express');
var proxy = require('./proxy.conf');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/assets', function(req,res){
    res.sendFile(__dirname + 'dist/assets');
})

app.get('/*', function(req,res){
    res.sendFile(__dirname + 'dist/index.html');
})

var port = process.env.PORT || 8080;
app.listen(port, function(){
    const proxyConfig = {
        context: '/api',
        pathRewrite: { '^/api': '' },
        target: 'https://test-iwa.herokuapp.com/',
        changeOrigin: true,
        secure: true
      }
    proxy(proxyConfig);
    console.log('server is running on port ' + port + '.');
})