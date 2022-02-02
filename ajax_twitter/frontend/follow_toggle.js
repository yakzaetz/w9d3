class FollowToggle{
    constructor() {
        let $el = $('.follow-toggle')
        this.userId = $el[data-user-id]
        this.initialState = $el[initial-data-state]
    }
}

module.exports = FollowToggle;