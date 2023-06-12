import Head from 'next/head';
import Header from '@components/header';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {Content} from "@components/content";

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
        className='btn btn-primary text-dark'
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
      className='container'
      method='POST'
      name='contact-form'
      action='contact/?success=true'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <input
        type='hidden'
        name='subject'
        value={`${submitterName} has sent a message from your website`}
      />
      <input
        type='hidden'
        name='form-name'
        value='contact-form'
      />
      <p hidden>
        <label>
          Don’t fill this out: <input name='bot-field' />
        </label>
      </p>
      <div className='mb-3 row g-3'>
        <div className='col'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            name='name'
            required
            onChange={(e) => setSubmitterName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor='email'>E-mail Address</label>
          <input
            id='email'
            type='email'
            name='email'
            required
            className='form-control'
          />
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          required
          className='form-control'
          rows='10'
        />
        <div className='mb-3 pt-3'>
          <button
            className='btn btn-primary text-dark'
            type='submit'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <>
      <Header title='Get in touch' />
      <Content>
        <div className='row'>
          <div className='conainer-fluid col-md'>
            <p className='lead'>
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
      </Content>
    </>
  );
}
