import Header from "@components/header";
import { Content } from "@components/content";
import axios from "axios";
import Head from "next/head";

export default function Home({services, fees, insurance}) {
  const s = services.data;
  const f = fees.data;
  const i = insurance.data;
  return (
    <>
    <Head>
      <meta
        name="description"
        content="Karen sutherland offers inividual, group and couples therapy as well as minduflness study programs. Karen can also be contacted for a short consulation if you don't know where to start"
        key="desc"
      />
    </Head>
      <Header title="Services" />
      <Content>
        <div className="m-2 mt-0">
          <ul>
            {s.map((item) => (
              <li>
              {item.attributes.name && (
                <p className="font-semibold text-2xl py-2">{item.attributes.name}</p>)}
                {item.attributes.description && <p className="text pb-5">{item.attributes.description}</p>}
              </li>
            ))} 
            <li>
              <p className="font-semibold text-2xl py-2">
                Insurance and Payment:
              </p>
              <ul>
                <li>
                  <strong>Fees:</strong>
                </li>
                <ul>
                  {f.map((item) => (
                      <li>{item.attributes.entry}</li>
                  ))}
                </ul>
                <li>
                  <strong>Pay by:</strong> ACH Bank transfer, Cash, Cheque, Visa
                </li>
                <li>
                  <strong>Insurance:</strong>
                </li>
                <ul>
                  {i.map((item) => (
                    <li>{item.attributes.entry}</li>
                  ))}
                </ul>
              </ul>
            </li>
          </ul>
        </div>
      </Content>
    </>
  );
}

export async function getStaticProps() {
  const url = process.env.STRAPI_URL;
  const services = await axios.get(url + "/api/services");
  const fees = await axios.get(url + "/api/fees-entries");
  const insurance = await axios.get(url + "/api/insurance-entries");
  return {
    props: {
      services: services.data,
      fees: fees.data,
      insurance: insurance.data
    }
  }
}
