import { FormEvent, useState } from "react"
import { useRouter } from "next/router"

import { Button } from '../../common/Button'

import { database } from "../../../services/firebase"

import { FormCreateRoomStyles } from './styles'

type FromCreateRoomProps = {
  user: {
    id: string,
    name: string,
    avatar: string
  } | undefined
}

export function FormCreateRoom({ user }: FromCreateRoomProps) {
  const router = useRouter()
  const [newRoom, setNewRoom] = useState('')
  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    sessionStorage.removeItem('DATA_TOPICS_FIREBASE')
    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    router.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <FormCreateRoomStyles onSubmit={handleCreateRoom}>
      <input
        type="text"
        placeholder="Nome da sala"
        onChange={event => setNewRoom(event.target.value)}
      />

      <Button type="submit">
        Criar sala
      </Button>
    </FormCreateRoomStyles>
  )
}