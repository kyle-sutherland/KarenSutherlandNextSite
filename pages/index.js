import { Content, EndNote } from "@components/content";
import Card from "@components/card";
import axios from "axios";

export default function Home({pageContent, cards}) {
  const c = cards.data
  return (
  <>
      <div className="container bg-thistle-blossom border-b border-bosporus rounded-t-lg">
        <img
          src="/kslogo-banner-large.svg"
          className="bg-thistle-blossom md:rounded-t-lg"
        />
      </div>
      <div className="container-fluid bg-bleached-silk">
        <Content>
          <p>
            {pageContent.data.attributes.intro}
          </p>
        </Content>
      </div>
      <div className="cutout container px-4 bg-transparent text-dark">
        <div className="container cutout-text">
          <div className="container px-5 md:px-0 mx-auto lg:w-1/2 xl:w-1/3">
            <p className="text-gray-950 font-semibold text-4xl p-2">
              {pageContent.data.attributes.cutawayHeading}
            </p>
          </div>
          <div className="container px-5 md:px-0 mx-auto lg:w-1/2 xl:w-1/3">
            <p className="text-gray-950 text-3xl p-2">
              {pageContent.data.attributes.cutawayPg}
            </p>
          </div>
        </div>
      </div>
      <EndNote>
        <div className="container card-row space-y-4 md:flex md:space-y-0 mx-auto my-4">
          {c.map((item) => (
            <>
              <Card
                cardTitle = {item.attributes.title}
                cardText = {item.attributes.description}
                link = {item.attributes.link}
                buttonText = {item.attributes.button_text} 
              />
            </>
          ))}
        </div>
      </EndNote>
    </>
  );
}

export async function getStaticProps() {
  const url = process.env.STRAPI_URL;
  const homepage = await axios.get(url + "/api/homepage");
  const cards = await axios.get(url + "/api/homepage-cards");
  return {
    props: {
      pageContent: homepage.data,
      cards: cards.data
    }
  }
}

