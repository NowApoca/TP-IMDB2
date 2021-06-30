import Header from '../../../components/Organisms/Header'
import Footer from '../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import ItemsAdministrator from '../../../components/Organisms/ItemsAdministrator'

export default function Title({user, t}) {
  const router = useRouter()

  const {entity_type} = router.query

  return (
    <>
      <div className='page-container'>
        <Header user={user} />
        <ItemsAdministrator user={user} />
      </div>
      <Footer />
    </>
  )
}
