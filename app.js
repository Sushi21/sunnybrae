var SmoothScroll = require('smooth-scroll');
//var bootstrap = require('bootstrap');
var scroll = new SmoothScroll('a[href*="#"]',{
    offset:function(anchor, toggle){
        return 100;
    }
});