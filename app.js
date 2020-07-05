document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'boy',
        img: 'images/boy.png'
      },
      {
        name: 'cloud',
        img: 'images/cloud.png'
      },
      {
        name: 'flower',
        img: 'images/flower.png'
      },
      {
        name: 'cat',
        img: 'images/cat.png'
      },
      {
        name: 'dog',
        img: 'images/dog.png'
      },
      {
        name: 'house',
        img: 'images/house.png'
      },
      {
        name: 'girl',
        img: 'images/girl.png'
      },
      {
        name: 'rainbow',
        img: 'images/rainbow.png'
      },
      {
        name: 'sun',
        img: 'images/sun.png'
      },
      {
        name: 'boy',
        img: 'images/boy.png'
      },
      {
        name: 'cloud',
        img: 'images/cloud.png'
      },
      {
        name: 'flower',
        img: 'images/flower.png'
      },
      {
        name: 'cat',
        img: 'images/cat.png'
      },
      {
        name: 'dog',
        img: 'images/dog.png'
      },
      {
        name: 'house',
        img: 'images/house.png'
      },
      {
        name: 'girl',
        img: 'images/girl.png'
      },
      {
        name: 'rainbow',
        img: 'images/rainbow.png'
      },
      {
        name: 'sun',
        img: 'images/sun.png'
      },
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/card.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/card.png')
        cards[optionTwoId].setAttribute('src', 'images/card.png')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Felicitaciones! Todas coincidieron!'
        var img = document.createElement("img");
        img.src = "images/ganaste.jpg";
        var src = document.getElementById("x");
        src.appendChild(img);
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  