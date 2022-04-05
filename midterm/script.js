$(document).ready(function () {

    var deckID, cardArray;

    // when you click on the "new deck" button!
    $("#generate-deck-btn").click(function (e) {

        clearScreen();
        cardArray=[];

        $("#draw-card-btn").attr('hidden', false); // "draw a card" button reappears when you restart a deck

        $('body').animate({'margin-top':'0'}, {'margin-bottom':'0'}, {'margin-left':'auto'}, {'margin-right':'auto'}, 1000);

        $.ajax({
            type: "POST",
            url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
            dataType: "json",
            success: function (result) {

                deckID = result["deck_id"]; //assigns deck id to the local variable 'deckID'
                $("#draw-card-btn").attr('disabled',false); //enables draw card button
            }
        });
    });

    // when you click on the "draw card" button!
    $("#draw-card-btn").click(function (e) {
            
        let cardValue, cardSuit, cardImage;
        
        $.ajax({
            type: "POST",
            url: "https://deckofcardsapi.com/api/deck/"+deckID+"/draw/?count=2",
            dataType: "json",
            success: function (result) {

                cardValue = result["cards"][0]['value'];
                cardSuit = result["cards"][0]['suit'];
                cardImage = result['cards'][0]['image'];

                cardArray.push(result["cards"]);
              
                $("#show-cards").append("<div class='container'><img src='"+ cardImage + "' class='card' />" + generateTarotReading(cardValue, cardSuit) + " </div>"); // shows image + reading of the card

                $(".card").css({
                    "border": "5px solid #fcd4b7",
                    "border-radius": "20px"
                });

                // "draw a card" button disappears so the user doesn't draw more than 4 cards
                if(cardArray.length >= 4) {
                    $("#draw-card-btn").attr('hidden', true);
                }

            }
        });

    });

    // clears the screen every time a new deck is drawn
    function clearScreen() {
        $("#main-div").html(null);
        $("#drawn-cards-div").html(null);
        $("#show-cards").html(null);
        $("#tarot-div").html(null);
    }

    // for tarot card readings!
    function generateTarotReading(cardValue,cardSuit) {
        let cardSuitReading = "";
        let tarotReading = "";

        // specific readings for SPADES suit
        if (cardSuit == 'SPADES') {
            switch (cardValue) {
                case '2':
                    cardSuitReading = "Expect a raise in the possible future.";
                    break;
                case '3':
                    cardSuitReading = "Your boss will want to speak with you soon.";
                    break;
                case '4':
                    cardSuitReading = "You will be entrusted with a huge project at work.";
                    break;
                case '5':
                    cardSuitReading = "Heard of Indeed.com? You might be at risk of getting fired.";
                    break;
                case '6':
                    cardSuitReading = "Your hard work will be recognized! Keep it up!";
                    break;
                case '7':
                    cardSuitReading = "Watch out, there might be a pattern of career tardiness in the near future.";
                    break;
                case '8':
                    cardSuitReading = "You will be promoted soon.";
                    break;
                case '9':
                    cardSuitReading = "There will be a loss of work hours. A second job might be handy.";
                    break;
                case '10':
                    cardSuitReading = "You will soon rise to the occasion.";
                    break;
                case 'JACK':
                    cardSuitReading = "You will have a drastic change in your appearance. Whether it'll be good or bad is up to you.";
                    break;
                case 'QUEEN':
                    cardSuitReading = "In the next few months, watch out for sudden drops in energy and mood.";
                    break;
                case 'KING':
                    cardSuitReading = "In the next few years, expect a change in location.";
                    break;
                case 'ACE':
                    cardSuitReading = "Thought of buying a new car? You might just have the money for it later.";
                    break;
                default:
                    console.log("error reading card suit");
            }
        }

        // specific readings for HEARTS suit
        if (cardSuit == 'HEARTS') {
            switch (cardValue) {
                case '2':
                    cardSuitReading = "You have a secret admirer.";
                    break;
                case '3':
                    cardSuitReading = "Finding love will not likely be in your near future.";
                    break;
                case '4':
                    cardSuitReading = "You will find love soon.";
                    break;
                case '5':
                    cardSuitReading = "Someone held in low regard is coming back in your life.";
                    break;
                case '6':
                    cardSuitReading = "Someone held in high regard is coming back in your life.";
                    break;
                case '7':
                    cardSuitReading = "I sense a heartbreak in the near future.";
                    break;
                case '8':
                    cardSuitReading = "Expect a confession from a close one.";
                    break;
                case '9':
                    cardSuitReading = "Keep an eye out for people who don't align with your romantic desires.";
                    break;
                case '10':
                    cardSuitReading = "Your next date will be a memorable one.";
                    break;
                case 'JACK':
                    cardSuitReading = "This is your sign to get that new piercing or tattoo you've always wanted.";
                    break;
                case 'QUEEN':
                    cardSuitReading = "In the next few months, you will receive a text message from someone you've been missing.";
                    break;
                case 'KING':
                    cardSuitReading = "In the next few years, you will be in a better place.";
                    break;
                case 'ACE':
                    cardSuitReading = "Financially, it's looking rough. Start investing or prioritize in saving.";
                    break;
                default:
                    console.log("error reading card suit");
            }
        }

        // specific readings for CLUBS suit
        if (cardSuit == 'CLUBS') {
            switch (cardValue) {
                case '2':
                    cardSuitReading = "You will make a new friend soon.";
                    break;
                case '3':
                    cardSuitReading = "Be attentive. You might lose one of your friendships.";
                    break;
                case '4':
                    cardSuitReading = "A good old friend is coming back in your life.";
                    break;
                case '5':
                    cardSuitReading = "Not everyone is to be trusted. Be careful of who you allow inside your life.";
                    break;
                case '6':
                    cardSuitReading = "You will be spending a lot of time with your friends this year.";
                    break;
                case '7':
                    cardSuitReading = "You will meet new people. Some good. Some bad.";
                    break;
                case '8':
                    cardSuitReading = "You will be closer to one of your friends this year.";
                    break;
                case '9':
                    cardSuitReading = "Be weary of your current friendships. A life lesson will be learned soon.";
                    break;
                case '10':
                    cardSuitReading = "You will realize who your true friends really are.";
                    break;
                case 'JACK':
                    cardSuitReading = "Embrace your physical insecurities and turn them into gold.";
                    break;
                case 'QUEEN':
                    cardSuitReading = "In the next few months, people might try to cross you. Understand that you are the better person.";
                    break;
                case 'KING':
                    cardSuitReading = "In the next few years, you will be cycling through repeated problems with old people. Hang in there.";
                    break;
                case 'ACE':
                    cardSuitReading = "You will be awarded with loads of money in the future.";
                    break;
                default:
                    console.log("error reading card suit");
            }
        }

        // specific readings for DIAMONDS suit
        if (cardSuit == 'DIAMONDS') {
            switch (cardValue) {
                case '2':
                    cardSuitReading = "You might start a new hobby/interest this year.";
                    break;
                case '3':
                    cardSuitReading = "You might not have much time to start new hobbies/interests. Make time.";
                    break;
                case '4':
                    cardSuitReading = "You will have the opportunity to start something you've always wanted to do.";
                    break;
                case '5':
                    cardSuitReading = "Prioritze putting yourself out there.";
                    break;
                case '6':
                    cardSuitReading = "You are going to improve tremendously in your hobbies/interests.";
                    break;
                case '7':
                    cardSuitReading = "Indulge in the uncertainies. Scared to do something? do it anyway.";
                    break;
                case '8':
                    cardSuitReading = "You will be traveling to a lot of new places this year.";
                    break;
                case '9':
                    cardSuitReading = "Continue to reap the benefits and shortly you will see what comes next.";
                    break;
                case '10':
                    cardSuitReading = "You will excel in whatever you want to excel in.";
                    break;
                case 'JACK':
                    cardSuitReading = "There will not be much change to your appearance in the next few years.";
                    break;
                case 'QUEEN':
                    cardSuitReading = "In the next few months, there will be a lot of people talking behind your back. Don't let this affect you.";
                    break;
                case 'KING':
                    cardSuitReading = "In the next few years, you might be going back to school or pursuing something new.";
                    break;
                case 'ACE':
                    cardSuitReading = "You will have a drastic change in income. Your choices will dictate whether it's good or bad.";
                    break;
                default:
                    console.log("error reading card suit");
            }
        }

        tarotReading += cardSuitReading;

        return tarotReading;
    }
 
});
