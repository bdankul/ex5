//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function () {

    console.log("js ready");

    //hide bkdColor info
    $('form#bkdColor p, form#bkdColor input[type=submit]').css('visibility', 'visible');
    
    // sortable todo list
    $('#todo').sortable({
        containment: 'parent',
        axis: 'y',
        cursor: 'move'
    });
    
    console.log("sorted");
    
    // drag event
    $('form#todo, img#clock, img#calendar, img#note').draggable({
        containment: 'window',
        cursor: 'move'
    });
    
    console.log("dragged");
    
    // HOVER STOPPED WORKING
    // Todo item div border hover
    $('form#todo div.vdrag').hover(
        function () {
            $(this).css('borderRight', '4px solid #a58d8d')
                .css('color', '#a88989');
        },
        function () {
            $(this).css('borderRight', '4px solid #806464')
                .css('color', 'black');
        }); //end hover 


    console.log("js 1");


    //capture bkdColor submit event
    document.background.onsubmit = processBkdColor;

    //define process function
    function processBkdColor() {
        //store bkdColor in a variable
        var bkdColor = document.background.bkdColor.value;

        $('body').css('backgroundColor', bkdColor);
        return false;
    }; //end cf processBkdColor

    console.log("js 2");

}); //end ready
