class FollowToggle{
    constructor() {
        let $el = $('.follow-toggle');
        this.userId = $el[data-user-id];
        this.followState = $el[initial-data-state];
        this.render();
        this.handleClick();
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
            return $.ajax({
                method: 'POST',
                url: `/users/${this.userId}/follow`    
        })} else {
            return $.ajax({
                method: 'DELETE',
                url: `/users/${this.userId}`
            })
        }
    }.then
};

module.exports = FollowToggle;