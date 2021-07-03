import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { LastTopics } from '../components/home/LastTopics'
import { useAuth } from '../hooks/useAuth'
import { useQuestions } from '../hooks/useQuestions'
import { database } from '../services/firebase'

import googleIconImg from '../images/icons/google-icon.svg'
import illustrationImg from '../images/icons/illustration.svg'
import logoImg from '../images/icons/logo.svg'
import logIn from '../images/icons/log-in.svg'

import { HomeStyle } from '../styles/pages/home'

type TopicsProps = Array<Topics>
interface Topics {
  id: string
  countQuestions: number
  title: string
}

export default function Home() {
  const router = useRouter();
  const { topics } = useQuestions()

  const { signInWithGoogle, user, } = useAuth()
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    router.push('./rooms/new')
  }

  const [dataTopics, setDataTopics] = useState<TopicsProps>()
  useEffect(() => {
    setDataTopics(topics)
  }, [topics])

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
    <HomeStyle>
      <aside>
        <Image src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dpuvidas sa sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <Image src={logoImg} alt="Let me ask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <Image src={googleIconImg} alt="Logo do Google" />
            Crie um tópico com o Google
          </button>

          <div className="separator">ou entre em um tópico</div>

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

          {dataTopics != null && (
            <div className="topics-container">
              <LastTopics data={dataTopics} />
            </div>
          )}
        </div>
      </main>
    </HomeStyle>
  )
}
