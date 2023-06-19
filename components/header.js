export default function Header({ title }) {
  return (
    <>
      <div
        className='container text-center content-header bg-thistle-blossom text-charcoal rounded-t-lg border-b border-blue-green'>
        <p className='text-3xl p-2'>{title}</p>
      </div>
    </>
  );
}
