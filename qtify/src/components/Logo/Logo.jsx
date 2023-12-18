import React from 'react'
import { ReactComponent as LogoImg } from '../../assets/musicLogo.svg';

function Logo({children}) {
  return (
    <div className='logoWrapper'>
        <LogoImg>{children}</LogoImg>
        
    </div>
  )
}

export default Logo;