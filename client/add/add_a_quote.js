/**
 * Created by Олександр on 05.05.2015.
 */
Template.add_a_quote.events({
    'submit form': function (e){
        e.preventDefault();
        var quote = {
            highlight: $(e.target).find('[name=highlight]').val(),
            continuation: $(e.target).find('[name=continuation]').val(),
            author: $(e.target).find('[name=author]').val()
        };
        quote._id = Quotes.insert(quote);
        ///Router.go('postPage', post); There should be a quote page
        Session.set('currentQuoteNumber',Quotes.find().count()-1);
        Session.set('transitionProgress', 0);
        Session.set('transitionDirection', "forward");
        Router.go('homepage');
    }
});