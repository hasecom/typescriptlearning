"use strict";
var test = "workkkld!";
var elem = document.getElementById("output");
var El = /** @class */ (function () {
    function El(parameters) {
        this.param = parameters + "aaa";
    }
    return El;
}());
if (elem) {
    var el = new El("bb");
    elem.innerHTML = el.param;
    elem.addEventListener('click', function () {
        console.log("ko");
    });
}
