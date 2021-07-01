import links from './links'
import {useState, useMemo} from 'react'
import NavBarLink from '../../Atoms/Header/NavBarLink'
import Logo from '../../Atoms/Logo'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import Searcher from '../../Atoms/Searcher'
import {InputLabel, Select, MenuItem} from '@material-ui/core'
import Settings from '@material-ui/icons/Settings'
import Link from 'next/link'
import { useToasts } from 'react-toast-notifications'

export default function Header({nameId, user}){
    const { addToast } = useToasts()

    const memoizedLinks = useMemo(() =>
        links.map(link => {
            return <NavBarLink key={link.label} link={link} />
        })
    , []);

    const handleLogOut = () => {
        hit(endpoints.USERS.POST.LOGOUT(), {body: {},toasts: {
            addToast, successMessage: 'SALIDA EXITOSA'
        }}).then(result => {
            if(result.status == 204){
                window.location = '/'
                localStorage.removeItem('ortAccessToken')
            }
        })
    }
    
    return (
        <div className='header'>
            <a href='/' >
                <Logo />
            </a>

            {
                user.role == 'ADMINISTRADOR' && <button className='header-menu-icon'>
                <Select value="home">
                  <MenuItem onClick={() => {window.location = '/administration/create/administrator'}} value="home">Crear Administrador</MenuItem>
                  <MenuItem onClick={() => {window.location = '/administration/create/item'}} value="home">Crear Pelicula o Serie</MenuItem>
                  <MenuItem onClick={() => {window.location = '/administration/create/celebrity'}} value="home">Crear Celebridad</MenuItem>
                  <MenuItem onClick={() => {window.location = '/administration/items'}} value="home">Peliculas y Series</MenuItem>
                  <MenuItem onClick={() => {window.location = '/administration/celebrities'}} value="home">Celebridades</MenuItem>
                  <MenuItem onClick={() => {window.location = '/administration/users'}} value="home">Usuarios</MenuItem>
                  <MenuItem onClick={() => {}} value="home">Administracion</MenuItem>
                </Select>
                </button>
            }
            <Searcher nameId={nameId} />
            {memoizedLinks}
            {
                user && user.role != 'NOT_USER' && <Link href='/configuration'>
                    <button className='header-menu-icon'>
                        <Settings  />
                    </button>
                </Link> 
            }
            {
                user && user.role != 'NOT_USER' && <button onClick={() => handleLogOut()} className='header-menu-icon'>
                        SALIR
                 </button>
            }
            {
                user && user.role == 'NOT_USER' && <button onClick={() => window.location = '/signup'} className='header-menu-icon'>
                        REGISTRARSE
                 </button>
            }
            {
                user && user.role == 'NOT_USER' && <button onClick={() => window.location = '/login'} className='header-menu-icon'>
                        INGRESAR
                 </button>
            }
        </div>
    )
}

