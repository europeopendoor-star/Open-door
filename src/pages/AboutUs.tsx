import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import WorldMapDemo from '../components/WorldMapDemo';
import { Timeline } from '../components/ui/timeline';
const AboutUs = () => {


  return (
    <>
      <Helmet>
        <title>About OpenDoor - Our Mission & Team</title>
        <meta name="description" content="Learn about OpenDoor's mission to bridge the gap between global talent and European tech companies." />
      </Helmet>
      <div className="min-h-screen bg-white">
    <PageHeader
      title="Our Mission"
      subtitle="Breaking down borders to connect talent with opportunity"
      bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-8">We believe talent is global, but opportunity is not.</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-12">
        Founded in 2020, OpenDoor was born out of the frustration of navigating complex immigration systems and fragmented job markets. We set out to build a platform that not only connects brilliant minds with innovative companies but also removes the friction of international relocation.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-12 mb-16">
        <div>
          <p className="font-display text-4xl text-primary mb-2">50+</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Countries</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">2k+</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Placements</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">300+</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Partners</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">98%</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Visa Success</p>
        </div>
      </div>
    </section>

    <WorldMapDemo />

    <Timeline data={[
      {
        title: "2020",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Founded in Berlin with a single mission: to make borders irrelevant for talent. We launched our first platform connecting Brazilian engineers with German tech startups.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
                alt="Founding team"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Office culture"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2021",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Reached our first 100 successful placements. We expanded our operations to the Netherlands and established our first dedicated legal team to handle complex visa sponsorships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=800"
                alt="Amsterdam expansion"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                alt="Business development"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2022",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Launched the "Visa Assistance" program, providing end-to-end legal support for talents from 50+ countries. Our network of partner companies grew to 150+, including major industry leaders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=800"
                alt="Visa support team"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                alt="Handshake"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2023",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Record-breaking year with 1,000+ relocations. We expanded to Sweden and Spain, and reached a milestone of 300+ active partner companies across Europe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&q=80&w=800"
                alt="Sweden relocation"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=800"
                alt="Tech events"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Today",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              With 2,000+ total placements and a 98% visa success rate, OpenDoor is the premier bridge to a European career. We're now introducing AI-powered matching and enhanced expat community features.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Digital impact"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                alt="Our future"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
    ]} />


  </div>    </>

  );
};

export default AboutUs;
