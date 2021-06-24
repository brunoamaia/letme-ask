import { useParams } from 'react-router-dom'

import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode'

import logoImg from '../assets/images/logo.svg'

import '../styles/room.scss'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomParams>()
  const roomId = params.id
  const { questions, title } = useRoom(roomId)

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let me ask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined >Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length === 1 && <span>{questions.length} pergunta</span>}
          {questions.length > 1 && <span>{questions.length} perguntas</span>}

        </div>

        <div className="question-list">
          {questions.length > 1 && questions.map(question => {
            return (
              <Question
                key={question.id}
                author={question.author}
                content={question.content}
              />
            )})
          }
        </div>
      </main>
    </div>
  )
}