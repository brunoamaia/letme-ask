import Image from 'next/image'

import { RoomCodeStyle } from '../../../styles/components/room-code'

import copyImg from '../../../images/icons/copy.svg'

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }
  return (
    <RoomCodeStyle className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <Image src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </RoomCodeStyle>
  )
}