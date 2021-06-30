import Header from '../../../../components/Organisms/Header'
import Footer from '../../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import UploadItem from '../../../../components/Organisms/UploadItem'

export default function Title({user, t}) {
  const router = useRouter()

  const {entity_type} = router.query

  return (
    <>
      <div className='page-container'>
        <Header user={user} />
        <UploadItem user={user} />
      </div>
      <Footer />
    </>
  )
}
