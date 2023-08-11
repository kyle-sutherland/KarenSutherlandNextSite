import { Content, EndNote } from "@components/content";
import Card from "@components/card";

export default function Home() {
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
            Welcome to Karen Sutherland's counseling practice. Empowering
            individuals through evidence-based therapeutic conversations. Dive
            into a journey of self-discovery, healing, and transformation with
            Karen, a registered psychotherapist with a decade of experience.
            Whether you're battling anxiety, depression, or seeking a path to
            personal growth, Karen's expertise and compassionate approach are
            here to guide you.
          </p>
        </Content>
      </div>
      <div className="cutout container-fluid px-4 bg-transparent text-dark">
        <div className="container cutout-text">
          <div className="container mx-auto md:w-1/3">
            <p className="text-gray-900 font-semibold text-4xl p-2">
              Discover a space where you're truly heard.
            </p>
          </div>
          <div className="container mx-auto md:w-1/3">
            <p className="text-gray-900 text-3xl p-2">
              Karen Sutherland, MSW, RSW, offers personalized therapy sessions
              tailored to your unique needs. With a foundation in evidence-based
              practices and a commitment to genuine collaboration, Karen ensures
              every session is a step towards positive change. Explore her
              programs and reach out for a transformative therapeutic
              experience.
            </p>
          </div>
        </div>
      </div>
      <EndNote>
        <div className="container-fluid col-auto card-row">
          <div className="grid-flow-col-dense grid gap-6">
            <Card
              cardText="Some placeholder text"
              cardTitle="Title"
              buttonText="Go"
            />
          </div>
        </div>
      </EndNote>
    </>
  );
}
