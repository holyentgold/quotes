function clearAll() {
    const meme = document.querySelector('.meme-content');
    const joke = document.querySelector('.joke-content');
    const quote = document.querySelector('.quote-content');
    const riddle = document.querySelector('.riddle-content');
   
    meme.innerHTML = '';
    joke.innerHTML = '';
    quote.innerHTML = '';
    riddle.innerHTML = '';
  }
  
  function showMeme() {
      // Value should be a string representing image URL
    const randomMemeUrl = getRandomData('memes');
    
    const memeContainer = document.querySelector('.meme-content');
    const newMeme = document.createElement('img');
    newMeme.setAttribute('src', randomMemeUrl);
    
    clearAll();
    
    // Add the new img to the document
    memeContainer.appendChild(newMeme);
  }
  
  function showJoke() {
    // Value should be a string representing the joke
    const randomJokeText = getRandomData('jokes');
    
    const jokeContainer = document.querySelector('.joke-content');
    const newJoke = document.createElement('p');
    newJoke.textContent = randomJokeText;
    
    clearAll();
    
    // Add the new img to the document
    jokeContainer.appendChild(newJoke);
  }
  
  function showQuote() {
    // Value should be in format: { quote: '', author: '' }
    const randomQuote = getRandomData('quotes');
    
    const quoteContainer = document.querySelector('.quote-content');
    
    const newQuoteText = document.createElement('p');
    const newQuoteAuthor = document.createElement('p');
    newQuoteText.textContent = randomQuote.quote;
    newQuoteAuthor.textContent = '- ' + randomQuote.author;
    
    clearAll();
    
    quoteContainer.appendChild(newQuoteText);
    quoteContainer.appendChild(newQuoteAuthor);
  }
  
  function showRiddle() {
    // Value should be in format: { question: '', answer: '' }
    const randomRiddle = getRandomData('riddles');
    
    const riddleContainer = document.querySelector('.riddle-content');
    
    const newRiddleText = document.createElement('p');
    const newRiddleAnswer = document.createElement('p');
  
    newRiddleText.textContent = randomRiddle.question;
    newRiddleAnswer.textContent = '- ' + randomRiddle.answer;
    newRiddleAnswer.setAttribute('id', 'riddle-answer');
    
    clearAll();
    
    newRiddleAnswer.hidden = true;
    
    riddleContainer.appendChild(newRiddleText);
    riddleContainer.appendChild(newRiddleAnswer);
  }
  
  function revealAnswers() {
    const riddleContent = document.querySelector('.riddle-content');
    const riddle = riddleContent.querySelector('p');
    const riddleAnswer = document.querySelector('#riddle-answer');
    
    if (riddle && riddleAnswer.hidden) {
      riddleAnswer.hidden = false;
    } else if (riddle && riddleAnswer) {
      alert('The riddle answer is already exposed!')
    } else {
      alert('There is no riddle to show the answer for!')
    }
  }
  
  /**
  * This function is used to get random data
  * Valid arguments:
  *
  * 'memes', 'jokes', 'quotes', 'riddles'
  *
  * Return values:
  * 
  * For meme data: 
  * A string representing an image url
  * 
  * For joke data: 
  * A string representing the joke
  * 
  * For quote data:
  * An object - { quote: '', author: '' }
  * 
  * For riddle data:
  * An object - { question: '', answer: '' }
  *
  * Example usage: getRandomData('quotes');
  */
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
     
  
  
  const memes = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg', './images/img4.jpg', './images/img5.jpg'];
  
  const jokes = ['That awkward moment when you help your crush with her assignment and she gets zero. My brother, just forget about any explanation and go your way peacefully.', 
  'It is only in a Nigeria movie that you will see cassava plant in an Evil forest. Who planted the Cassava?', 
  'You would know you are watching a Nigerian movie when it says “35yrs later “but the dog in the yard is still alive.', 
  'Have you heard about the new Cray super computer? No matter how bad you are, you’re not useless. You can still be used as a bad example.', 
  'The way girls will convince you that you are handsome if you have money, you will stand in front of the mirror and you will be like “Maybe I should go into modelling. My brother don’t be deceived, remain where you are.', 
  'My sister don’t be fooled by men. Not everyone who wears suit is rich, some of them are choirmasters.', 
  'My school teacher taught me most of the lies I tell today, she would tell me to write a letter to my uncle abroad when she knows my uncle is in the village.',];
  
  const quotes = [
    { quote: 'A rooster is not expected to crow for the whole world.', author: 'unknown'},
    { quote: 'A woman is never old when it comes to the dance she knows.', author: 'unknown' },
    { quote: 'Birds sing not because they have answers but because they have songs', author: 'unknown' },
    { quote: 'He who doesnt clean his mouth before breakfast always complains that the food is sour.', author: 'unknown' },
    { quote: 'Milk and honey have different colors, but they share the same house peacefully.', author: 'unknown' },
    { quote: 'When your clothes are made of cassava leaves, you dont take a goat as a friend.', author: 'Robert Mugabe' },
    { quote: 'If you are ugly, you are ugly. Stop talking about inner beauty because men dont walk around with X-ray machines to see inner beauty.', author: 'Robert Mugabe' },
    { quote: 'When ones goat gets missing, the aroma of a neighbour soup gets suspicious.', author: 'Robert Mugabe' },
    { quote: 'Treat every part of your towel nicely because the part that wipes your buttocks today will wipe your face tomorrow.', author: 'Robert Mugabe' },
    { quote: 'Sometimes you look back at girls you spent money on, rather than send it to your mum, and you realise witchcraft is real.', author: 'Robert Mugabe' },
    { quote: 'The greatest threat to freedom is the absence of criticism.', author: 'Wole Soyinka' },
    { quote: 'Romance is the sweetening of the soul With fragrance offered by the stricken heart.', author: 'Wole Soyinka' },
    { quote: 'Some of us  poets are not exactly poets. We live sometimes  beyond the word.', author: 'Wole Soyinka' },
  ];
  
  const riddles = [
    { question: 'What has to be broken before you can use it?', answer: 'An egg' },
    { question: 'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ', answer: 'A Candle' },
    { question: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ', answer: 'A Map' },
    { question: 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?', answer: 'The letter "R"' },
    { question: 'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?', answer: 'All the people were married' },
    { question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?', answer: 'Heroine' },
    { question: 'What is full of holes but still holds water?', answer: 'Sponge' },
    { question: 'What is always in front of you but can’t be seen?', answer:'Future'},
    { question: 'What can you break, even if you never pick it up or touch it?', answer: 'Promise' },
    { question: 'What goes up but never comes down?', answer: 'Age' }
  ];
  
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
    const data = {
      memes,
      jokes,
      quotes,
      riddles
    };
  



