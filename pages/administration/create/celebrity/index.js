import Header from '../../../../components/Organisms/Header'
import Footer from '../../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import UploadCelebrity from '../../../../components/Organisms/UploadCelebrity'

export default function Title({user, t}) {
  const router = useRouter()

  return (
    <>
      <div className='page-container'>
        <Header user={user} />
        <UploadCelebrity user={user} />
      </div>
      <Footer />
    </>
  )
}
