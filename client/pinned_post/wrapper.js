/**
 * Created by ��������� on 28.04.2015.
 */
Template.wrapper.helpers(
    {
        pinnedPost:function(){
            return Posts.findOne({address:'webdeveloping'})
        }
    }
)