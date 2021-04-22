import links from './links'
import {useState, useMemo} from 'react'
import NavBarLink from '../../Atoms/Header/NavBarLink'
import Logo from '../../Atoms/Logo'
import Searcher from '../../Atoms/Searcher'
import Menu from '@material-ui/icons/Menu'

export default function Header(){

    const memoizedLinks = useMemo(() =>
        links.map(link => {
            return <NavBarLink key={link.label} link={link} />
        })
    , []);

    return (
        <div className='header'>
            <a href='/' >
                <Logo />
            </a>
            <button className='header-menu-icon'>
                Menu <Menu  />
            </button>
            <Searcher />
            {memoizedLinks}
        </div>
    )
}

