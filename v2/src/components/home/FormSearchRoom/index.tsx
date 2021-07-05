import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { database } from '../../../services/firebase'

import logIn from '../../../images/icons/log-in.svg'

import { FromSearchRoomStyles } from './styles'

export function FromSearchRoom() {
  const router = useRouter()

  const [roomCode, setRoomCode] = useState('')
  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exist.')
      return
    }

    if (roomRef.val().closedAt) {
      alert('Room already closed.')
      return
    }

    router.push(`/rooms/${roomCode}`)
  }
  return (
    <FromSearchRoomStyles>
      <form onSubmit={handleJoinRoom}>
        <input
          className={`${roomCode != '' ? 'open' : 'close'}`}
          type="text"
          placeholder="Digite o código da sala"
          onChange={event => setRoomCode(event.target.value)}
          value={roomCode}
        />

        <button type="submit" className={`${roomCode != '' ? 'open' : 'close'}`}>
          <Image src={logIn} alt="Imagem representando que entra na sala" />
        </button>
      </form>
    </FromSearchRoomStyles>
  )
}