
//console.log(module);

//module.exports = "Hello world";

//module.exports = getDate; //no paranthesis added because not want to call 

exports.getDate =  function() {

var today = new Date();

var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

return  today.toLocaleDateString("en-US",options);

}

module.exports.getDay = getDay;

function getDay(){

    var today = new Date();
    
    var options = {
        weekday: "long",
    };

    return  today.toLocaleDateString("en-US",options);
    
    }

// console.log(module.exports);

//reusable code import export, create your own modules.

// module.exports.getDay = getDay;

// var getDay = function(){

//     var today = new Date();
    
//     var options = {
//         weekday: "long",
//     };

//     return  today.toLocaleDateString("en-US",options);
    
//     }


//module.export js object & obj have property & method associated with it.