/**
 * Created by Олександр on 01.05.2015.
 */
Template.nav.helpers(
    {
        activeIfTemplateIs: function() {
            var currentRoute = Router.current();
            if (currentRoute) {                             ///Router.current() may return null on startup
                for (var i=0; i<arguments.length; i++){     /// returns 'active' if this is template listed in helper parameters
                    if (arguments[i] === currentRoute.lookupTemplate()) return 'active';}
            }
            return '';
        },
        Posts: function(number) {return Posts.find({},{limit:number, sort: {date: -1}})}
    }
);
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});