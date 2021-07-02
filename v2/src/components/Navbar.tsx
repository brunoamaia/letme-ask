import { LogoHeader } from './LogoHeader'
import { RoomCode } from './RoomCode'

interface NavbarProps {
  roomId: string
}

export function Navbar({ roomId }: NavbarProps) {
    return (
    <header>
      <div className="content">
        <LogoHeader />
        <RoomCode code={roomId} />
      </div>
    </header>
  )
}