import {useState} from 'react' 
import './App.css'
function App() {
  const questions=[
    {
      questionText:'What is capital of France?',
      answerOptions:[
        {answerText:'NewYork',isCorrect:false},
        {answerText:'Paris',isCorrect:true},
        {answerText:'Rome',isCorrect:false},
        {answerText:'Texas',isCorrect:false}
      ],
    },
    {
      questionText:'Who is apple CEO?',
      answerOptions:[
        {answerText:'TimCook',isCorrect:true},
        {answerText:'ElonMusk',isCorrect:false},
        {answerText:'Buffet',isCorrect:false},
        {answerText:'Madhan',isCorrect:false}
      ],
    },    {
      questionText:'Who is CEO of Tesla?',
      answerOptions:[
        {answerText:'TimCook',isCorrect:false},
        {answerText:'ElonMusk',isCorrect:true},
        {answerText:'Buffet',isCorrect:false},
        {answerText:'Madhan',isCorrect:false} 
      ],
    },
  ];
  const [currentQuestion,setCurrentQuestion]=useState(0);
  
  const [showScore, setShowScore] = useState(false);

  const [score,setScore]=useState(0);

  const handleAnswerButtonClick=(isCorrect)=>{
    if(isCorrect===true)
      setScore(score+1);

    const nextQuestion=currentQuestion+1;
    if(nextQuestion<questions.length)
      setCurrentQuestion(nextQuestion);
    else
      setShowScore(true);
  }

  return (
    <div className="App">
      {showScore ? (<div className="score-section">You scored {score} out of {questions.length}.</div>):
        (
          <>
            <div className="question-section">
                <div className="question-count"><span>Question {currentQuestion+1}</span>/{questions.length}</div>
                <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions)=><button onClick={()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
            </div>
          </>
      )}
    </div>
  );
}

export default App;