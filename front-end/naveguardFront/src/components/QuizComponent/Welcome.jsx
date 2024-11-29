import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import "./Welcome.css"


const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    

  return (
    <>
        <div className="container_principal_quiz">
            <div className="card_quiz_welcome">
            <h2 className="title_quiz">Seja bem-vindo</h2>
            <p className="pharagraf_quiz">Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})} className="button_quiz">Iniciar</button>
            </div>
        </div>
    </>
  )
}

export default Welcome
