/**
 * Created by Олександр on 28.04.2015.
 */
Template.latestNews.helpers({
        lastPost: function () {
            return Posts.findOne( {},{sort:{date:-1}} )
        }
});