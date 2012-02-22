// Источник воздействия
var _reactor = null;

// Ощущение
var _sense = null;

/**
 * Influence something
 * @param Object Источник воздействия, тот, который воздействует на текущую реакцию
 */
exports.influence = function(reactor) {
	
    // Something or somebody influenced
//    if(typeof(reactor) != 'undefined') {
//        _reactor = reactor;
//    }
    
    console.log("I am influenced");
    
    // Find out sense
    sense();
    
};

/**
 * Sense influence
 * Senses: психологические, физиологические
 */
exports.sense = function() {
	
    console.log("I sense");
    
    // React
    react();
    
};

/**
 * React on sense
 * @param Object Объект воздействия, если воздействовали (или другая реакция)
 */
exports.react = function(reaction) {

    console.log("I react");


    // Something or somebody influenced
//    if(typeof(reaction) != 'undefined') {
//        influence(reaction)
//    }

    // Learn
    learn();
	
};


/**
 * Обучение: запомнить на будущее.
 */
exports.learn = function() {
    
    console.log("I learn");
    
    // Something or somebody influenced
    // ** 

};
