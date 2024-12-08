import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import Options from './Options'


import "./Questions.css"

function Questions() {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onselectOption = (selectOptions) => {
      dispatch({
        type: "CHECK_ANSWER",
        payload: {answer: currentQuestion.answer, selectOptions}
      })
    }
    
    
    console.log(quizState)

  return (
    <div id='question_container'>
      <div className="container_questions_quiz">
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2 className='question_header'>{currentQuestion.question}</h2>
          <div className="quiz_option_container">
            {currentQuestion.option.map((options) => (
              <Options 
              option={options} 
              key={options} 
              answer={currentQuestion.answer} 
              selectOption={(option) => onselectOption(option)}
              />
            ))}
          </div>
            {quizState.answerSelected && (
              <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
            )}
        
      </div>
    </div>
  )
}

export default Questions
