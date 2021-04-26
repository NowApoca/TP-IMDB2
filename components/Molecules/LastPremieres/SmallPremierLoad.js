import ContentLoader from 'react-content-loader'

const Loader = ({className, amount = 1}) => {
    const elements = []
    for(let index = 0; index < amount ; index++){
        elements.push(<ContentLoader
            speed={1}
            width={'100%'}
            className={className}
            height={'30%'}
            viewBox="0 0 100% 100%"
            backgroundColor="black"
            foregroundColor="#ecebeb"
            >
            <rect x="2%" y="5%" rx="0" ry="0" width="30%" height="90%" />
            <rect x="34%" y="15%" rx="0" ry="0" width="68%" height="20" />
            <rect x="34%" y="30%" rx="0" ry="0" width="68%" height="20" />
            </ContentLoader>)
    }
    return <>
        {elements.map(element => element)}
    </>
} 

export default Loader