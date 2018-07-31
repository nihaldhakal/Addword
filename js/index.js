$(document).ready(function () {
    $("#myButton").on("click",putWord);
    $("#myButton").on("click",reset);
    $("#myText").on("keypress",function (event) {
        if(event.keyCode==13){
            putWord();
            reset();
        }
    });
    addRowColumn();$(document).ready(function () {
    $("#myButton").on("click",putWord);
    $("#myButton").on("click",reset);
    $("#myText").on("keypress",function (event) {
        if(event.keyCode==13){
            putWord();
            reset();
        }
    });
    addRowColumn();
});

function putWord(){
    var str = $("#myText").val();
    var firstLetter = ($.trim(str)).charAt(0);
    var targetBox = "#" + firstLetter.toUpperCase() + "Text" ;
    // $(targetBox).text(str);
    $(targetBox + " ul.list").append('<li>'+ str + '</li>');

}

function reset(){
    $('#myText').val('');
    $('#myText').focus();
}
function addRowColumn() {
    var alphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var box="";
    for (var row = 0; row < alphabets.length; row++){
        box = box + "<div class='row'>";
        box = box + "<div class='col-sm-2' style=\"background-color:White;\";>" + alphabets[row] + "</div>";
        box = box + "<div class='col-sm-10' id='" + alphabets[row] +"Text' style=\"background-color:white; height: 90px\">"
            + "<ul class='list'></ul>" + "</div>";
        box += "</div>";
    }
    $(".container").html(box);
}

});


