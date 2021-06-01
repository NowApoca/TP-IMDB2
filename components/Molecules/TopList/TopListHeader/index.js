export default function TopListHeader({filter}){
    return (<div className='top-list-header-container'>
        <span className='top-list-header-title'>{`TOP 100 ${filter} MOVIES`}</span>
    </div>)
}

