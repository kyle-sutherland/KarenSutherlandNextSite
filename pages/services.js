import Header from "@components/header";
import { Content } from "@components/content";

export default function Home() {
  return (
    <>
      <Header title="Services" />
      <Content>
        <div className="m-2 mt-0">
          <ul>
            <li>
              <p className="font-semibold text-2xl py-2">Individual Therapy:</p>
              <p className="text pb-5">
                Embark on a one-on-one therapeutic journey tailored to your
                unique needs. Karen's individual sessions provide a safe space
                for introspection, healing, and personal growth. Address
                concerns ranging from anxiety and depression to life transitions
                and relationship challenges. Together, you'll work towards
                understanding, resilience, and positive change.
              </p>
            </li>

            <li>
              <p className="font-semibold text-2xl py-2">
                Group Therapy Programs:
              </p>
              <p className="text pb-5">
                Join a supportive community and explore shared experiences.
                Karen's group therapy sessions offer a collective environment to
                address specific challenges, from managing depression and
                anxiety with Mindfulness-Based Cognitive Therapy to navigating
                the complexities of ADHD. Engage in structured sessions designed
                to foster understanding, support, and collective growth.
              </p>
            </li>

            <li>
              <p className="font-semibold text-2xl py-2">Couples Therapy:</p>
              <p className="text pb-5">
                Reignite connection and understanding in your relationship.
                Karen's couples therapy sessions focus on enhancing
                communication, resolving conflicts, and strengthening bonds.
                Whether you're navigating a challenging phase or seeking to
                deepen your connection, Karen's strategic and empathetic
                approach will guide you towards a harmonious partnership.
              </p>
            </li>

            <li>
              <p className="font-semibold text-2xl py-2">
                Mindfulness and Meditation Programs:
              </p>
              <p className="text pb-5">
                Discover the transformative power of mindfulness. Karen, as the
                lead faculty for Ottawa with the Centre for Mindfulness Studies,
                offers specialized programs designed to cultivate mindfulness,
                manage stress, and enhance overall well-being. Whether you're
                new to meditation or seeking advanced techniques, Karen's
                programs offer a holistic approach to mental and emotional
                wellness.
              </p>
            </li>

            <li>
              <p className="font-semibold text-2xl py-2">
                Consultation Services:
              </p>
              <p className="text pb-5">
                Not sure where to start? Reach out to Karen for a free 15-minute
                consultation. Discuss your concerns, understand the therapeutic
                process, and determine the best approach for your needs. Karen's
                warm and open demeanor ensures you'll feel comfortable and
                informed from the very first conversation.
              </p>
            </li>

            <li>
              <p className="font-semibold text-2xl py-2">
                Insurance and Payment:
              </p>
              <ul>
                <li>
                  <strong>Fees:</strong>
                </li>
                <ul>
                  <li>Individual Sessions $150</li>
                  <li>Couple Sessions $165</li>
                  <li>Sliding scale: apply if you may be eligible</li>
                </ul>
                <li>
                  <strong>Pay by:</strong> ACH Bank transfer, Cash, Cheque, Visa
                </li>
                <li>
                  <strong>Insurance:</strong>
                </li>
                <ul>
                  <li>Blue Cross</li>
                  <li>Green Shield Canada</li>
                  <li>LifeWorks | Morneau Shepell</li>
                  <li>Medavie Blue Cross</li>
                  <li>Most Ontario Insurance Plans</li>
                  <li>SunLife</li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
      </Content>
    </>
  );
}
