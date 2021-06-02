import Header from '../../../components/Organisms/Header'
import Footer from '../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import UploadCelebrity from '../../../components/Organisms/UploadCelebrity'
import UploadItem from '../../../components/Organisms/UploadItem'

export default function Title({user, t}) {
  const router = useRouter()

  const {entity_type} = router.query

  return (
    <>
      <div className='page-container'>
        <Header />
          {
              entity_type == 'celebrity' && <UploadCelebrity />
          }
          {
              entity_type == 'item' && <UploadItem />
          }
      </div>
      <Footer />
    </>
  )
}
