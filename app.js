document.addEventListener('DOMContentLoaded', ()=>{


    //card optins 

    const cardArray = [
        {name: 'hotdog',
        img: 'images/hot-dog.png'
        },

        {name: 'hotdog',
        img: 'images/hot-dog.png'
        }, 

        {name: 'basketball',
        img: 'images/Basketball.png'
        },
        {name: 'basketball',
        img: 'images/Basketball.png'
        }, 

        {name: 'fries',
        img: 'images/french-fries.png'
        }, 
        {name: 'fries',
        img: 'images/french-fries.png'
        },
        {name: 'rockets',
        img: 'images/rockets.jpeg'
        }, 
        {name: 'rockets',
        img: 'images/rockets.jpeg'
        },
        {name: 'ice-cream',
        img: 'images/soft-ice-cream.png'
        }, 
        {name: 'ice-cream',
        img: 'images/soft-ice-cream.png'
        },

        {name: 'hamburger',
        img: 'images/hamburger.png'
        }, 
        {name: 'hamburger',
        img: 'images/hamburger.png'
        },


    ]

    cardArray.sort(()=> 0.5 - Math.random()); 
    //create game board 

    const grid = document.querySelector('.grid'); 
    var cardsChosen = []; 
    var cardsChosenId = []; 
    var cardsWon = []; 
    var resultDisplay = document.querySelector('#result')

    function createBoard(){ 

        for(let i=0; i<cardArray.length; i++){

            var card = document.createElement('img'); 
            card.setAttribute('src', 'images/white-.png'); 
            card.setAttribute('data-id', i); 
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
            

        }
    }

    createBoard();   
    //check for matches

    function checkForMatch(){
        var cards = document.querySelectorAll('img'); 
        const optionOneId = cardsChosenId[0]; 
        const optiontwoId = cardsChosenId[1]; 

        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match'); 
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optiontwoId].setAttribute('src','images/blank.png'); 
            cardsWon.push(cardsChosen);
    
        }else{
            cards[optionOneId].setAttribute('src','images/white-.png');
            cards[optiontwoId].setAttribute('src','images/white-.png');
            
          alert("This is not a match")

        }

        cardsChosen = [];
        cardsChosenId = []; 
        resultDisplay,textContent  = cardsWon.length
    }


    //flip the card
    function flipCard(){
        var cardId = this.getAttribute('data-id'); 
        cardsChosen.push(cardArray[cardId].name); 
        cardsChosenId.push(cardId); 
        this.setAttribute('src', cardArray[cardId].img); 

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }



    }

})