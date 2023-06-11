import Head from 'next/head';
import Header from '@components/header';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
  const [submitterName, setSubmitterName] = useState('');
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === 'true';
  const formVisible = !confirmationScreenVisible;

  const confirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

      <button
        className='btn btn-primary'
        onClick={() =>
          router.replace('/contact', undefined, { shallow: true })
        }>
        {' '}
        Submit Another Response{' '}
      </button>
    </React.Fragment>
  );

  const contactForm = (
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      action='contact/?success=true'
      data-netlify-honeypot='bot-field'>
      <p hidden>
        <label>
          Don't fill this out: <input name='bot-field' />
        </label>
      </p>
      <div className='mb-3 col-xxl-8'>
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
          name='emailField'
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='message'
          className='form-label'>
          Example textarea
        </label>
        <textarea
          className='form-control'
          id='message'
          rows='3'
          name='message'></textarea>
        <div className='mb-3 pt-3'>
          <button
            type='submit'
            className='btn btn-primary mb-3'
            name='send'>
            Send
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className='container-fluid rounded col-lg-10 col-xl-8 p-0 align-content-center bg-light'>
      <Header title='Get in touch' />
      <div className='container-fluid p-5'>
        <div className='row'>
          <div className='conainer-fluid col-md'>
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

          <div className='container-fluid col-md'>
            {formVisible ? contactForm : confirmationMessage}
          </div>
        </div>
      </div>
    </div>
  );
}
