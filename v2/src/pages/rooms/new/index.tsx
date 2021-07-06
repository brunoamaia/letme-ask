import { useRouter } from 'next/router';

import { LogoToHome } from '../../../components/common/LogoToHome'
import { FormCreateRoom } from '../../../components/NewTopic/FormCreateRoom'

import { IlustrationAside } from '../../../components/home/IlustrationAside';
import { useAuth } from '../../../hooks/useAuth';

import { NewPageStyle } from '../../../styles/pages/new'

export default function NewRoom() {
  const { user } = useAuth()
  const router = useRouter()

  return (
    <NewPageStyle id="page-auth">
      <IlustrationAside />

      <main>
        <div className="main-content">
          <LogoToHome />
          <h2>Criar um novo tópico</h2>
          <FormCreateRoom user={user} />
          <p>Quer entrar em uma sala existente?
            <a onClick={() => router.push('/')}>clique aqui</a>.
          </p>
          <p>{user?.name}</p>
        </div>
      </main>
    </NewPageStyle>
  )
}
