import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { MainContent } from '../../components/rooms/MainContent'
import { ChangeMode } from '../../components/rooms/ChangeMode'
import { Navbar } from '../../components/rooms/navbar/Navbar'
import { useAuth } from '../../hooks/useAuth'
import { useRoom } from '../../hooks/useRoom'

import { RoomStyle } from '../../styles/pages/rooms'

export default function Room() {
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
    <RoomStyle>
      <Navbar admin={false} roomId={roomId} />

      <main>
        {!user ? (
          <div className="not-sign">
            <span>
              Você não fez login.
              Faça login para poder utilizar as funções da plataforma.
            </span>
          </div>
        ) : (
          <>
            {user.id === authorId && (
              <ChangeMode isAdminView={false} roomId={roomId} user={user}/>
            )}
          </>
        )}
        {questions != null ? (
          <MainContent
            isAdmin={false}
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