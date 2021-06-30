import Image from 'next/image'

import illustrationImg from '../../public/icons/illustration.svg'
import logoImg from '../../public/icons/logo.svg'
import googleIconImg from '../../public/icons/google-icon.svg'

import { HomseStyle } from '../styles/home'

export default function Home() {
  return (
    <HomseStyle>
      <aside>
        <Image src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dpuvidas sa sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <Image src={logoImg} alt="Let me ask" />
          <button className="create-room">
            <Image src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form action="">
            <input
              type="text"
              placeholder="Digite o código da sala"
            />

            <button type="submit">
              Entrar na sala
            </button>

          </form>
        </div>
      </main>
    </HomseStyle>
  )
}
