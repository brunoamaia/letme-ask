import { useAuth } from "../../../hooks/useAuth"

import { AnsweredQuestionButton } from '../button/AnsweredQuestionButton'
import { DeleteQuestionButton } from '../button/DeleteQuestionButton'
import { HighlightQuestionButton } from '../button/HighlightQuestionButton'
import { LikeQuestionButton } from '../button/LikeQuestionButton'
import { NewQuestion } from '../CreateNewQuestion'
import { ShowQuestion } from '../ShowQuestion'

import { MainContentStyles } from './styles'

interface MainContentProps {
  isAdmin: boolean
  questions: Array<{
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
  }>
  roomId: string
  title: string
}

export function MainContent({
  isAdmin,
  questions,
  roomId,
  title
}: MainContentProps) {
  const { user } = useAuth()

  return (
    <MainContentStyles>
      <div className="room-title">
        <h1>Tópico: {title}</h1>
        {questions.length === 1 && <span>{questions.length} pergunta</span>}
        {questions.length > 1 && <span>{questions.length} perguntas</span>}
      </div>

      <NewQuestion roomId={roomId} user={user} />

      <div className="question-list">
        {questions.length > 0 && questions.map(question => {
          return (
            <ShowQuestion
              key={question.id}
              author={question.author}
              content={question.content}
              isAnswered={question.isAnswered}
              isHighLighted={question.isHighLighted}
            >
              {!question.isAnswered && (
                <>
                  {!isAdmin ? (
                    <LikeQuestionButton question={question} roomId={roomId} user={user} />
                  ) : (
                    <>
                      <AnsweredQuestionButton question={question} roomId={roomId} />
                      <LikeQuestionButton question={question} roomId={roomId} user={user} />
                      <HighlightQuestionButton question={question} roomId={roomId} />
                      <DeleteQuestionButton question={question} roomId={roomId} />
                    </>
                  )}
                </>
              )}
            </ShowQuestion>
          )
        })
        }
      </div>
    </MainContentStyles>
  )
}