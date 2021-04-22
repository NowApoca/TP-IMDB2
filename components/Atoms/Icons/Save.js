export default function Save({fill, onClick, height = '24px', width = '24px',color='green'}){
        return (
        <svg fill={fill} height={height} color={color}
        onClick={() => onClick()}
        version="1.1" viewBox="0 0 18 18" width={width} xmlns="http://www.w3.org/2000/svg" sketch="http://www.bohemiancoding.com/sketch/ns" xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g  id="Core" transform="translate(-255.000000, -381.000000)"><g id="save" transform="translate(255.000000, 381.000000)"><path d="M14,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,4 L14,0 L14,0 Z M9,16 C7.3,16 6,14.7 6,13 C6,11.3 7.3,10 9,10 C10.7,10 12,11.3 12,13 C12,14.7 10.7,16 9,16 L9,16 Z M12,6 L2,6 L2,2 L12,2 L12,6 L12,6 Z" id="Shape"/></g></g></g></svg>   
)};
    

