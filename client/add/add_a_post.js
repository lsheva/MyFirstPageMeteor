/**
 * Created by Олександр on 04.05.2015.
 */
Template.add_a_post.events({
    'submit form': function (e){
        e.preventDefault();
        var post = {
            title: $(e.target).find('[name=title]').val(),
            address: $(e.target).find('[name=url]').val(),
            cut: $(e.target).find('[name=cut]').val(),
            text: $(e.target).find('[name=text]').val(),
            date: new Date(),
            author: Meteor.user().username
        };
        post._id = Posts.insert(post);
        Router.go('postPage', post);

    }
});