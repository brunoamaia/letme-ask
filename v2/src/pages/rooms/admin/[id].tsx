import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { ErrorPage } from '../../../components/common/ErrorPage'
import { ChangeMode } from '../../../components/rooms/ChangeMode'
import { MainContent } from '../../../components/rooms/MainContent'
import { Navbar } from '../../../components/rooms/navbar/Navbar'
import { useAuth } from '../../../hooks/useAuth'
import { useRoom } from '../../../hooks/useRoom'

import { RoomStyle } from '../../../styles/pages/rooms'

export default function AdminRoom() {
  const [roomId, setRoomId] = useState<string>('')
  
  const router = useRouter()
  const queryKey = 'id'
  const queryValue = router.query[queryKey] as string
  useEffect(() => {
    setRoomId(queryValue)
  }, [queryValue])

  const { user } = useAuth()
  const { authorId, questions, title } = useRoom(roomId)

  const [authorization, setAuthorization] = useState(true)
  useEffect(() => {
    if (title !== '') {
      if (user?.id !== authorId) {
        setAuthorization(false)
      } else {
        setAuthorization(true)
      }
    }
  }, [authorId, user])

  return (
    <RoomStyle id="page-room">
      <Navbar admin={true} roomId={roomId} />

      <main>
        {title === "NotHasContentInThisPage" || !authorization ? (
          <ErrorPage />
        ) : (
          <>
            {user && (
              <>
                {user.id === authorId && (
                  <ChangeMode isAdminView={true} roomId={roomId} user={user} />
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
          </>
        )}

      </main>
    </RoomStyle>
  )
}