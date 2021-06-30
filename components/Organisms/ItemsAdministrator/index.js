import ItemsList from '../../Molecules/ItemsList'
import {useState, useEffect} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'

function getItems(setter){
    hit(endpoints.ITEMS.GET.GET({limit: 1000})).then(result => {
        if(result.status == 200){
            const items = []
            result.data.map(element => {
                if(element != null){
                    items.push(element)
                }
            })
            setter(items);
        }
    })
}

export default function UsersAdministrator(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems(setItems)
    }, [])

    return (
        <div>
            <ItemsList data={items} className='home-loader-content' />
        </div>
    )
}
