const followToggleUtil = {
    followAJAX: function(userArg){
        return $.ajax({
        method: 'POST',
        url: `/users/${userArg}/follow`
        })
    },
    unfollowAJAX: function(userArg){
    return $.ajax({
        method: 'DELETE',
        url: `/users/${userArg}`
        })
    }
}