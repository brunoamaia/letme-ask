import { useRouter } from 'next/router'

import { LogoHeader } from './LogoHeader'
import { RoomCode } from './RoomCode'

import { Button } from '../../common/Button'
import { database } from '../../../services/firebase'

import { NavBarStyles } from './styles'

interface NavbarProps {
  admin: boolean
  roomId: string
}

export function Navbar({ admin = false, roomId }: NavbarProps) {
  const router = useRouter()
  async function handleDeleteRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date()
    })
    router.push('/')
  }

  return (
    <header>
      <NavBarStyles>
        <LogoHeader />
        <>
          {admin ? (
            <div>
              <RoomCode code={roomId} />
              <Button 
                isOutlined onClick={handleDeleteRoom} className="close-room"
              >
                Encerrar Sala
              </Button>
            </div>
          ) : (
            <RoomCode code={roomId} />
          )}
        </>
      </NavBarStyles>
    </header>
  )
}