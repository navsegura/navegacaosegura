import QuizPage from "../../components/QuizComponent/QuizPage"
import { QuizProvider } from "../../context/quiz"
QuizProvider

function Quiz(){
    return(
        <>
            <QuizProvider>
                <QuizPage />
            </QuizProvider>
            
        </>
    )
}

export default Quiz