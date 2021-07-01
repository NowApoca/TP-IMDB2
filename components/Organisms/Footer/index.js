import Help from '@material-ui/icons/Help'
import GitHub from '@material-ui/icons/GitHub'
import Instagram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import Facebook from '@material-ui/icons/Facebook'
import Headset from '@material-ui/icons/Headset'

export default function Footer(){


    return (
        <div  className='footer-container'>
            <div className='footer-info'>
               <Help className='footer-icons' /> 
                <GitHub className='footer-icons' />
                <Instagram className='footer-icons' />
                <Twitter className='footer-icons' />
                <Facebook className='footer-icons' />
                <span className='footer-api'>
                    API
                </span>
            </div>
            <div className='footer-about-us'>
                <span className='footer-about-us-text'>
                    SPONSORED BY NowApoca
                </span>
                <Headset className='footer-about-us-icon' />
            </div>
        </div>
    )
}
