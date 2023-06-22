import Header from "@components/header";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Content } from "@components/content";

export default function Contact() {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  const confirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

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
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            className="rounded-md bg-bosporus px-3 py-2 text-sm text-bleached-silk shadow-sm hover:bg-opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-thistle-blossom"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <>
      <Header title="Get in touch" />
      <Content>
        <div className="grid grid-flow-row lg:grid-flow-col gap-16">
          <div className="conainer">
            <p>
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
          <div className="lg:w-96">
            {formVisible ? contactForm : confirmationMessage}
          </div>
        </div>
      </Content>
    </>
  );
}
