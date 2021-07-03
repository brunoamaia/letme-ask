import Image from 'next/image';
import router from 'next/router';

import logoImg from '../images/icons/logo.svg';

import { LogoHeaderStyles } from '../styles/components/logo-header';

export function LogoHeader() {
  return (
    <LogoHeaderStyles>
      <Image src={logoImg} alt="logo do Let me ask" onClick={() => { router.push('/') }} />
    </LogoHeaderStyles>
  )
}

