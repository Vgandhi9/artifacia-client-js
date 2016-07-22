"use strict";
var artifacia = require("./artifacia");
var client = artifacia.artifacia("dummy", "abcd1234")
var result = artifacia.get_visual_recommendation(2709,function(result){console.log(result)});
