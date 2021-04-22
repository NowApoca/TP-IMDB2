import Search from '@material-ui/icons/Search';

export default function Searcher(){
    return (
        <div className='searcher-container'>
            <select>
                <option value='asd'>{'ALL'}</option>
            </select>
            <input className='searcher-input' type='text' placeholder={'SEARCH'} />
            <Search className='searcher-icon' />
        </div>
        
    )
}
