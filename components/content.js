export function Content({children}){
  return(<div className='container p-8 bg-bleached-silk rounded-bottom'>
    <div className='container text-content'>
  <>{children}</>
    </div>
  </div>);
}
export function EndNote({children}){
  return(<div className='container p-4 bg-bleached-silk endnote rounded-bottom'>
    <>{children}</>
  </div> )
}