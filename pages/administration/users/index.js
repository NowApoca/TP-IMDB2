import Header from '../../../components/Organisms/Header'
import Footer from '../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import AdministrationUserContent from '../../../components/Organisms/AdministrationUserContent'

export default function Title({user, t}) {
  const router = useRouter()

  //const {title} = router.query.title

  return (
    <div >
      <Header />
        <AdministrationUserContent />
      <Footer />
    </div>
  )
}
