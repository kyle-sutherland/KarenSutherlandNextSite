import Header from "@components/header";
import { Content } from "@components/content";
import axios from "axios";
import Head from "next/head";

export default function Home({resources}) {
  const r = resources.data;
  return (
    <>
    <Head>
      <meta
        name="description"
        content=""
        key="desc"
      />
    </Head>
      <Header title="Resources" />
      <Content>
        <div className="m-2 mt-0">
            {r.map((item) => (              
              <>
                {item.attributes.name && (<p className="text-2xl semi-bold pb-2">{item.attributes.name}</p>)}
                {item.attributes.description && (<p className="pb-4">{item.attributes.description}</p>)}
                {item.attributes.link && (<p className="pb-4"><a href={item.attributes.link}>More Information</a></p>)}
              </>
            ))}
        </div>
      </Content>
    </>
  );
}

export async function getStaticProps() {
  const url = process.env.STRAPI_URL;
  const resources = await axios.get(url + "/api/resources");
  return {
    props: {
      resources: resources.data
    }
  }
}
