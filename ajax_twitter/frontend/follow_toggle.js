class FollowToggle{
    constructor(el) {
        this.$el = $(el);
        this.userId = $el[data-user-id];
        this.followState = $el[initial-data-state];
        this.render();
        this.$el.on("click", this.handleClick.bind(this))
    }
    render(){
        if(this.followState === 'unfollowed'){
            return "Follow!";
        }else{
            return "Unfollow!";
        };
    };

    handleClick(e){
        e.preventDefault;
        if(this.followState === 'unfollowed'){
            followToggleUtil.followAJAX(this.userId).then(success, failure); 
        } else {
            followToggleUtil.unfollowAJAX(this.userId).then(success, failure);
        }
        this.render
    }

    success(){
        if (this.followState === 'unfollowed') {
            this.followState = 'followed'
        }else{
            this.followState = 'unfollowed'
        }
    }

    failure(errors){
        $messages.text(errors.responseJSON[0]);
        setTimeout(()=> $messages.empty(), 5000)
    }

};

module.exports = FollowToggle;