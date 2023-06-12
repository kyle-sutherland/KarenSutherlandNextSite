export default function Header({title}) {
  return (
      <div className='container-fluid text-center content-header rounded-top border-bottom border-coolgray text-dark'>
        <h3 className='title'>{title}</h3>
      </div>
  );
}
