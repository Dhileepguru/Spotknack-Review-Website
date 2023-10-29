document.getElementById("myform").addEventListener("submit",function(e){
    e.preventDefault();

    var name=document.getElementsByClassName("name").value;
    var number=document.getElementsByClassName("number").value;
    
    var destinationURL="/assets/pages/thoughts.html";

    window.open(destinationURL, "_blank");

});