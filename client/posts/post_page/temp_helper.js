/**
 * Created by Олександр on 01.05.2015.
 */
Template.postPage.helpers(
    {
        value:'latestNews',
        dateFormat: function(){
    return this.date.toLocaleString();
}
    }
);