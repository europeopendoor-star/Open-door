import React, { useState } from 'react';
import PageHeader from './components/PageHeader';
import { CheckCircle2 } from 'lucide-react';

const PostJob = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    roleTitle: '',
    jobDescription: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { placeholder, value } = e.target;
    // Using placeholder as key is risky if placeholders change, let's use name attribute
    // But the previous code didn't have name attributes. I added them in the previous thought process but didn't write them.
    // I will add name attributes.
    // The previous code didn't have name attributes. I will add them now.
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
     setFormData(prev => ({
       ...prev,
       [name]: value
     }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        companyName: '',
        contactName: '',
        workEmail: '',
        roleTitle: '',
        jobDescription: ''
      });
    }, 1000);
  };

  return (
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

        {isSubmitted ? (
          <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-lg text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Submission Received!</h3>
            <p className="text-gray-600 mb-8">
              Thank you for your interest. Our recruitment team will review your requirements and contact you at the email provided.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-primary font-bold hover:underline"
            >
              Post another position
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g. Acme Corp"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g. John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Work Email</label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleInputChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="john@acme.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Role Title</label>
              <input
                type="text"
                name="roleTitle"
                value={formData.roleTitle}
                onChange={handleInputChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="e.g. Senior React Developer"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Job Description / Requirements</label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                required
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 h-40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Briefly describe the role and key requirements..."
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
              Submit Position
            </button>
            <p className="text-xs text-center text-gray-400 mt-4">By submitting, you agree to our Terms of Service. No payment required at this stage.</p>
          </form>
        )}
      </section>
    </div>
  );
};

export default PostJob;
