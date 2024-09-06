import React, { useState, useEffect } from 'react';

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);

  // Function to start the game
  const startGame = () => {
    // Generate random alphabet cards
    const newCards = generateCards();
    setCards(newCards);

    // Reset score and selected cards
    setScore(0);
    setSelectedCards([]);

    // Show the cards with alphabets for 3 seconds
    setTimeout(() => {
      // Hide the cards after 3 seconds
      hideCardAlphabets();
    }, 3000);
  };

  // Function to generate random alphabet cards
  const generateCards = () => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let cards = [];
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      const card = alphabet.charAt(randomIndex);
      cards.push(card, card);
      alphabet = alphabet.replace(card, '');
    }
    shuffleArray(cards);
    return cards;
  };

  // Function to shuffle the array of cards
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  // Function to hide the cards' alphabets
  const hideCardAlphabets = () => {
    setCards(cards.map(() => ''));
  };

  // Function to handle card selection
  const selectCard = (index) => {
    if (selectedCards.length >= 2 || cards[index] !== '') return;

    const newSelectedCards = [...selectedCards, index];
    setSelectedCards(newSelectedCards);

    const newCards = [...cards];
    newCards[index] = newCards[index];
    setCards(newCards);

    if (newSelectedCards.length === 2) {
      setTimeout(() => checkCards(newSelectedCards), 500);
    }
  };

  // Function to check if the selected cards are a match
  const checkCards = (selectedCards) => {
    const [index1, index2] = selectedCards;
    const newCards = [...cards];
    if (newCards[index1] === newCards[index2]) {
      newCards[index1] = '';
      newCards[index2] = '';
      setScore(score + 1);
      setCards(newCards);
      setSelectedCards([]);

      // Check for win condition
      if (score + 1 === cards.length / 2) {
        setWin(true);
      }
    } else {
      newCards[index1] = '';
      newCards[index2] = '';
      setCards(newCards);
      setSelectedCards([]);
    }
  };

  useEffect(() => {
    if (win) {
      setTimeout(() => alert('You win!'), 500);
    }
  }, [win]);

  return (
    <div>
      <h1>Memory Game</h1>
      <h2>{win ? 'You win!' : null}</h2>
      <button onClick={startGame}>Start game</button>
      <div>
        {cards.map((card, index) => (
          <div key={index} className="card" onClick={() => selectCard(index)}>
            {card}
          </div>
        ))}
      </div>
      <h2>Score: {score}</h2>
    </div>
  );
}

export default MemoryGame;
