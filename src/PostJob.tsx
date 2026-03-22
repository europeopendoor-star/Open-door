import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import PageHeader from './components/PageHeader';
import { CheckCircle2, Building2, User, Mail, Briefcase, FileText, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const PostJob = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    roleTitle: '',
    jobDescription: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
     setFormData(prev => ({
       ...prev,
       [name]: value
     }));
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

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
      setStep(1);
    }, 1000);
  };

  // Validation to enable/disable next button
  const canGoNext = () => {
    if (step === 1) return formData.companyName.trim() !== '' && formData.contactName.trim() !== '' && formData.workEmail.trim() !== '';
    if (step === 2) return formData.roleTitle.trim() !== '' && formData.jobDescription.trim() !== '';
    return true;
  };

  return (
    <>
      <Helmet>
        <title>Post a Job - OpenDoor Europe</title>
        <meta name="description" content="Post a job on OpenDoor to find top international talent ready to relocate." />
      </Helmet>
      <div className="min-h-screen bg-gray-50/50">
      <PageHeader
        title="Post a Job"
        subtitle="Find your next global hire today"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900">Let's find your perfect match</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tell us about your company and the role you're looking to fill. Our experts will get back to you within 24 hours.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-16 rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10">
              <div className="w-24 h-24 bg-accent-lime/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-display text-gray-900 mb-4">Submission Received!</h3>
              <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto">
                Thank you for your interest in hiring with OpenDoor. Our recruitment team is reviewing your requirements and will contact you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-primary text-white font-bold px-10 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Post another position
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-50 border-b border-gray-100 p-8 flex justify-between relative">
              <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
              <div
                className="absolute top-1/2 left-10 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-500 ease-in-out"
                style={{ width: `calc(${((step - 1) / 2) * 100}% - 2.5rem)` }}
              ></div>

              {[
                { num: 1, title: "Company Details" },
                { num: 2, title: "Role Requirements" },
                { num: 3, title: "Review & Submit" }
              ].map((s) => (
                <div key={s.num} className="relative z-10 flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    step >= s.num
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-primary/10'
                      : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}>
                    {step > s.num ? <CheckCircle2 className="w-6 h-6" /> : s.num}
                  </div>
                  <span className={`text-xs uppercase tracking-wider font-bold hidden sm:block ${step >= s.num ? 'text-primary' : 'text-gray-400'}`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h3 className="font-display text-2xl text-gray-900 mb-8 border-b pb-4">About your company</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary" /> Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                          placeholder="e.g. Acme Corp"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" /> Contact Name
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                          placeholder="e.g. Jane Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" /> Work Email
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                        placeholder="jane@acmecorp.com"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                     <h3 className="font-display text-2xl text-gray-900 mb-8 border-b pb-4">Role information</h3>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" /> Role Title
                      </label>
                      <input
                        type="text"
                        name="roleTitle"
                        value={formData.roleTitle}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                        placeholder="e.g. Senior Frontend Developer"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" /> Job Description / Requirements
                      </label>
                      <textarea
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                        placeholder="Briefly describe the role, key responsibilities, and technical requirements..."
                      ></textarea>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                     <h3 className="font-display text-2xl text-gray-900 mb-8 border-b pb-4">Review your details</h3>

                     <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Company</p>
                            <p className="font-medium text-gray-900">{formData.companyName}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Contact</p>
                            <p className="font-medium text-gray-900">{formData.contactName}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Email</p>
                            <p className="font-medium text-gray-900">{formData.workEmail}</p>
                          </div>
                        </div>
                     </div>

                     <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                        <p className="text-xs uppercase tracking-wider font-bold text-primary mb-2">Role Title</p>
                        <p className="font-bold text-xl text-gray-900 mb-4">{formData.roleTitle}</p>

                        <p className="text-xs uppercase tracking-wider font-bold text-primary mb-2">Description</p>
                        <p className="text-gray-700 whitespace-pre-wrap text-sm">{formData.jobDescription}</p>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <div></div> // Spacer
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canGoNext()}
                    className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Next Step <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-accent-lime text-primary px-10 py-3 rounded-full font-bold hover:bg-[#a5e84f] transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Submit Position <CheckCircle2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
    </>
  );
};

export default PostJob;