import Header from '../../../components/Organisms/Header'
import Footer from '../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import CelebritiesAdministrator from '../../../components/Organisms/CelebritiesAdministrator'

export default function Title({user, t}) {
  const router = useRouter()


  return (
    <>
      <div className='page-container'>
        <Header user={user} />
        <CelebritiesAdministrator user={user} />
      </div>
      <Footer />
    </>
  )
}
