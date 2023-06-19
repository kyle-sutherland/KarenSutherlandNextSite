export function Content({children}){
  return(<div className='container p-8 bg-bleached-silk rounded-b-lg'>
    <div className='container text-slate text-xl'>
  <>{children}</>
    </div>
  </div>);
}
export function EndNote({children}){
  return(<div className='container p-4 bg-bleached-silk endnote rounded-b-lg'>
    <>{children}</>
  </div> )
}