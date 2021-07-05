import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAuth } from '../../../hooks/useAuth'

import googleIconImg from '../../../images/icons/google-icon.svg'

import { LoginButtonStyles } from './styles'

export function LoginButton() {
  const router = useRouter()
  const { signInWithGoogle, user, } = useAuth()
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    router.push('./rooms/new')
  }

  return (
    <LoginButtonStyles className="create-room" onClick={handleCreateRoom}>
      <Image src={googleIconImg} alt="Logo do Google" />
      Crie um tópico com o Google
    </LoginButtonStyles>
  )
}