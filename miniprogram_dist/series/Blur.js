"use strict";var _stackblurEsMin=require("../modules/stackblur-es.min.js");module.exports={name:"Blur",handler:function(){var o=this,u=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(r,i){var s=u.x,e=u.y,e=void 0===e?0:e,n=u.width,n=void 0===n?0:n,t=u.height,t=void 0===t?0:t,a=u.blur,a=void 0===a?0:a;(0,_stackblurEsMin.canvasRGB)(o.canvas,o.xDpr(void 0===s?0:s),o.xDpr(e),o.xDpr(n),o.xDpr(t),a),r()})}};