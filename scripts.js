var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentenceCount = 0;
var keyPress = 0;
var numberOfWords = 54;
var numberOfMistakes = 0;
var startTime = new Date();

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
    if (sentenceCount == 4 && keyPress == 48) {
        var endTime = new Date();
        var minutes = endTime - startTime;
        var score = numberOfWords / minutes - 2 * numberOfMistakes

        $('#keyboard-lower-container').remove();//removes lowerCase keyboard
        $('#keyboard-upper-container').remove();//removes upperCase keyboard
        $('#32').remove();//removes spaceBar
        $('#target').after('<p class="yes-par"><button class="yes">Yes</button></p><p class="no-par"><button class="no">No</button></p>');//adds yes and no buttons

        $('.yes').click(function() {
            console.log(document.location.href = '');//resets game
        })

        return $('#target-letter').text("You're score is " + score + " words per minute! Would you like to try again?");//endgame message
    };
    $('#' + e.which).animate({
        padding: '+=2px',
        borderRadius: '+=2px',
        backgroundColor: '#e3e3e3'
    }, function () {
        $(this).animate({
            padding: '-=2px',
            borderRadius: '-=2px',
            backgroundColor: '#f5f5f5'
        });//animates the correct key on screen
    }); if (String.fromCharCode(e.which) == sentences[sentenceCount][keyPress]) {
        keyPress++;
        
        $('#yellow-block').animate({ left: "+=17.5px"}, .1);//animates the yellow highlight

        $('#target-letter').text(sentences[sentenceCount][keyPress]);//changes text of `#target-letter` as keys are pressed

        $('img').attr('src', 'https://t3.ftcdn.net/jpg/00/88/93/72/240_F_88937261_fZzx2GOTcz0ijLz1tuVvZ3MlEH6sfP4B.jpg');//posts check img to `#feedback`
    } else {
        numberOfMistakes++;
        $('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrCET8arubXWUHRwAT4mg5vj6ZylmC3_ongmidqgoP9U2UYYa');//posts red X img to `#feedback`
    }; if (sentences[sentenceCount][keyPress] == [0][47] || [1][46] || [2][47] || [3][47])  {
        
        sentenceCount++;
        
        keyPress = 0;

        $('#target-letter').text(sentences[sentenceCount][keyPress]);
        
        $('img').attr('src', '');//resets `#feedback` img
        
        $('#yellow-block').animate({left: '15px'}, .1);//resets `#yellow-block` position
        
        $('#sentence').text(sentences[sentenceCount]);//changes text of `#sentence` as the sentences change
    }//when all conditions are met for a sentence switch to next and reset all values
    
});//this highlights the pressed key for a moment, and tracks the correct key was pressed, as well as moving the yellow cursor accross the screen

$('#sentence').append(sentences[0]);//this appends current sentence to top of the page

$('#target-letter').append(sentences[0][0]);//starting position for `#target-letter`

$('#feedback').append('<img src="">');//appends img to `#feedback` for checks and Xs