import Image from 'next/image'
import { useRouter } from 'next/router'

import logoImg from '../../../images/icons/logo.svg'

import { LogoToHomeStyles } from './styles'

export function LogoToHome() {
  const router = useRouter()

  return (
    <LogoToHomeStyles>
      <Image
        src={logoImg}
        alt="Let me ask"
        className="link-home"
        onClick={() => router.push('/')}
      />
    </LogoToHomeStyles>
  )
}