/**
 * Created by Олександр on 01.05.2015.
 */
Template.recentPosts.helpers({
   recentPosts: function(number){
       return number ? Posts.find({},{limit: number}) : Posts.find();
   }
});