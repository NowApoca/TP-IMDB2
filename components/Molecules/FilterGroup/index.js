

export default function FilterGroup({filters = [], className, selectedFilter}){
    return (<div className={`filter-group-container ${className}`}>
        {filters.map(filter => {
            return (
                <a href={`/tops/${filter.topType}`}>
                    <span className={
                            `filter-group-label 
                            ${filter.topType == selectedFilter? 'filter-group-label-selected':''
                        }`}
                        >
                        {filter.label}
                    </span>
                </a>
            )
        })}
    </div>)
}