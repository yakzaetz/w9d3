class FollowToggle{
    constructor() {
        let $el = $('.follow-toggle');
        this.userId = $el[data-user-id];
        this.followState = $el[initial-data-state];
        this.render();
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
    }
};

module.exports = FollowToggle;