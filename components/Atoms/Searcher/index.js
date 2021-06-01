import Search from '@material-ui/icons/Search';
import {useState, useEffect} from 'react'

export default function Searcher({nameId}){

    const [currentName, setCurrentName] = useState(nameId)

    useEffect(() => {
        if(nameId){
            setCurrentName(nameId)
        }
    }, [nameId])

    return (
        <div className='searcher-container'>
            <input value={currentName} onInput={e => setCurrentName(e.target.value)}
                className='searcher-input' type='text' placeholder={'SEARCH'}
            />
            <Search className='searcher-icon' />
        </div>
        
    )
}
