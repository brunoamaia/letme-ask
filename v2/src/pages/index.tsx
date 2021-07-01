import Image from 'next/image'
import { useRouter } from 'next/router'

import { useAuth } from '../hooks/useAuth'
import {Button} from '../components/Button'

import illustrationImg from '../images/icons/illustration.svg'
import googleIconImg from '../images/icons/google-icon.svg'
import logoImg from '../images/icons/logo.svg'

import { HomeStyle } from '../styles/home'

export default function Home() {
  const router = useRouter();
  
  const { signInWithGoogle, user , } = useAuth()
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    router.push('./rooms/new')
  }
  
  return (
    <HomeStyle>
      <aside>
        <Image src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dpuvidas sa sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <Image src={logoImg} alt="Let me ask" />
          <button className="create-room" onClick={handleCreateRoom} /* onClick={() => router.push('./rooms')} */>
            <Image src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form action="">
            <input
              type="text"
              placeholder="Digite o código da sala"
            />

            <Button type="submit">
              Entrar na sala
            </Button>

          </form>
        </div>
      </main>
    </HomeStyle>
  )
}
