class FollowToggle{
    constructor(el) {
        debugger
        this.$el = $(el);
        this.userId = this.$el.data("user-id")
        this.followState = this.$el.data("initial-data-state");
        this.render();
        this.$el.on("click", this.handleClick.bind(this))
        debugger
    }
    render(){
        if(this.followState === 'unfollowed'){
            this.$el.prop("disabled", false);
            return "Follow!";
        } else if (this.followState === 'unfollowing'){
            this.$el.prop("disabled", true);
        } else if (this.followState === 'following'){
            this.$el.prop("disabled", true);
        }else{
            this.$el.prop("disabled", false);
            return "Unfollow!";
        }
    };

    handleClick(e){
        e.preventDefault;
        if(this.followState === 'unfollowed'){
            this.followState = "following"
            this.render();
            followToggleUtil.followAJAX(this.userId).then(success, failure); 
        } else {
            this.followState = "unfollowing"
            this.render();
            followToggleUtil.unfollowAJAX(this.userId).then(success, failure);
        }
    }

    success(){
        if (this.followState === 'unfollowed') {
            this.followState = 'followed'
            this.render();
        }else{
            this.followState = 'unfollowed'
            this.render();
        }
    }

    failure(errors){
        $messages.text(errors.responseJSON[0]);
        setTimeout(()=> $messages.empty(), 5000)
    }

};

module.exports = FollowToggle;