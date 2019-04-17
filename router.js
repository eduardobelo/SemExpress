var http = require('http');

var createRouter = (port) => {
    var routes = {
        GET: {},
        POST: {}
    }
    
    var get = (path, fn) => {
        routes['GET'][path] = fn;
    };

    var post = (path, fn) => {
        routes['POST'][path] = fn;
    };

    http.createServer( (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (!routes[req.method][req.url]) return res.end();
        routes[req.method][req.url] (req,res);
    }).listen(port);

    return {
        get: get,
        post: post
    }
};

module.exports = createRouter;