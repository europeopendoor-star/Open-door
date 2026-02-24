import PageHeader from './components/PageHeader';

const PostJob = () => (
  <div className="min-h-screen bg-white">
    <PageHeader
      title="Post a Job"
      subtitle="Find your next global hire today"
      bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl mb-6">Start Hiring</h2>
        <p className="text-gray-600 text-lg">
          Fill out the details below and our team will get back to you within 24 hours to discuss your hiring needs.
        </p>
      </div>

      <form className="space-y-8 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Company Name</label>
            <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Acme Corp" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Contact Name</label>
            <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. John Doe" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Work Email</label>
          <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@acme.com" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Role Title</label>
          <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Senior React Developer" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Job Description / Requirements</label>
          <textarea className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 h-40 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Briefly describe the role and key requirements..."></textarea>
        </div>

        <button className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
          Submit Position
        </button>
        <p className="text-xs text-center text-gray-400 mt-4">By submitting, you agree to our Terms of Service. No payment required at this stage.</p>
      </form>
    </section>
  </div>
);

export default PostJob;
