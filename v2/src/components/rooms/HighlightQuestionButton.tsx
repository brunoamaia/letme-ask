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

export function HighlightQuestionButton({ question, roomId }: HighlightButtonProps) {
  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighLighted: true
    })
  }
  return (
    <button
      type="button"
      className={`highLight-button ${question.isHighLighted ? 'highLighted' : ''}`}
      aria-label="Marcar como destaque"
      onClick={() => handleHighlightQuestion(question.id)}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        viewBox="0 0 24 24" fill="none" stroke="#737380" strokeWidth="2" 
        strokeLinecap="round" strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  )
}