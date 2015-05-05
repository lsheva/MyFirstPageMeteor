/**
 * Created by lsheva on 19.03.15.
 */
Session.setDefault('currentQuoteNumber', 0);
Session.setDefault('transitionProgress', 0);
Session.setDefault('transitionDirection', "forward");
Session.setDefault('pauseProgress', 0);
transitionDelay = 2000;         //No 'var' before because of using this variable in another file.
var pauseDelay = 2000;          //Variables with var can be used only within current file
var transitionSteps = 100;

var nextQuote = function () {
    var qNumber = Session.get('currentQuoteNumber');
    if (qNumber === (Quotes.find().count() - 1)) Session.set('currentQuoteNumber', 0);   //if this is the last quote, then go to the first one
    else {
        qNumber += 1;
        Session.set('currentQuoteNumber', qNumber);
    }
};

var transitionProgress = setInterval(function () {
    var transitionP = Session.get('transitionProgress');
    if (Session.get('transitionDirection') == "forward") transitionP += transitionDelay / transitionSteps;
    if (Session.get('transitionDirection') == "backward") transitionP -= transitionDelay / transitionSteps;
    if (Session.get('transitionDirection') == "pause") {
        var pauseP = Session.get('pauseProgress');
        if (pauseP < pauseDelay) {
            pauseP += (pauseDelay / transitionSteps);
            Session.set('pauseProgress', pauseP);
        }
        else {
            Session.set('transitionDirection', "backward");
            Session.set('pauseProgress', 0);
            transitionP -= transitionDelay / transitionSteps;
        }
    }
    if (transitionP == 0) {
        Session.set('transitionDirection', "forward");
        nextQuote();
    }
    if (transitionP == transitionDelay) Session.set('transitionDirection', "pause");

    Session.set('transitionProgress', transitionP);

}, transitionDelay / transitionSteps);
