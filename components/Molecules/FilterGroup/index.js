

export default function FilterGroup({filters, className}){
    return (<div className={`filter-group-container ${className}`}>
        {filters.map(filter => {
            return (
                <div>
                    {filter.genre}
                </div>
            )
        })}
    </div>)
}