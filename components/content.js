export function Content({ children }) {
  return (
    <div className="z-10 container p-12 bg-bleached-silk rounded-b-lg resize container text-charcoal text-xl">
      <>{children}</>
    </div>
  );
}

export function EndNote({ children }) {
  return (
    <div className='z-10 container p-4 bg-bleached-silk endnote rounded-b-lg'>
      <>{children}</>
    </div>
  )}
