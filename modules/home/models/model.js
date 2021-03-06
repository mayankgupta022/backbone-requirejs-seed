define(function (require) {

    "use strict";

    var Backbone = require('backbone'),
        menuData = {
            "top" : {
                "visible" : true,
                "left" : {
                    "visible" : true,
                    "title" : "topLeft",
                    "icon" : "",
                    "route" : "try/2",
                    "active" : false
                },
                "middle" : {
                    "visible" : true,
                    "title" : "Home",
                    "icon" : "",
                    "route" : "blank",
                    "active" : false
                },
                "right" : {
                    "visible" : true,
                    "title" : "topRight",
                    "icon" : "",
                    "route" : "",
                    "active" : false
                }
            },
            "bottom" : {
                "visible" : true,
                "first" : {
                    "visible" : true,
                    "title" : "bottomLeft",
                    "icon" : "",
                    "route" : "",
                    "active" : true
                },
                "second" : {
                    "visible" : true,
                    "title" : "Login",
                    "icon" : "",
                    "route" : "login",
                    "active" : false
                },
                "third" : {
                    "visible" : false,
                    "title" : "bottomRight",
                    "icon" : "",
                    "route" : "",
                    "active" : true
                }
            }
        };

    return {
        MenuData: menuData
    };


});