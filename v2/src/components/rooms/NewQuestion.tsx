import { FormEvent, useState } from "react";

import { database } from "../../services/firebase";

import { Button } from "../Button"

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
    <form onSubmit={handleSendQuestion}>
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
            <button> faça seu login</button>.
          </span>

        )}
        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
      </div>
    </form>
  )
}