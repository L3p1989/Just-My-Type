$('#keyboard-upper-container').hide();//hides upperCase keyboard by default

$('body').keydown(function(e) {
    if (e.keyCode == 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }; $(this).keyup(function(e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        }
    });
});//this shows upperCase keyboard on shiftDown and hides it again on shiftUp

$('body').keypress(function(e) {
    $('#' + e.which).animate({
        padding: '+=2px',
        borderRadius: '+=2px',
        backgroundColor: '#e3e3e3'
    }, 10, function() {
        $(this).animate({
            padding: '-=2px',
            borderRadius: '-=2px',
            backgroundColor: '#f5f5f5'
        });
    });
});//this highlights the pressed key for a moment