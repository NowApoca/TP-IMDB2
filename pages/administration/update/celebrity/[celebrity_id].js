import Header from '../../../../components/Organisms/Header'
import Footer from '../../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import EditCelebrity from '../../../../components/Organisms/EditCelebrity'
import endpoints from '../../../../api/endpoints'
import hit from '../../../../api/hit'

export default function Celebrity({user, t}) {
  const router = useRouter()

  const [data, setData] = useState()

  const {celebrity_id} = router.query

  useEffect(() => {
    if(celebrity_id){
      hit(endpoints.CELEBRITIES.GET.GET_DATA(celebrity_id)).then(result => {
        if(result.status == 200){
          console.log()
            setData(result.data);
        }
    })
    }
  }, [celebrity_id])

  return (
    <>
      <div className='page-container'>
        <Header user={user} />
        {
          data && <EditCelebrity celebrityData={data} user={user} />
        }
        
      </div>
      <Footer />
    </>
  )
}
