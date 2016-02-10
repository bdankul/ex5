//Javascript

//call to jQuery ready function
//make sure html and css are loaded before loading js
$(document).ready(function () {

    console.log("js ready");

    //hide bkdColor info
    $('form#bkdColor p, form#bkdColor input[type=submit]').css('visibility', 'visible');

    // drag event
    $('form#todo, canvas#clockid').draggable({
        containment: "window"
    });
    
    // Todo item div border hover
    $('form#todo div.vdrag').hover(
        function () {
            $(this).css('borderRight','4px solid #ebfa75')
            .css('color','#8fb43b');
        },
    function () {
            $(this).css('borderRight','4px solid #806464')
            .css('color','black');
        });
    

    console.log("js 1");


// help with this !!!!
            //capture bkdColor submit event
            document.background.onsubmit = processBkdColor;

            //define process function
            function processBkdColor() {
                //store bkdColor in a variable
                var bkdColor = document.background.bkdColor.value;

                $('body').css('backgroundColor', bkdColor);
                return false;
            }; //end cf processBkdColor
            return false;
           
    
    console.log("js 2");
    
}); //end ready
