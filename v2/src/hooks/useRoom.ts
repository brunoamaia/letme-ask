import { useEffect, useState } from "react"

import { database } from "../services/firebase"
import { useAuth } from "./useAuth"

interface QuestionProps {
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

type FirebaseQuestions = Record<string, {
  author: {
    name: string
    avatar: string
  }
  content: string
  isAnswered: boolean
  isHighLighted: boolean
  likes: Record<string, {
    authorId: string
  }>
}>

export function useRoom(roomId: string) {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<QuestionProps[] | null>(null)
  const [title, setTitle] = useState('')
  const [authorId, setAuthorId] = useState(null)

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()

      if (databaseRoom == null) {
        setTitle('Sala inválida')
        setQuestions(null)
      } else {
        const firebaseQuestion: FirebaseQuestions = databaseRoom.questions ?? {}
  
        const parsedQuestions = Object.entries(firebaseQuestion).map(([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighLighted: value.isHighLighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(([, like]) => like.authorId === user?.id)?.[0]
          }
        })
  
        setTitle(databaseRoom.title)
        setAuthorId(databaseRoom.authorId)
        setQuestions(parsedQuestions)
      }
    })

    return() => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])

  return { authorId, questions, title }
}