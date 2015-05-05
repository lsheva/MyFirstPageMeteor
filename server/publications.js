/**
 * Created by Олександр on 01.05.2015.
 */
Meteor.publish('Posts', function(){
    return Posts.find();
});

Meteor.publish('Quotes', function(){
    return Quotes.find();
});