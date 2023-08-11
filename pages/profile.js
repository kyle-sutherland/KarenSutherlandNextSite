import Header from "@components/header";
import { Content } from "@components/content";

export default function Home() {
  return (
    <>
      <Header title="About Karen Sutherland" />
      <Content>
        <div className="container m-2 mt-0">
          <img
            src="/portrait.jpg"
            className="portrait sm:float-left p-8"
            alt=""
            width="300px"
          />
          <p className="text-2xl font-semibold py-2">
            About Karen Sutherland, MSW, RSW
          </p>
          <p className="pb-4">
            Karen Sutherland is a registered social worker based in Ottawa, ON.
            With a focus on individual needs, she offers tailored therapeutic
            sessions that emphasize collaboration and understanding.
          </p>

          <p className="text-2xl font-semibold py-2">Approach to Therapy</p>
          <p className="pb-4">
            Karen views therapy as a joint effort. She believes that individuals
            come to therapy with their own unique experiences and challenges.
            Her role is to provide a supportive environment where they can
            explore these challenges, understand them, and work towards positive
            change. While therapy can sometimes be a long journey, Karen
            emphasizes that meaningful change can also occur in shorter
            durations.
          </p>

          <p className="text-2xl font-semibold py-2">Areas of Expertise</p>
          <p className="pb-4">
            Karen's therapeutic expertise covers a range of issues, from anxiety
            and depression to life transitions. Additionally, as the lead
            faculty for Ottawa with the Centre for Mindfulness Studies, she
            offers programs that focus on the benefits of mindfulness. These
            programs aim to help individuals manage stress, enhance well-being,
            and cultivate a deeper understanding of themselves.
          </p>

          <p className="text-2xl font-semibold py-2">
            Community Engagement and Accessibility
          </p>
          <p className="pb-4">
            Outside of her private practice, Karen is involved in various
            community initiatives. She organizes workshops and group sessions,
            providing a space for collective healing and growth. Recognizing the
            importance of therapy accessibility, Karen's services are compatible
            with most insurance plans, and she offers a sliding scale to
            accommodate different financial situations.
          </p>

          <p className="text-2xl font-semibold py-2">Conclusion</p>
          <p className="pb-4">
            Karen Sutherland offers a therapeutic approach grounded in empathy,
            validation, and hope. If you're seeking a space to understand and
            address your challenges, Karen's practice provides a supportive
            environment to do so.
          </p>
        </div>
      </Content>
    </>
  );
}
