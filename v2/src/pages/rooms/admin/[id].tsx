import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { ChangeMode } from '../../../components/rooms/ChangeMode'
import { MainContent } from '../../../components/rooms/MainContent'
import { Navbar } from '../../../components/rooms/navbar/Navbar'
import { useRoom } from '../../../hooks/useRoom'

import { RoomStyle } from '../../../styles/pages/rooms'
import { useAuth } from '../../../hooks/useAuth'

export default function AdminRoom() {
  const router = useRouter()

  const [roomId, setRoomId] = useState<string>('')
  const queryKey = 'id'
  const queryValue = router.query[queryKey] as string
  useEffect(() => {
    setRoomId(queryValue)
  }, [queryValue])

  const { user } = useAuth()
  const { authorId, questions, title } = useRoom(roomId)

  return (
    <RoomStyle id="page-room">
      <Navbar admin={true} roomId={roomId} />

      <main>
        {!user ? (
          <div className="not-sign">
            <span>
              Você não fez login na plataforma.
              Faça login para poder utilizar as funções da plataforma.
            </span>
          </div>
        ) : (
          <>
            {user.id === authorId && (
              <ChangeMode isAdminView={true} roomId={roomId} user={user}/>
            )}
          </>
        )}
        {questions != null ? (
          <MainContent
            isAdmin={true}
            questions={questions}
            roomId={roomId}
            title={title}
          />
        ) : (
          <h1>Buscando informações...</h1>
        )}
      </main>
    </RoomStyle>
  )
}