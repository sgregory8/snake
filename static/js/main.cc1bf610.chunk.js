(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(3),r=n.n(s),c=(n(13),n(1)),i=n(4),d=n(5),l=n(6),m=n(7),u=function(e){return o.a.createElement("div",null,e.snakeSegments.map((function(e,t){var n={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return o.a.createElement("div",{className:"snake-segment",key:t,style:n})})))},f=function(e){var t={left:"".concat(e.food[0],"%"),top:"".concat(e.food[1],"%")};return o.a.createElement("div",null,o.a.createElement("div",{className:"food-piece",style:t}))},k=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"score",style:{left:0,top:450}},"Score: ",e.score))},h=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={gameOver:!0,direction:null,snakeSegments:[[48,48],[44,48],[40,48]],nextSegment:null,foodCoords:null,segmentsToAdd:[],score:0},e.onKeyDown=function(t){switch(t=t||window.event,e.state.gameOver&&e.setState({gameOver:!1}),t.keyCode){case 38:console.log("up"),e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){if(null!=e.state.direction&&!e.state.gameOver){var t=e.state.direction,n=e.state.snakeSegments.slice(),a=Object(c.a)(e.state.snakeSegments[0]),o=a,s=[];switch(t){case"UP":o[1]=a[1]-4;break;case"DOWN":o[1]=a[1]+4;break;case"LEFT":o[0]=a[0]-4;break;case"RIGHT":o[0]=a[0]+4}s[0]=o,n.forEach((function(e,t){s[t+1]=e})),s.pop(),e.setState({snakeSegments:s}),e.checkSnakeCollision(),e.addSegmentIfNeeded()}},e.checkNotInBounds=function(e){return e[0]>96||e[0]<0||(e[1]>96||e[1]<0)},e.checkFoodEaten=function(){if(null!==e.state.foodCoords)return e.state.snakeSegments[0][0]===e.state.foodCoords[0]&&e.state.snakeSegments[0][1]===e.state.foodCoords[1]&&(e.setState({foodCoords:null,score:e.state.score+1}),[e.state.snakeSegments[0][0],e.state.snakeSegments[0][1]])},e.addSegmentIfNeeded=function(){var t=e.checkFoodEaten();if(t){e.state.segmentsToAdd.push(t);var n=!1;if(e.state.snakeSegments.forEach((function(e){e[0]===t[0]&&e[1]===t[1]&&(n=!0)})),n){var a=Object(c.a)(e.state.snakeSegments);a.push(t),e.setState({snakeSegments:a})}}},e.generateRandomCoords=function(){var t=e.state.snakeSegments,n=4*Math.floor(24*Math.random()),a=4*Math.floor(24*Math.random());return t.forEach((function(t){t[0]===n&&t[1]===a&&e.generateRandomCoords()})),[n,a]},e.checkSnakeCollision=function(){var t=Object(c.a)(e.state.snakeSegments[0]),n=Object(c.a)(e.state.snakeSegments);n.shift(),n.forEach((function(n){n[0]==t[0]&&n[1]==t[1]&&e.resetState()}))},e.resetState=function(){e.setState({gameOver:!0,direction:null,snakeSegments:[[48,48],[44,48],[40,48]],foodCoords:null,score:0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.onkeydown=this.onKeyDown,setInterval(this.moveSnake,50)}},{key:"componentDidUpdate",value:function(){if(null===this.state.foodCoords&&!this.state.gameOver){var e=this.generateRandomCoords();this.setState({foodCoords:e})}this.checkNotInBounds(this.state.snakeSegments[0])&&this.resetState()}},{key:"render",value:function(){var e;return null!=this.state.foodCoords&&(e=o.a.createElement(f,{food:this.state.foodCoords})),o.a.createElement("div",{className:"game-grid"},o.a.createElement(u,{snakeSegments:this.state.snakeSegments}),e,o.a.createElement(k,{score:this.state.score}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.cc1bf610.chunk.js.map