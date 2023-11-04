var createCounter = function(n) {
    
    return function() {
        console.log(n += 1);

    };
};

var counter = createCounter(3);

counter();