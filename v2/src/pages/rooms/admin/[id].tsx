import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { MainContent } from '../../../components/rooms/MainContent'
import { Navbar } from '../../../components/rooms/navbar/Navbar'
import { useRoom } from '../../../hooks/useRoom'

import { RoomStyle } from '../../../styles/pages/rooms'

export default function AdminRoom() {
  const router = useRouter()

  const [roomId, setRoomId] = useState<string>('')
  const queryKey = 'id'
  const queryValue = router.query[queryKey] as string
  useEffect(() => {
    setRoomId(queryValue)
  }, [queryValue])

  const { questions, title } = useRoom(roomId)

  return (
    <RoomStyle id="page-room">
      <Navbar admin={true} roomId={roomId}/>

      <main>
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