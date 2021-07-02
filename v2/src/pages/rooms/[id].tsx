import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

//import { useAuth } from '../../hooks/useAuth'
import { useRoom } from '../../hooks/useRoom'
import { MainContent } from '../../components/rooms/MainContent'

import { RoomStyle } from '../../styles/rooms'
import { Navbar } from '../../components/Navbar'

export default function Room() {
  const router = useRouter()
  const [roomId, setRoomId] = useState<string>('')

  const queryKey = 'id'
  const queryValue = router.query[queryKey] as string
  useEffect(() => {
    setRoomId(queryValue)
  }, [queryValue])

  // const { user } = useAuth()
  const { questions, title } = useRoom(roomId)

  return (
    <RoomStyle>
      <Navbar roomId={roomId}/>

      <main>
        {questions != null ? (
          <MainContent questions={questions} roomId={roomId} title={title} />
        ) : (
          <h1>Error</h1>
        )}
      </main>
    </RoomStyle>
  )
}