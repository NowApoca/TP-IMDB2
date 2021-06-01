import FilterGroup from '../FilterGroup'

const AppFilters = [
    {label: 'asddsa', topType: 'asddsa'},
    {label: 'asddsa', topType: 'asddsa'},
    {label: 'asddsa', topType: 'asddsa'},
    {label: 'asddsa', topType: 'asddsa'},
    {label: 'asddsa', topType: 'asddsa'},
]

const SecondaryFilters = [
    {label: 'asddsa', topType: 'asddsa'},
    {label: 'asddsa', topType: 'asddsa'},
    {label: 'asddsa', topType: 'asddsa'},
    {label: 'asddsa', topType: 'asddsa'},
    {label: 'asddsa', topType: 'asddsa'},
]

export default function EntityFilters({filter}){
    return (<div className='entity-filters-container'>
        <span className='entity-filters-title'>TOPs</span>
        <FilterGroup
            className='entity-filters-group'
            filters={AppFilters}
            selectedFilter={filter}
        />
        <FilterGroup
            className='entity-filters-group'
            filters={SecondaryFilters}
            selectedFilter={filter}
        />
    </div>)
}