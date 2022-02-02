/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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
$(function(){
    return new FollowToggle();
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map