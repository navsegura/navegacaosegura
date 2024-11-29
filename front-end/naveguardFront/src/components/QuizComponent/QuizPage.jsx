import Questions from "./Questions"
import { useContext, useEffect } from "react"
import { QuizContext } from "../../context/quiz"
import Welcome from "./Welcome"
import GameOver from "./GameOver"


function QuizPage(){
    const [quizState, dispatch] = useContext(QuizContext)

    useEffect(() => {
        dispatch({type: "REORDER_QUESTIONS"})
    }, [])

    return(
        <>
            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Questions />}
            {quizState.gameStage === "End" && <GameOver />}
        </>
    )
}
export default QuizPage