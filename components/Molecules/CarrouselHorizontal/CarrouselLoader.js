import ContentLoader from 'react-content-loader'

const Loader = ({className, amount = 5}) => {
    const elements = []
    for(let index = 0; index < amount ; index++){
        elements.push(<ContentLoader 
            viewBox="0 0 100% 100%"
            height={'100%'}
            width={"20%"}
            speed={2}
            backgroundColor="#000000"
            foregroundColor="#ecebeb"
            >
            <rect x="12" y="4" rx="2" ry="2" width="100%" height="152" /> 
            <rect x="12" y="160" rx="0" ry="0" width="25%" height="25" /> 
            <rect x="75%" y="160" rx="0" ry="0" width="25%" height="25" /> 
            <rect x="12" y="209" rx="0" ry="0" width="100%" height="14" />
            <rect x="12" y="188" rx="0" ry="0" width="100%" height="14" /> 
            </ContentLoader>)
    }
    return <>
        {elements.map(element => element)}
    </>
} 

export default Loader