import Header from "@components/header";
import { Content } from "@components/content";
import axios from "axios";
import { Head } from "next/document";

const STRAPI_URL = process.env.STRAPI_URL;

export default function Home({content, portrait}) {
  const c = content.data
  return (
    <>
    <Head>
      <meta
        name="description"
        content="Karen Sutherland is a registered social worker based in Ottawa, ON. With a focus on individual needs..."
        key="desc"
      />
    </Head>
      <Header title="About Karen Sutherland" />
      <Content>
        <div className="container m-2 mt-0">
          <img
            src={STRAPI_URL + portrait.url}
            className="portrait sm:float-left p-8"
            alt="A portrait of Karen Sutherland"
            width="300px"
          />
          <>
          {c.map((item) => (
            <>
              {item.attributes.heading && (
                <p className="text-2xl font-semibold py-2">{item.attributes.heading}</p>
              )}
              {item.attributes.paragraph && <p className="pb-4">{item.attributes.paragraph}</p>}
            </>
          ))}
          </> 
        </div>
      </Content>
    </>
  );
}

export async function getStaticProps() {
  const homepage = await axios(STRAPI_URL + "/api/profile-paragraphs")
  const files = await axios(STRAPI_URL + "/api/upload/files")
  return {
    props: {
      content: homepage.data, 
      portrait: files.data[0]
    }
  }
}
