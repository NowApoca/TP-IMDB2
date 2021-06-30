import Header from '../../../../components/Organisms/Header'
import Footer from '../../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import UploadAdministrator from '../../../../components/Organisms/UploadAdministrator'

export default function Title({user, t}) {
  const router = useRouter()

  const {entity_type} = router.query

  return (
    <>
      <div className='page-container'>
        <Header user={user} />
        <UploadAdministrator user={user} />
      </div>
      <Footer />
    </>
  )
}
