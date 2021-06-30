import Header from '../../../../components/Organisms/Header'
import Footer from '../../../../components/Organisms/Footer'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import EditItem from '../../../../components/Organisms/EditItem'
import endpoints from '../../../../api/endpoints'
import hit from '../../../../api/hit'

export default function Celebrity({user, t}) {
  const router = useRouter()

  const [data, setData] = useState()

  const {item_id} = router.query

  useEffect(() => {
    if(item_id){
      hit(endpoints.ITEMS.GET.GET_DATA(item_id)).then(result => {
        if(result.status == 200){
          console.log()
            setData(result.data);
        }
    })
    }
  }, [item_id])

  return (
    <>
      <div className='page-container'>
        <Header user={user} />
        {
          data && <EditItem itemData={data} user={user} />
        }
        
      </div>
      <Footer />
    </>
  )
}
