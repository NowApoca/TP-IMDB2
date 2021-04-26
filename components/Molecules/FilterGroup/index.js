

export default function FilterGroup({filters = [], className}){
    return (<div className={`filter-group-container ${className}`}>
        {filters.map(filter => {
            return (
                <span className={
                        `filter-group-label 
                        ${filter.selected? 'filter-group-label-selected':''
                    }`}
                    >
                    {filter.label}
                </span>
            )
        })}
    </div>)
}