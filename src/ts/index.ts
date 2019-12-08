const test: string = "workkkld!";
var elem = document.getElementById("output");

class El {
    param : string;
    constructor(parameters : string) {
        this.param = parameters + "aaa" ;
    }
}

if(elem){
    var el = new El("bb");
    elem.innerHTML = el.param;
    elem.addEventListener('click',function(){
        console.log("ko")
    })
}
