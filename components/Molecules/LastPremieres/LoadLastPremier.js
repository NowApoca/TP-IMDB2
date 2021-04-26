import ContentLoader from 'react-content-loader'

const Loader = ({className, amount = 1}) => {
    const elements = []
    for(let index = 0; index < amount ; index++){
        elements.push(<ContentLoader
            speed={1}
            width={'100%'}
            className={className}
            height={'100%'}
            viewBox="0 0 100% 100%"
            backgroundColor="black"
            foregroundColor="#ecebeb"
            >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
            </ContentLoader>)
    }
    return <>
        {elements.map(element => element)}
    </>
} 

export default Loader