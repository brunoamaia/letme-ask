import { useRouter } from 'next/router';

import {ChangeModeStyles} from '../../styles/components/rooms/change-mode'

interface ChangeModeProps {
  isAdminView: boolean;
  roomId: string;
  user: User | undefined
}
type User = {
  id: string,
  name: string,
  avatar: string
}

export function ChangeMode({ isAdminView, roomId, user }: ChangeModeProps) {
  const router = useRouter()
  const name = user?.name.split(' ') || []
  return (
    <ChangeModeStyles>
      {!isAdminView ? (
        <>
          <div className="information">
            <p> Olá {name[0]}, você é o moderador deste tópico.</p>
            <p>É recomendado ir para o modo moderador.</p>
          </div>
          <button
            type="button"
            onClick={() => router.push(`/rooms/admin/${roomId}`)}
          >
            Ver como moderador
          </button>
        </>
      ) : (
        <>
          <div className="information">
            <p>Olá {name[0]}. Bem vindo ao modo moderador.</p>
            <p>Clique no botão ao lado para mudar o modo de vizualização.</p>
          </div>
          <button
            className="admin-mode"
            type="button"
            onClick={() => router.push(`/rooms/${roomId}`)}
          >
            Modo normal
          </button>
        </>
      )}
    </ChangeModeStyles>
  )
}