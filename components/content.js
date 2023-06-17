export function Content({children}){
  return(<div className='container-fluid p-5 bg-light rounded-bottom'>
    <div className='container-fluid text-content'>
  <>{children}</>
    </div>
  </div>);
}
export function EndNote({children}){
  return(<div className='container-fluid p-4 bg-light endnote rounded-bottom'>
    <>{children}</>
  </div> )
}