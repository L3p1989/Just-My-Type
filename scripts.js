var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentenceCount = 0;

$('#keyboard-upper-container').hide();//hides upperCase keyboard by default

$('body').keydown(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }; $(this).keyup(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        }
    });
});//this shows upperCase keyboard on shiftDown and hides it again on shiftUp

$('body').keypress(function (e) {
    $('#' + e.which).animate({
        padding: '+=2px',
        borderRadius: '+=2px',
        backgroundColor: '#e3e3e3'
    }, 10, function () {
        $(this).animate({
            padding: '-=2px',
            borderRadius: '-=2px',
            backgroundColor: '#f5f5f5'
        });
    }); sentenceCount++;
    $('#sentence').text(sentences[sentenceCount]);

});//this highlights the pressed key for a moment, and tracks the correct key was pressed

$('#sentence').append(sentences[0]);//this appends current sentence to top of the page