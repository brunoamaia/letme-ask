import { IlustrationAside } from '../components/home/IlustrationAside'

import { LogoToHome } from '../components/common/LogoToHome'
import { FromSearchRoom } from '../components/home/FormSearchRoom'
import { LastTopics } from '../components/home/LastTopics'
import { LoginButton } from '../components/home/LoginButton'

import { HomeStyle } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeStyle>
      <IlustrationAside />

      <main>
        <div className=".main-content">
          <LogoToHome />
          <LoginButton />
          <div className="separator">ou entre em um tópico</div>
          <FromSearchRoom />
          <LastTopics />
        </div>
      </main>
    </HomeStyle>
  )
}
