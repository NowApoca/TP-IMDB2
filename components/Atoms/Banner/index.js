
export default function Banner({text, size}){
  return (<div className='banner-div'>
    <span className={`banner-${size || 'title'}`}>
      {text}
    </span>
  </div>)
};
