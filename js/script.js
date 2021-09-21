function showMenu(){
     var a=document.getElementsByClassName("links");
    a[0].style.right="0px";
   // document.getElementById("menu").style.display="none";
}

function hideMenu(){
    var a=document.getElementsByClassName("links");
    a[0].style.right="-200px";
    //document.getElementById("menu").style.display="block";

}

function showAll(){
    window.location = "https://github.com/it164664?tab=repositories";
}