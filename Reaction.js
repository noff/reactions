var Reaction = function() {
    
    // Источник воздействия
    this._reactor = null;

    // Ощущение
    this._sense = null;
    
};




/**
 * Influence something
 * @param Object Источник воздействия, тот, который воздействует на текущую реакцию
 */
Reaction.prototype.influence = function(reactor) {
	
    // Something or somebody influenced
    if(typeof(reactor) != 'undefined') {
        _reactor = reactor;
    }
    
    console.log("I am influenced");
    
    // Find out sense
    this.sense();
    
};

/**
 * Sense influence
 * Senses: психологические, физиологические
 */
Reaction.prototype.sense = function() {
	
    console.log("I sense");
    
    // React
    this.react();
    
};

/**
 * React on sense
 * @param Object Объект воздействия, если воздействовали (или другая реакция)
 */
Reaction.prototype.react = function(reaction) {

    console.log("I react");

    // Something or somebody influenced
    if(typeof(reaction) != 'undefined') {
        influence(reaction)
    }

    // Learn
    this.learn();
	
};


/**
 * Обучение: запомнить на будущее.
 */
Reaction.prototype.learn = function() {
    
    console.log("I learn");
    
    // Something or somebody influenced
    // ** 

};
