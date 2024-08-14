//DEPENDENCIES
function LoaderComman({isRender, children}) {
  return (
    <>
      {!isRender && (
        <>
          {' '}
          <div className='overlay'></div>
          <div className='bgImgspanner show'>
            <div className='bgImgCenter'></div>
          </div>
        </>
      )}
      {children}
    </>
  )
}
export default LoaderComman
