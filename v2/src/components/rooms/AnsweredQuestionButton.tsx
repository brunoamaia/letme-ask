import { database } from "../../services/firebase"

interface HighlightButtonProps {
  question: {
    author: {
      name: string
      avatar: string
    }
    content: string
    id: string
    isAnswered: boolean
    isHighLighted: boolean
    likeCount: number
    likeId: string | undefined
  }
  roomId: string
}

export function AnsweredQuestionButton({ question, roomId }: HighlightButtonProps) {
  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }
  return (
    <button
      type="button"
      className={`answer-button ${question.likeId ? 'answered' : ''}`}
      aria-label="Marcar como respondida"
      onClick={() => handleCheckQuestionAsAnswered(question.id)}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle 
          cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" 
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
        />
        <path 
          d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" 
          stroke="#737380" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" />
      </svg>

    </button>
  )
}