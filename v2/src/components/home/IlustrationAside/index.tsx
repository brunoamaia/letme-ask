import Image from 'next/image'

import illustrationImg from '../../../images/icons/illustration.svg'

import { IlustrationAsideStyles } from './styles'

export function IlustrationAside() {
  return (
    <IlustrationAsideStyles>
      <Image src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dpuvidas sa sua audiência em tempo-real</p>
    </IlustrationAsideStyles>
  )
}