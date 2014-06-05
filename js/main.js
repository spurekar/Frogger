$(document).ready( function() {
    var direction = 'faceup';

    $(document).keydown(function(key) {
        moveFrog(key);	
    });

    function moveFrog(key) {
        $('#frog').removeClass(direction);

        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $("#frog").addClass("jumpleft");
                setTimeout( function() {
                    $('.frog').animate({left: "-=32px"}, 'fast');
                    setTimeout( function() {$("#frog").removeClass("jumpleft");},200);
                },200);
                direction = "faceleft";
                break;
                // Up Arrow Pressed
            case 38:
                $("#frog").addClass("jumpup");
                setTimeout( function() {
                    $('.frog').animate({top: "-=32px"}, 'fast');
                    setTimeout( function() {$("#frog").removeClass("jumpup");},200);
                },200);
                direction = "faceup";
                break;
                // Right Arrow Pressed
            case 39:
                $("#frog").addClass("jumpright");
                setTimeout( function() {
                    $('.frog').animate({left: "+=32px"}, 'fast');
                    setTimeout( function() {$("#frog").removeClass("jumpright");},200);
                },200);
                direction = "faceright";
                break;
                // Down Array Pressed
            case 40:
                $("#frog").addClass("jumpdown");
                setTimeout( function() {
                    $('.frog').animate({top: "+=32px"}, 'fast');
                    setTimeout( function() {$("#frog").removeClass("jumpdown");},200);
                },200);
                direction = "facedown";
                break;
        }

        $("#frog").addClass(direction);

    } 
});
