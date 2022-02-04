import {React, useState} from 'react';
import 'normalize.css'
import './App.css';

const wordСasesFromDeclension = {
  wordCaseRod: {
    10: 'ы',
    11: 'и',
    20: 'а',
    21: 'я',
    30: 'и'
  },
  wordCaseDat: {
    10: 'е',
    11: 'е',
    20: 'у',
    21: 'ю',
    30: 'и'
  },
  wordCaseVin: {
    10: 'у',
    11: 'ю',
    20: 'о',
    21: 'е',
    30: ''
  },
  wordCaseTvor: {
    10: 'ой',
    11: 'ей',
    20: 'ом',
    21: 'ем',
    30: 'ью'
  },
  wordCasePred: {
    10: 'е',
    11: 'е',
    20: 'е',
    21: 'е',
    30: 'и'
  },
}

const takeEnding = (word) => word.substring(word.length, word.length-1)

const replaceEnding = (word, ending) =>{
  
  if (ending) {
    return (word.substring(0, word.length-1) + ending) 
  } else{
    return word
  } 
  
}

const whichDeclension  = (word)=>{

  const ending = takeEnding(word)

  switch (ending) {
    case 'а':
      return 10
    case 'я':
      return 11

    case 'о':
      return 20
    case 'е':
      return 21

    case 'ь':
      return 30

    default:
      return 22
  }
}

const toWordCase = (word, wordCase)=>{

  const declanation = whichDeclension(word)

  const ending = wordСasesFromDeclension[wordCase][declanation]

  return replaceEnding(word, ending)

}


const App = ()=> {

  const [desiredWord, setDisiredWord] = useState('')

  const changeWordHandler = (e)=>{
    e.preventDefault();
    const wordCase = e.target.caseChoice.value
    const defaultWord = e.target.defaultWord.value
    setDisiredWord(toWordCase(defaultWord, wordCase))
  }

  return(
    <div className="App">
      <div className="form-wrapper">
        <p className="form-wrapper__caption caption">Введите слово в именительном падеже</p>
        <form className="form-wrapper__form form" action="" onSubmit={changeWordHandler}>
          <input className="form__input input" name="defaultWord" type="text" placeholder="Слово в именительном падеже"/>
          <select className="form__select select" id="caseChoice" name="caseChoice">
            <option value="wordCaseRod" name="wordCaseRod">Родительный</option>
            <option value="wordCaseDat" name="wordCaseDat">Дательный</option>
            <option value="wordCaseVin" name="wordCaseVin">Винительный</option>
            <option value="wordCaseTvor" name="wordCaseTvor">Творительный</option>
            <option value="wordCasePred" name="wordCasePred">Предложный</option>
          </select>
          <button className="button form__button">
            Преобразовать
          </button>
        </form>
        <p className="form-wrapper__desired-word">Преобразованное слово: {desiredWord}</p>
      </div>
    </div>
    
  )
}

export default App;
