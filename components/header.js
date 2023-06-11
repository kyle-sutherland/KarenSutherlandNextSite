export default function Header({ title }) {
  return (
    <div className='container-fluid text-center text-bg-info rounded-top p-2 pt-3'>
      <h4 className='title'>{title}</h4>
    </div>
  );
}
