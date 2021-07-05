import Image from "next/image"

import LinkImg from '../../../images/breaking-chain.png'

import { ErrorPageStyles } from './styles'

export function ErrorPage() {
  return (
    <ErrorPageStyles>
      <h1>Algo deu Errado.</h1>

      <div>
        <p>
          Não consegimos encontrar o conteúdo dessa página, ou você não tem acesso a ela.
        </p>
        <p>
          Verifique se o link esta correto, ou caso seja moderador, faça login e tente novamente.
        </p>
      </div>
      <Image src={LinkImg} alt="imagem de um corrente quebrada, simbolizando que o link não funcionou" />
    </ErrorPageStyles>
  )
}