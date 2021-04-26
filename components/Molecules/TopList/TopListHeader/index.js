import SortBy from '../../../Atoms/SortBy'


export default function TopListHeader({group = {}}){
    return (<div className='top-list-header-container'>
        <span className='top-list-header-title'>{`TOP ${group.label} MOVIES`}</span>
        <div className='top-list-header-details'> 
            <span >{`Movies ranked by ${group.description}`}</span>
            <SortBy />
        </div>
    </div>)
}

