import React from 'react'
import s from './Header.module.scss'
import logo from'../../assets/logo.svg'

function Header() {

    return (
        <header className={s.header}>
            <a href={'https://tatiankris.github.io/test-project/'} className={s.info}>
            <img src={logo} alt={'No logo, sorry'} className={s.logo}/>
            </a>
        </header>
    )
}

export default Header
