/**
 * Created by Олександр on 27.04.2015.
 */
Template.pager_wrap.helpers({
    quotes:function(currentQuoteNumber){
        return Quotes.find().fetch()[currentQuoteNumber];
    },
    currentOpacity: function () {
        return Session.get('transitionProgress')/transitionDelay;
    },
    currentQuoteNumber: function (){
        return Session.get('currentQuoteNumber');
    }
});