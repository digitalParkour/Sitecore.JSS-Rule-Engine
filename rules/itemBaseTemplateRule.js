module.exports = function(rule, ruleContext) {
    var operator = ruleContext.ruleEngine.operatorDefinitions[rule.operatorId];

    if(!operator)
    {
        throw new Error("Operator definition is missing for id ", rule.operatorId);
    }    
}