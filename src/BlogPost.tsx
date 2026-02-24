import PageHeader from './components/PageHeader';

const BlogPost = () => (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="The Ultimate Guide to the EU Blue Card"
      subtitle="Insights • Oct 12, 2023"
      bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="prose prose-lg text-gray-600">
        <p className="lead text-xl mb-8">
          The EU Blue Card is a work permit for highly skilled non-EU citizens. It offers a fast-track to permanent residence and allows you to work in most EU countries. Here is everything you need to know.
        </p>
        <h3 className="font-display text-2xl text-primary mb-4 mt-12">1. Eligibility Criteria</h3>
        <p className="mb-6">
          To apply for an EU Blue Card, you typically need:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>A valid work contract or binding job offer for at least one year.</li>
          <li>A salary that meets the minimum threshold (this varies by country, e.g., €58,400 in Germany).</li>
          <li>A university degree or equivalent professional experience (in some cases).</li>
        </ul>

        <h3 className="font-display text-2xl text-primary mb-4 mt-12">2. Benefits</h3>
        <p className="mb-6">
          Holders of the Blue Card enjoy equal treatment with nationals as regards working conditions, education, recognition of diplomas, and social security.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl my-12 border-l-4 border-primary">
          <p className="italic font-medium">"The Blue Card was my ticket to a new life in Europe. The process was surprisingly straightforward with the right guidance."</p>
        </div>

        <h3 className="font-display text-2xl text-primary mb-4 mt-12">3. How to Apply</h3>
        <p className="mb-6">
          You can apply at the consulate in your home country or, if you are already legally in the EU, at the local immigration office. Processing times can vary from a few weeks to three months.
        </p>
      </div>

      <div className="mt-24 pt-12 border-t border-gray-100">
        <h3 className="font-bold text-xl mb-6">Share this article</h3>
        <div className="flex gap-4">
          <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-bold transition-colors">Twitter</button>
          <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-bold transition-colors">LinkedIn</button>
          <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-bold transition-colors">Email</button>
        </div>
      </div>
    </section>
  </div>
);

export default BlogPost;
