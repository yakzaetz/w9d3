/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")
debugger
$(function(){
    debugger
    const el = $(".follow-toggle")
    return new FollowToggle(el);
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map