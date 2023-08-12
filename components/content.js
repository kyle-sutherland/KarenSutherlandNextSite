export function Content({ children }) {
  return (
    <div className="container p-12 bg-bleached-silk rounded-b-l resize">
      <div className="container text-slate text-xl">
        <>{children}</>
      </div>
    </div>
  );
}

export function EndNote({ children }) {
  return (<div className='container p-4 bg-bleached-silk endnote rounded-b-lg'>
    <>{children}</>
  </div>)
}