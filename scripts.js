var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentenceCount = 0;
var keyPress = 0;

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
        });//animates the correct key on screen
    }); if (String.fromCharCode(e.which) == sentences[sentenceCount][keyPress]) {
        keyPress++;
        
        $('#yellow-block').animate({ left: "+=17.5px"});//animates the yellow highlight

        $('#target-letter').text(sentences[sentenceCount][keyPress]);//changes text of `#target-letter` as keys are pressed

        $('img').attr('src', 'https://t3.ftcdn.net/jpg/00/88/93/72/240_F_88937261_fZzx2GOTcz0ijLz1tuVvZ3MlEH6sfP4B.jpg')
    } else {
        $('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrCET8arubXWUHRwAT4mg5vj6ZylmC3_ongmidqgoP9U2UYYa')
    }
    
    
    if (sentences[sentenceCount][keyPress] == sentences[0][48] || sentences[1][47] || sentences[2][48] || sentences[3][48])  {
        sentenceCount++;
        keyPress = 0;
        $('#yellow-block').animate({left: '15px'})
        $('#sentence').text(sentences[sentenceCount]);//changes text of `#sentence` as the sentences change
    };//when all conditions are met for a sentence switch to next and reset all values
});//this highlights the pressed key for a moment, and tracks the correct key was pressed, as well as moving the yellow cursor accross the screen

$('#sentence').append(sentences[0]);//this appends current sentence to top of the page

$('#target-letter').append(sentences[0][0]);//starting position for `#target-letter`

$('#feedback').append('<img src="">');//appends img to `#feedback` for checks and Xs