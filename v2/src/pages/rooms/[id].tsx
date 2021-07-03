import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

//import { useAuth } from '../../hooks/useAuth'
import { useRoom } from '../../hooks/useRoom'
import { MainContent } from '../../components/rooms/MainContent'
import { Navbar } from '../../components/Navbar'

import { RoomStyle } from '../../styles/pages/rooms'

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
      <Navbar admin={false} roomId={roomId}/>

      <main>
        {questions != null ? (
          <MainContent 
            isAdmin={false}
            questions={questions} 
            roomId={roomId} 
            title={title} 
          />
        ) : (
          <h1>Error</h1>
        )}
      </main>
    </RoomStyle>
  )
}