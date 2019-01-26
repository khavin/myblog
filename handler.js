function getStory(request,response){
    console.log("received request for getStory");
    response.writeHead(200,{
        "Content-Type":"text/plain"
    });
    response.end("Great. Oh. Hello world!");
}

function postStory(request,response){
    console.log("received request for postStory");
    response.writeHead(200,{
        "Content-Type":"text/plain"
    });
    response.end("Great. Oh. Hello world!");
}

var mappings = {};
mappings["GET"] = {};
mappings["POST"] = {};

mappings["GET"]["/story"] = getStory;
mappings["POST"]["/story"] = postStory;

var requestHandler = function(request,response){
    console.log(request.method+" "+request.url);
    if(mappings[request.method.toUpperCase()][request.url]){
        mappings[request.method.toUpperCase()][request.url](request,response);
    }
    else{
        response.writeHead(404,{
            "Content-Type":"text/plain"
        });
        response.end();
    }
}

module.exports = requestHandler;