import CelebritiesList from '../../Molecules/CelebritiesList'
import {useState, useEffect} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'

function getCelebrities(setter){
    hit(endpoints.CELEBRITIES.GET.GET({limit: 1000})).then(result => {
        if(result.status == 200){
            const celebrities = []
            result.data.map(element => {
                if(element != null){
                    celebrities.push(element)
                }
            })
            setter(celebrities);
        }
    })
}

export default function UsersAdministrator(){

    const [celebrities, setCelebrities] = useState([]);

    useEffect(() => {
        getCelebrities(setCelebrities)
    }, [])

    return (
        <div>
            <CelebritiesList data={celebrities} className='home-loader-content' />
        </div>
    )
}
