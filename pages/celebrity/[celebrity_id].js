import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import CelebrityContent from '../../components/Organisms/CelebrityContent'
import hit from '../../api/hit'
import endpoints from '../../api/endpoints'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export default function Title({user, t}) {
  const router = useRouter();
  const [celebrityData, setCelebrityData] = useState(null)
  const { celebrity_id } = router.query;

  useEffect( () => {
    if(celebrity_id){
      hit(endpoints.CELEBRITIES.GET.GET_DATA(celebrity_id)).then(result => {
        console.log(result, `result.status == 200`)
        if(result.status == 200){
          setCelebrityData(result.data)
        }
      })
    }
  }, [celebrity_id])

  return (
<>
<div className='page-container'>
      <Header user={user} />
      {
        celebrityData && <CelebrityContent user={user} celebrityData={celebrityData} />
      }
</div>
<Footer />
</>
  )
}
