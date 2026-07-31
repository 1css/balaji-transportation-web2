import Reveal from "../Reveal";

/** About — company description + vision/mission cards + route map image. */
export default function About({ about }) {
  return (
    <section className="aboutParentNode" id="about">
      <div className="about__grid">
        <Reveal className="about__text">
          <p className="sectionEyebrow">Who we are</p>
          <h2 className="sectionTitle">
            {about.heading} <span>{about.highlight}</span>
          </h2>

          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="about__mapWrap">
          <img src={about.image} alt="Rail route map near Bengaluru" className="about__map" />
        </Reveal>
      </div>

      <div className="about__cards">
        <Reveal className="visionCard">
          <h3>{about.vision.title}</h3>
          <p>{about.vision.text}</p>
        </Reveal>

        <Reveal className="visionCard visionCard--alt">
          <h3>{about.mission.title}</h3>
          <p>{about.mission.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
