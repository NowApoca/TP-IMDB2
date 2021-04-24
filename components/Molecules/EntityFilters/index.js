import FilterGroup from '../FilterGroup'

const AppFilters = [
    {genre: 'asddsa'},
    {genre: 'asddsa'},
    {genre: 'asddsa'},
    {genre: 'asddsa'},
    {genre: 'asddsa'},
]

export default function EntityFilters({filters}){
    return (<div className='entity-filters-container'>
        <FilterGroup
            className='entity-filters-group'
            filters={AppFilters}
        />
    </div>)
}