/**
 * Created by Олександр on 28.04.2015.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.setTemplateNameConverter(_.identity);    //cancels capitalizing while returning router template name

Router.map(function(){
    this.route('homepage', {path:'/'});

    this.route('postPage', {
        path:'/posts/:address',
        data: function () {return Posts.findOne({address: this.params.address});}
    });

    this.route('posts', {
        path:'/posts',
        data: function () {return Posts.find()}
    });

    this.route('bio', {
        template:'postPage',
        path:'/bio',
        data: function () {return Posts.findOne({address: 'bio'})}
    });

    this.route('portfolio', {
        path:'/portfolio',
        template:'postPage',
        data: function () {return Posts.findOne({address: 'portfolio'})}
    });

    this.route('contacts', {
        path:'/contacts'
    });

    this.route('add_a_post', {
        path:'/add_a_post'
    });

    this.route('add_a_quote', {
        path:'/add_a_quote'
    });

    var checkLogin = function() {
        if (! Meteor.user()) {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else {
                this.render('accessDenied');
            }
        } else {
            this.next();
        }
    };

    Router.onBeforeAction(checkLogin, {only: ['add_a_post', 'add_a_quote']})
});
