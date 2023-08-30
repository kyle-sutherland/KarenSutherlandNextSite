import Header from "@components/header";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {Content} from "@components/content";
import { ActionButton } from "@components/buttons";
import axios from "axios";
// import { ActionButton } from "@components/buttons";
// import Recaptcha from "react-google-recaptcha";

export default function Contact({paragraphs, details, heading}) {
  // const SITE_RECAPTCHA_KEY = process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY;
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;
  // const recaptchaRef = React.createRef();
  // const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const confirmationMessage = (
    <React.Fragment>
      <p>Thank you for reaching out. Karen will get back to you soon.</p>

      <button
        className="btn btn-primary text-dark"
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
      >
        {" "}
        Submit Another Response{" "}
      </button>
    </React.Fragment>
  );

  const contactForm = (
    <form
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
    >
      <input
        type="hidden"
        name="subject"
        value={`${submitterName} has sent a message from your website`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div>
        <div className="mt-0">
          <label htmlFor="name" className="block text-sm font-medium leading-6">
            Name
          </label>
          <div className="mt-2">
            <div className="flex sm:max-w-md">
              <input
                id="name"
                name="name"
                required
                onChange={(e) => setSubmitterName(e.target.value)}
                type="text"
                className="block flex-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              E-mail Address
            </label>
            <div className="mt-2">
              <div className="flex sm:max-w-md">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="block flex-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-thistle-blossom-light sm:text-sm sm:leading-6"
              rows={3}
            />
          </div>
        </div>
        {/*<Recaptcha*/}
        {/*  ref={recaptchaRef}*/}
        {/*  sitekey={SITE_RECAPTCHA_KEY}*/}
        {/*  size="normal"*/}
        {/*  id="recaptcha-google"*/}
        {/*  onChange={() => setButtonDisabled(false)}*/}
        {/*/>*/}
        <div className="mt-6 flex justify-end gap-x-6">
          <ActionButton type="submit" text="Submit" />
        </div>
      </div>
    </form>
  );
  
  const p = paragraphs.data;
  const d = details.data;
  const h = heading.data;

  return (
    <>
      <Header title="Get in touch" />
      <Content>
        <div className="grid grid-flow-row lg:grid-flow-col gap-16 m-2 mt-0">
          <div className="conainer">
            <p className="font-semibold py-2">
              {h.attributes.heading}
            </p>
            {p.map((item) => (
              <>
               {item.attributes.paragraph && <p className="pb-2">{item.attributes.paragraph}</p>}
              </>
            ))}
            <p className="font-semibold py-2">Contact Details:</p>
            <ul>
              <li>Phone: {d.attributes.phone}</li>
            </ul>

            <p className="py-2">Location:</p>
            <p>{d.attributes.location}</p>

            <p className="py-2">Office Hours:</p>
            <p>{d.attributes.hours1}</p>
            <p>{d.attributes.hours2}</p>
          </div>
          <div className="lg:w-96">
            {formVisible ? contactForm : confirmationMessage}
          </div>
        </div>
      </Content>
    </>
  );
}

export async function getStaticProps() {
  const url = process.env.STRAPI_URL;
  const paragraphs = await axios.get(url + "/api/contact-paragraphs");
  const details = await axios.get(url + "/api/contact-detail");
  const heading = await axios.get(url + "/api/contact-heading");
  return {
    props: {
      paragraphs: paragraphs.data,
      details: details.data,
      heading: heading.data
    }
  }
}
