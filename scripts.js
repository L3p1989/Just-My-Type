$('#keyboard-upper-container').hide();//hides upperCase keyboard by default

$('body').keydown(function(e) {
    if (e.keyCode == 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }; $(this).keyup(function() {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        }
    });
});//this shows upperCase keyboard on shiftDown and hides it again on shiftUp