export default function OurTable({columns, rows, columnsOrder}) {
    const elements = getElements(columns, rows, columnsOrder)

    return (
        <div className='tableDiv'>
            <table className='our-table-main res-table'>
              <thead>
                <tr>
                    {elements.columnElements}
                </tr>
              </thead>
              <tbody>
                    {elements.rowElements}
              </tbody>
            </table>
        </div>
    );
}


const getElements = (columns, rows, columnsOrder) => {
    const isSmall = false;
    const isMedium = false;
    const isLarge = true
    const columnElements = []
    const rowElements = []
    const columnObj = {}
    columns.map( column => {
        column.large = column.large? column.large : true;
        column.mustBeShowed = (
            (isSmall && column.small) ||
            (isMedium && column.medium) ||
            (isLarge && column.large)
        )  ? true : false;
        if(column.mustBeShowed){
            columnElements.push(
                column.element?column.element : <th className={'thead-darkened'}>{column.name}</th>
            )
        } 
        columnObj[column.field] = column.mustBeShowed;
    })
    rows.map(row => {
        const rowValues = []
        columnsOrder.map( columnOrder => {
            if(columnObj[columnOrder]){
                rowValues.push(<td>{row.values[columnOrder]}</td>)
            }
        })
        rowElements.push(
            <tr>
                {rowValues}
            </tr>
        )
    })
    return { columnElements, rowElements }
}