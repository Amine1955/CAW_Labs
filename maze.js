document.addEventListener("DOMContentLoaded", function() {
   
    const boundaries = document.querySelectorAll("#maze .boundary");


    function turnAllBoundariesRed() {
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = "red";
        });
    }
    boundaries.forEach(boundary => {
    
        boundary.addEventListener("mouseover", turnAllBoundariesRed);
    });

    const endZone = document.getElementById("end");
    function youwon(){
        alert("you won!");
    }
    end.addEventListener("mouseover",youwon);


    function reset(){
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = "#eeeeee";
        });
    }
    const res = document.getElementById("start");
    res.addEventListener("click",reset);
    














});
