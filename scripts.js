const vocabularyLists = {
	Tony1_phrasal_verbe: [
		{ word: "look forward", translation: "Avoir hate ; Attendre avec  impatience" },
		{ word: "to worth", translation: " valoir ; to worth a lot of money" },
		{ word: "to looking at", translation: " study or examine something" },
		{ word: "to taking place", translation: " événement qui (a lieu) a " },
		{ word: "to come over", translation: " Venir ; Passer ; Fair un saut chez qqn" },
		{ word: "to wear", translation: "porter des vétement ; I like to wear hats" },
		{ word: "to carry out", translation: "effectuer ; réaliser une tâche" },
		{ word: "to get rid (of)", translation: "se débarasser ; boss get ride of lazy employees" },
		{ word: "to reward", translation: "récompenser ; boss rewarded good employees" },
		{ word: "to come up ", translation: "être aborder ; se présenter ; the company came up with a new type of contract" },
		{ word: "to look after", translation: "s'occuper ; prendre soins de ; can you look after my cat ? " },
		{ word: "to worder", translation: "se demander ; s'interroger ; I wonder what time is it ?" },
		{ word: "to give away some thing", translation: "donner gratuitement ; révéler une information" },
		{ word: "to cover up", translation: " cacher, dissimuler qqc" },
		{ word: "to follow up something", translation: "(faire un suivi de qqc) I'll follow up you next week" },
		{ word: "to get in", translation: "(entré quelque part) please get in the car" },
		{ word: "to tidy up", translation: "(ranger , mettre en ordre qqc) I need to tidy up my room" },
		{ word: "to find out", translation: "(découvrir, en apprendre sûr...) I need to find out the truth" },
		{ word: "to look up", translation: "(chercher information quelque par) to look up the word in the dictionary" },
		{ word: "to turn down", translation: "(refuser ; rejeter) He turned down the offer" },
		{ word: "to go/went down", translation: "décendre/diminuer/tomber" },
		{ word: "to hire", translation: "recruter ; embaucher" },
		{ word: "to spend / spent", translation: "passer du temps ou dépenser de l'argent" },
		{ word: "standing on", translation: " se tenir à un endroit" },
		{ word: "to deal with", translation: " gérer / s'occuper de qqc" },
		{ word: "to thrive", translation: "prospérer" },
	],
	Tony1_word: [
		{ word: "a hat", translation: "une chapeau" },
		{ word: "a nephew", translation: "un neceu" },
		{ word: "though", translation: "bien que ; même si ; cependant; pourtant" },
		{ word: "foreign ; abroad", translation: " à l'étranger ; she studies abroad or expensive foreign holiday" },
		{ word: "a hardship", translation: "une eppreuve ; c'est une difficulté ; they went through a lot of hardship" },
		{ word: "the wage", translation: "the salaire" },
		{ word: "to be faithful", translation: "être fidèle" },
		{ word: "to worth", translation: " valoir ; to worth a lot of money" },
		{ word: "a enquiry", translation: " une enquète ; made an enquiry about = faire une demande de renseignements" },
		{ word: "the belongings", translation: "les effets personnel (affaire)" },
		{ word: "the warehouse", translation: "un entrepôt (de stockage)" },
		{ word: "awful", translation: "horrible / terrible / affreux the food was awful" },
		{ word: "the journey", translation: "(le voyage) the journey took five hours" },
		{ word: "dozens", translation: "(des dizaines) there was dozens of people at the event" },
		{ word: "a retailler", translation: "entreprise ou personne qui vend directement au consomateur" },
		{ word: "arouse something", translation: "éveiller ; sucité ; stimuler qqc " },
		{ word: "anyone", translation: "n'importe qui" },
		{ word: "an entitlement", translation: " un droit / privilége" },
		{ word: " qqc widespread", translation: " qqc de répandu / généralisé" },
		{ word: "proof that", translation: "preuve que" },
		{ word: "something thrilling", translation: "qqc d'exitant ou palpitant" },
		{ word: "to be aware", translation: "être conciente / au courant" },
		{ word: "a relief", translation: " un soulagement" },
		
		
	],
	Tony1_expression: [
		{ word: "from (time) to (time)", translation: "de tel heure à tel heure" },
		{ word: "to use my skills and learn new__ones__", translation: "permet de ne pas rep et au pluriels dans ce cas ci" },
		{ word: "though", translation: "bien que ; même si ; cependant; pourtant" },
		{ word: "rather than", translation: "plutot que ; stay home rather than move" },
		{ word: "some thing (overshadowing) some thing", translation: " faire de l'ombre à " },
		{ word: "(emphasis) some thing", translation: " mettre en valeur ;  put emphasis to that point" },
		{ word: "at the phone (to hold)", translation: "attendre ou patienter au téléphone que qqn revient" },
		{ word: "an upward", translation: "à la hausse / vers le haut  price are moving upward" },
		{ word: "to ... an annoucement ", translation: "to made an annoucement" },
		{ word: "to get in touch", translation: "entrer en contacte" },
		{ word: "It's portable", translation: " c'est transportable" },
		{ word: "in this instance", translation: " dans ce cas" },
	],
	
	Tony1_regle_a_connaitre: [
		{ word: "(in) rules", translation: "(à l'intérieur) in a room ; in a country (période de temps longue) in the morning ; in two hours ; in march ; in 2025" },
		{ word: "(on) rules", translation: "(contact de la surface) on the table ; on the floor (jour et date précise) on monday ; on July 4th ; on Christmas day" },
		{ word: "(at) rules", translation: "(à un point prècit [lieu ou momment]) at the door ; at school ; at 8 o'clock ; at noon ; at midnight" },
	],

	Tony1_connecteur_logique: [
		{ word: "Whenever", translation: " n'importe quelle heure" },
		{ word: "the straightforward to ", translation: " la simplicité de" },
		{ word: "However", translation: " cependant ; toute fois ; pourtant " },
		{ word: "Whereas", translation: " tandis que " },
		],
};

let currentIndex = 0;
let knownWords = [];
let unknownWords = [];
let unknownWords_inverse = null;
let showTranslation = false;
let totalWords = 0;
let wordStatus = {};
let wordStartTime;
let progressInterval;
let isInversed = false;

document.getElementById('start-btn').addEventListener('click', () => {
  const selectedList = document.getElementById('vocabulary-list').value;
  resetFlashcards();
  shuffleFlashcards(selectedList);
  isInversed = false;
  startFlashcards(selectedList);
});

document.getElementById('inverse-logic').addEventListener('click', () => {
  if (!unknownWords || unknownWords.length === 0) return;
  
  isInversed = !isInversed;

  if (isInversed) {
    unknownWords_inverse = unknownWords.map(item => ({
      word: item.translation,
      translation: item.word
    }));
    unknownWords = unknownWords_inverse;
  } else {
    // Revert to original unknownWords from vocabularyLists or keep a copy somewhere else if needed
    // Ici on suppose qu'on restaure unknownWords à l'original ou on le recharge :
    // Pour simplifier, on inverse encore unknownWords_inverse
    unknownWords = unknownWords_inverse.map(item => ({
      word: item.translation,
      translation: item.word
    }));
  }

  currentIndex = 0;
  createProgressGrid();
  updateFlashcard();
});

document.getElementById('back-to-index-btn').addEventListener('click', () => {
  resetFlashcards();
  showIndex();
});

document.getElementById('flashcard').addEventListener('click', () => {
  const cardContent = document.getElementById('card-content');
  if (showTranslation) {
    const currentWordObj = unknownWords[currentIndex];
    cardContent.innerHTML = `<strong>${currentWordObj.word}</strong>`;
  } else {
    cardContent.textContent = cardContent.getAttribute('data-translation');
  }
  showTranslation = !showTranslation;
});

function shuffleFlashcards(list) {
  unknownWords = [...vocabularyLists[list]].sort(() => Math.random() - 0.5);
}

function startFlashcards(list) {
  document.getElementById('back-to-index-btn').classList.remove('hidden');
  totalWords = unknownWords.length;
  KnownWordsCounter();
  createProgressGrid();
  document.getElementById('progress-grid').classList.remove('hidden');
  updateFlashcard();
  document.getElementById('flashcard-container').classList.remove('hidden');
  document.getElementById('known-words-counter').classList.remove('hidden');
  document.getElementById('inverse-logic').classList.remove('hidden');
  updateKnownWordsCounter();
}

function updateFlashcard() {
  clearInterval(progressInterval);
  const currentWordObj = unknownWords[currentIndex];
  const cardContent = document.getElementById('card-content');
  cardContent.innerHTML = `<strong>${currentWordObj.word}</strong>`;
  cardContent.setAttribute('data-translation', currentWordObj.translation);
  showTranslation = false;
  wordStartTime = Date.now();
  startProgressBar(currentWordObj.word);
}

function startProgressBar(word) {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = '0';
  let elapsed = 0;
  const duration = 8000;
  progressInterval = setInterval(() => {
    elapsed = Date.now() - wordStartTime;
    const percent = Math.min((elapsed / duration) * 100, 100);
    progressBar.style.width = `${percent}%`;
    if (elapsed >= duration && !wordStatus[word]) {
      wordStatus[word] = "orange";
      updateGridBox(word);
    }
  }, 100);
}

document.getElementById('know-btn').addEventListener('click', () => {
  clearInterval(progressInterval);

  let currentWordObj = unknownWords[currentIndex];
  const word = currentWordObj.word;
  const elapsed = Date.now() - wordStartTime;

  if (elapsed >= 8000) {
    wordStatus[word] = "orange";
    unknownWords.push(currentWordObj);
  } else {
    wordStatus[word] = "green";
    knownWords.push(currentWordObj);
  }

  updateGridBox(word);
  updateKnownWordsCounter();

  unknownWords.splice(currentIndex, 1);
  if (currentIndex >= unknownWords.length) currentIndex = 0;

  if (unknownWords.length > 0) {
    updateFlashcard();
  } else {
    alert("Tu as terminé !");
    resetFlashcards();
    showIndex();
  }
});

document.getElementById('dont-know-btn').addEventListener('click', () => {
  clearInterval(progressInterval);

  let currentWordObj = unknownWords[currentIndex];
  const word = currentWordObj.word;
  const elapsed = Date.now() - wordStartTime;

  if (elapsed >= 8000 && !wordStatus[word]) {
    wordStatus[word] = "orange";
  }

  updateGridBox(word);

  unknownWords.push(currentWordObj);
  unknownWords.splice(currentIndex, 1);
  if (currentIndex >= unknownWords.length) currentIndex = 0;

  updateFlashcard();
});

function resetFlashcards() {
  currentIndex = 0;
  knownWords = [];
  unknownWords = [];
  unknownWords_inverse = null;
  isInversed = false;
  showTranslation = false;
  totalWords = 0;
  wordStatus = {};
  clearInterval(progressInterval);
  document.getElementById('back-to-index-btn').classList.add('hidden');
  document.getElementById('flashcard-container').classList.add('hidden');
  document.getElementById('known-words-counter').classList.add('hidden');
  document.getElementById('vocabulary-list-container').classList.add('hidden');
  document.getElementById('known-words-counter').textContent = 'Known words: 0/0';
  document.getElementById('start-btn').classList.remove('hidden');
  document.getElementById('vocabulary-list').classList.remove('hidden');
  document.getElementById('liste').classList.remove('hidden');
  document.getElementById('slogan').classList.remove('hidden');
  document.getElementById('progress-grid').innerHTML = '';
  document.getElementById('progress-grid').classList.add('hidden');
  document.getElementById('progress-bar').style.width = '0';
  document.getElementById('inverse-logic').classList.add('hidden');
}

function showIndex() {
  document.getElementById('start-btn').classList.remove('hidden');
  document.getElementById('vocabulary-list').classList.remove('hidden');
  document.getElementById('liste').classList.remove('hidden');
  document.getElementById('slogan').classList.remove('hidden');
}

function updateKnownWordsCounter() {
  const counter = document.getElementById('known-words-counter');
  counter.textContent = `Known words: ${knownWords.length}/${totalWords}`;
}

function KnownWordsCounter() {
  const counter = document.getElementById('known-words-counter');
  counter.textContent = `Known words: 0/${totalWords}`;
}

function createProgressGrid() {
  const grid = document.getElementById('progress-grid');
  grid.innerHTML = '';
  unknownWords.forEach((item) => {
    const word = item.word; // mot affiché est toujours item.word dans unknownWords
    const box = document.createElement('div');
    box.className = 'grid-box';
    box.id = `grid-box-${word}`;
    grid.appendChild(box);
  });
}

function updateGridBox(word) {
  const box = document.getElementById(`grid-box-${word}`);
  if (box) {
    box.classList.remove('green', 'orange');
    if(wordStatus[word]) {
      box.classList.add(wordStatus[word]);
    }
  }
}
