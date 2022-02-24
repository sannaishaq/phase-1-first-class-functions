function receivesAFunction(things){
    return things();
}
receivesAFunction(function() {return 4+5});

function returnsANamedFunction(){
    return function namedFunction(){}
}

function returnsAnAnonymousFunction(){
    return function(){}  
}
// returnsAnAnonymousFunction(function(){})
// returnsAnAnonymousFunction(function () )
