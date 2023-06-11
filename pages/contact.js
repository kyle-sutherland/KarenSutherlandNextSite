import Head from 'next/head';
import Header from '@components/header';

export default function Home() {
  return (
    <div className='container-fluid rounded col-lg-8 p-0 align-content-center bg-light'>
      <Header title='Get in touch' />
      <div className='container-fluid p-5'>
        <div className='row'>
          <div className='conainer-fluid col-sm'>
            <p className='description'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>

          <div className='container-fluid col-sm'>
            <form
              name='contact'
              method='POST'
              data-netlify='true'>
              <div className='mb-3 col-4'>
                <label
                  htmlFor='emailField'
                  className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='emailField'
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='emailBodyField'
                  className='form-label'>
                  Example textarea
                </label>
                <textarea
                  className='form-control'
                  id='emailBodyField'
                  rows='3'></textarea>
                <div className='mb-3 pt-3'>
                  <input
                    type='submit'
                    className='btn btn-primary mb-3'
                    value='Send'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
