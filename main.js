var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("#h3");
var li = document.createElement('li');
var ul = document.querySelector("#ul")
var st;
var count;
start.addEventListener("click", function () {
    // alert("chala") 


    count = 0;
    st = setInterval(function () {

        h3.textContent = count;
        count++
    }, 1500)


})

stop.addEventListener("click", function () {
    clearInterval(st);
    li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = count -1;


}
)