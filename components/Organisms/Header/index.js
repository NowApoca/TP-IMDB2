import links from './links'
import {useState, useMemo} from 'react'
import NavBarLink from '../../Atoms/Header/NavBarLink'
import Logo from '../../Atoms/Logo'
import Searcher from '../../Atoms/Searcher'
import {InputLabel, Select, MenuItem} from '@material-ui/core'
import Settings from '@material-ui/icons/Settings'

export default function Header({nameId}){

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
                <Select value="home">
                  <MenuItem onClick={() => {window.location = '/'}} value="home">Inicio</MenuItem>
                  <MenuItem onClick={() => {window.location = '/'}} value="home">Tops</MenuItem>
                  <MenuItem onClick={() => {window.location = '/'}} value="home">Buscador</MenuItem>
                  <MenuItem onClick={() => {window.location = '/'}} value="home">Watchlist</MenuItem>
                  <MenuItem onClick={() => {window.location = '/'}} value="home">Ayuda</MenuItem>
                </Select>
            </button>
            <Searcher nameId={nameId} />
            {memoizedLinks}
            <button className='header-menu-icon'>
                <Settings  />
            </button>
        </div>
    )
}

