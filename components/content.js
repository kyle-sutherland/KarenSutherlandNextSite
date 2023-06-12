export function Content({children}){
  return(<div className='container-fluid p-5 bg-light rounded-bottom'>
  <>{children}</>
  </div>);
}
export function EndNote({children}){
  return(<div className='container-fluid p-4 bg-light endnote rounded-bottom'>
    <>{children}</>
  </div> )
}