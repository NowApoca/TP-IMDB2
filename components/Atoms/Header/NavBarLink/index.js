export default function NavBarLink({link}){
    return <a className='navbar-link-button' href={link.path}>
        {link.label}
    </a>
}