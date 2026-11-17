import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ProseSections from "@/components/ProseSections";
import Reveal from "@/components/Reveal";
import { lifestyle } from "@/lib/products";

export const metadata: Metadata = {
  title: { absolute: "About APA Jalamithra | Water Solutions Company in Malappuram" },
  description:
    "Learn about APA Jalamithra Water Solution, a Malappuram-based company focused on practical, quality-driven water solutions.",
  keywords: ["APA Jalamithra", "water solutions Malappuram", "Jalamithra Pvt Ltd"],
};

const mission = [
  {
    title: "Understand before we recommend.",
    text: "We start every engagement by learning about the source, the purpose and the conditions. Good solutions are built on accurate understanding, not on assumptions.",
  },
  {
    title: "Design for the real world.",
    text: "We plan systems for the rain, the heat, the storage and the daily habits that shape how water performs. A system that works only on paper does not serve anyone.",
  },
  {
    title: "Work to a documented standard.",
    text: "Through our ISO 9001:2015 quality management system, we aim for consistent, reviewable and accountable work across every project.",
  },
  {
    title: "Explain what we deliver.",
    text: "We describe what each solution can do, what it cannot do and what it requires for upkeep, so that customers can make informed decisions.",
  },
  {
    title: "Treat water as a shared resource.",
    text: "We encourage careful use, good collection practices and respect for the water we all depend on.",
  },
  {
    title: "Serve beyond the sale.",
    text: "We aim to be a reliable point of contact long after installation, answering questions and helping customers keep their systems in good working order.",
  },
];

const values = [
  {
    title: "Clarity",
    text: "We explain our recommendations in plain language. Customers should understand what they are buying, why it suits them and how it works.",
  },
  {
    title: "Care",
    text: "Water touches health, households and livelihoods. We treat every project with the seriousness it deserves, however large or small.",
  },
  {
    title: "Responsibility",
    text: "We take ownership of our work, from the first assessment to the last service visit, and we are accountable for the standards we promise.",
  },
  {
    title: "Integrity",
    text: "We recommend what fits, even when a simpler or less expensive answer is the right one. Trust is earned through honest advice.",
  },
  {
    title: "Service",
    text: "Our relationship with customers continues after installation. We value long-term dependability over one-time transactions.",
  },
];

const delayFor = (index: number) => ((index % 4) + 1) as 1 | 2 | 3 | 4;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About APA Jalamithra"
        description="A Malappuram-based water solutions company focused on practical, quality-driven work for the water people use every day."
      />

      {/* Who we are */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal as="p" className="eyebrow mb-3">
              Who We Are
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Practical problem solving for everyday water
            </Reveal>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
              <Reveal as="p" delay={1}>
                APA Jalamithra Water Solution Private Limited is a water solutions company based at
                Alipetta House, Enadhi, Kalikavu, in Malappuram district of Kerala. We work under
                the brand name Jalamithra, and our attention is on water in its everyday forms: the
                water that fills a household tank, runs through a commercial kitchen, collects on a
                rooftop after rain or is drawn from a well.
              </Reveal>
              <Reveal as="p" delay={2}>
                We are a company built around practical problem solving. Water issues are rarely
                abstract. They show up as a tank that carries sediment, a filter that is not doing
                its job or a rainwater system that was installed without thinking about the
                filtration stage. Our work begins with those real situations and moves toward
                solutions that people can understand, use and maintain.
              </Reveal>
              <Reveal as="p" delay={2}>
                Our operations are guided by an ISO 9001:2015 quality management system for the
                scope of purifying various types of water. This certification shapes how we plan,
                deliver and review our work, giving our clients a clear basis for trust in the way
                we operate.
              </Reveal>
              <Reveal as="p" delay={3}>
                We also see water as something that connects people. Our Managing Director&apos;s
                background in social and charitable work reflects a belief that a company working
                with a basic resource has a responsibility beyond the transaction. That belief runs
                through the way we speak with customers and the way we choose the solutions we
                recommend.
              </Reveal>
            </div>
          </div>
          <Reveal delay={2} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-soft lg:sticky lg:top-28">
            <Image
              src={lifestyle.glass}
              alt="A glass of clear water"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              quality={75}
            />
          </Reveal>
        </div>
      </section>

      {/* What we do + Approach */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProseSections
            sections={[
              {
                heading: "What We Do",
                paragraphs: [
                  "Jalamithra works across several areas of water management. Our core services include water purification, which addresses the quality of water for drinking and everyday use. We also provide rainwater filtration, helping people make better use of rain collected from roofs and storage tanks. Our natural filtration approach draws on traditional materials and simple system design to offer another route to cleaner water.",
                  "Each of these services begins with an assessment of the source, the intended use and the physical setting. We look at the building, the storage arrangements, the local conditions and the expectations of the people who will use the water. From there we recommend an approach and explain what it will and will not do.",
                  "Installation and planning are handled with the same care. A filtration system is only as good as its design and its upkeep, so we pay attention to how each system is set up, how it can be serviced and what the user needs to know to keep it working well.",
                  "We work with households, businesses and institutions. The needs of a family, a workshop or a school differ in scale and in the kind of attention they require, and we adjust our recommendations to match.",
                ],
              },
              {
                heading: "Our Approach",
                paragraphs: [
                  "Our approach rests on three habits. The first is listening before recommending. Every site and every customer brings a different set of circumstances, and we try to understand them before offering a solution. The second is designing for the real conditions. A solution that works in a laboratory may struggle on a rooftop with seasonal rain and heavy debris, so we plan for the environment the system will actually face. The third is being honest about limits. Filtration and purification have clear strengths, but they also have boundaries, and we explain both so that expectations match reality.",
                  "We also take a considered view of natural filtration. Materials such as amla and iron-removing stones have a place in certain water treatment approaches, and we use them where they suit the situation and where the system can be designed and maintained to support them. We do not present natural media as a universal answer, and we do not overstate what they achieve.",
                  "Behind all of this is a quality mindset. Our ISO 9001:2015 certification gives structure to how we document, check and improve our work. We see that structure as a way of keeping our standards consistent, not as a substitute for judgement or care.",
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="vision-panel relative overflow-hidden rounded-3xl p-8 text-white sm:p-12">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={lifestyle.nature}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-35"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#02101c] via-[#02101c]/88 to-[#0a5ea8]/40" />
          </div>
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-sky-200 uppercase">
                Our Vision
              </p>
              <h2 className="display mt-4 text-3xl text-white sm:text-4xl">
                Every drop worth using, handled with the care it deserves.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-sky-50/90">
              <p>
                We believe water should never be an afterthought. Whether it is collected, filtered
                or purified, it deserves thoughtful design and honest guidance. Our vision is a
                region where people trust the water they use because someone took the time to
                understand it.
              </p>
              <p>
                This vision is practical. It means better filtration in homes, more thoughtful
                rainwater use on properties and clearer choices for people who want to improve
                their water but are not sure where to start.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <Reveal as="p" className="eyebrow mb-3">
              Our Mission
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Six commitments behind every project
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mission.map((item, index) => (
              <Reveal
                key={item.title}
                delay={delayFor(index)}
                className="rounded-2xl border border-line bg-background p-7"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-2 text-xl text-brand-deep">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/75">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 max-w-2xl">
          <Reveal as="p" className="eyebrow mb-3">
            Our Values
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
            What we hold ourselves to
          </Reveal>
        </div>
        <div className="grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((item, index) => (
            <Reveal key={item.title} delay={delayFor(index)}>
              <h3 className="display text-xl text-brand-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal as="p" className="eyebrow mb-3 justify-center">
            Our Story
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
            Purpose more than milestones
          </Reveal>
          <Reveal as="p" delay={2} className="mt-6 text-base leading-relaxed text-foreground/75 sm:text-lg">
            Jalamithra&apos;s story is one of purpose more than milestones. It begins with a simple
            observation: water is essential, yet many people have to make decisions about it
            without clear guidance. Jalamithra was built to offer that guidance and to provide
            practical solutions that match the water people actually have.
          </Reveal>
          <Reveal as="p" delay={3} className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
            As a company, we are still defined by the work in front of us: the filtration systems
            we design, the rainwater projects we plan and the quality standards we follow. We would
            rather let that work speak for itself than build our story on claims we cannot support.
          </Reveal>
        </div>
      </section>

      <div className="bg-white">
        <CtaBand
          headline="Tell us about your water. We will start from there."
          cta={{ href: "/contact", label: "Start Your Water Enquiry" }}
          secondary={{ href: "/solutions", label: "Explore Our Solutions" }}
        />
      </div>
    </>
  );
}
