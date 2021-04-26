import ContentLoader from 'react-content-loader'

const Loader = ({className, amount = 3}) => {
    const elements = []
    for(let index = 0; index < amount ; index++){
        elements.push(<ContentLoader
            speed={1}
            width={'25%'}
            className={className}
            height={'100%'}
            viewBox="0 0 100% 100%"
            backgroundColor="black"
            foregroundColor="#ecebeb"
            >
            <circle cx="50%" cy="25%" r="20%" /> 
            <rect x="12.5%" y="50%" rx="0" ry="0" width="75%" height="22" /> 
            <rect x="25%" y="62.5%" rx="0" ry="0" width="50%" height="21" /> 
            <rect x="37.5%" y="75%" rx="0" ry="0" width="25%" height="17" />
            </ContentLoader>)
    }
    return <>
        {elements.map(element => element)}
    </>
} 

export default Loader