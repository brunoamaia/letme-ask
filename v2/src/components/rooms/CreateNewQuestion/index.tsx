import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import { database } from "../../../services/firebase";

import { Button } from "../../common/Button"

import { CreateNewQuestionStyles } from './styles'

interface NewQuestionProps {
  roomId: string
  user: User | undefined
}

type User = {
  id: string,
  name: string,
  avatar: string
}

export function NewQuestion({ roomId, user }: NewQuestionProps) {
  const router = useRouter()
  const [newQuestion, setNewQuestion] = useState('');

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()
    if (newQuestion.trim() === '') {
      return
    }
    if (!user) {
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighLighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)
    setNewQuestion('')
  }

  return (
    <CreateNewQuestionStyles onSubmit={handleSendQuestion}>
      <textarea
        placeholder="o que você quer perguntar?"
        onChange={event => setNewQuestion(event.target.value)}
        value={newQuestion}
      />

      <div className="form-footer">
        {user ? (
          <div className="user-info">
            <img src={user.avatar} alt={user.avatar} />
            <span>{user.name}</span>
          </div>
        ) : (
          <span>Para enviar uma pergunta,
            <button onClick={() => router.push('/')}> faça seu login</button>.
          </span>

        )}
        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
      </div>
    </CreateNewQuestionStyles>
  )
}