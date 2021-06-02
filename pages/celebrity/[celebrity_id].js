import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import CelebrityContent from '../../components/Organisms/CelebrityContent'
import {useRouter} from 'next/router'
import hit from '../../api/hit'
import endpoints from '../../api/endpoints'
import {useEffect, useState} from 'react'

export default function Title({user, t}) {

  const [celebrityData, setCelebrityData] = useState(null)

  useEffect( () => {
    hit(endpoints.CELEBRITIES.GET.GET_DATA()).then(result => {
      if(result.status == 200){
        setCelebrityData(result.data)
      }
    })
  }, [])

  //const {title} = router.query.title

  return (
<>
<div className='page-container'>
      <Header />
      {
        celebrityData && <CelebrityContent celebrityData={celebrityData} />
      }
</div>
<Footer />
</>
  )
}
