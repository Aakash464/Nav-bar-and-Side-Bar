$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".wrapper").toggleClass("collapse");
    });
    $(".sidebar").hover(function(){
        $(".wrapper").removeClass("collapse");
    });
    $(".sidebar").mouseleave(function(){
        $(".wrapper").addClass("collapse");
    });
});