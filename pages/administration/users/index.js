import Header from '../../../components/Organisms/Header'
import Footer from '../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import UsersAdministrator from '../../../components/Organisms/UsersAdministrator'

export default function Title({user, t}) {
  const router = useRouter()

  const {entity_type} = router.query

  return (
    <>
      <div className='page-container'>
        <Header user={user} />
        <UsersAdministrator user={user} />
      </div>
      <Footer />
    </>
  )
}
