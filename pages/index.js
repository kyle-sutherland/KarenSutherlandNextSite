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
      <div className="cutout container px-4 bg-transparent text-dark">
        <div className="container cutout-text">
          <div className="container mx-auto lg:w-1/2 xl:w-1/3">
            <p className="text-gray-950 font-semibold text-4xl p-2">
              Discover a space where you're truly heard.
            </p>
          </div>
          <div className="container mx-auto lg:w-1/2 xl:w-1/3">
            <p className="text-gray-950 text-3xl p-2">
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
        <div className="container card-row md:flex">
          <Card
            cardText="Karen's profile on Psychology Today"
            cardTitle="Karen on Psychology Today"
            buttonText="Pychology Today"
            link="https://www.psychologytoday.com/ca/therapists/karen-sutherland-ottawa-on/444308"
          />
          <Card
            cardTitle="MBCT Group Program"
            cardText="Mindfulness-Based Cognitive Therapy is designed to help people who experience depression and/or anxiety, and combines ..."
            buttonText="Learn More"
            link="https://www.psychologytoday.com/ca/therapists/karen-sutherland-ottawa-on/444308?gid=165510"
          />
          <Card
            cardTitle="Mindfulness for ADHD"
            cardText="A new evidence-based program, consisting of 8, 90-minute group sessions, where tools and skills are introduced ..."
            buttonText="Learn More"
            link="https://www.psychologytoday.com/ca/therapists/karen-sutherland-ottawa-on/444308?gid=226632"
          />
        </div>
      </EndNote>
    </>
  );
}
