import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'

import { IlustrationAside } from '../../../components/home/IlustrationAside';
import { Button } from '../../../components/common/Button';
import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';

import logoImg from '../../../images/icons/logo.svg'

import { NewPageStyle } from '../../../styles/pages/new'

export default function NewRoom() {
  const { user } = useAuth()

  const [newRoom, setNewRoom] = useState('')

  const router = useRouter()

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
    <NewPageStyle id="page-auth">
      <IlustrationAside />

      <main>
        <div className="main-content">
          <Image 
            src={logoImg} 
            alt="Let me ask" 
            className="link-home"
            onClick={() => router.push('/')}
          />
          <h2>Criar um novo tópico</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
            />

            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente?
            <a onClick={() => router.push('/')}>clique aqui</a>.
          </p>

          <p>{user?.name}</p>
        </div>
      </main>
    </NewPageStyle>
  )
}
