import FilterGroup from '../FilterGroup'

const AppFilters = [
    {label: 'asddsa'},
    {label: 'asddsa'},
    {label: 'asddsa'},
    {label: 'asddsa'},
    {label: 'asddsa'},
]

const SecondaryFilters = [
    {label: 'asddsa'},
    {label: 'asddsa'},
    {label: 'asddsa'},
    {label: 'asddsa'},
    {label: 'asddsa'},
]

export default function EntityFilters(){
    return (<div className='entity-filters-container'>
        <span className='entity-filters-title'>TOPs</span>
        <FilterGroup
            className='entity-filters-group'
            filters={AppFilters}
        />
        <FilterGroup
            className='entity-filters-group'
            filters={SecondaryFilters}
        />
    </div>)
}