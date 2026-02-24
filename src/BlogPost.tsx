import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import { blogPosts } from './data/blogPosts';
import { ArrowLeft, Clock, Globe, BarChart2, BookOpen } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Logic for Related Articles
  // Prioritize same country, then recent posts. Exclude current post.
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => {
        // Simple scoring: 2 points for same country
        let scoreA = 0;
        let scoreB = 0;
        if (a.country === post.country) scoreA += 2;
        if (b.country === post.country) scoreB += 2;
        return scoreB - scoreA;
    })
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title={post.title}
        subtitle={`${post.country} • ${post.publishedDate}`}
        bgImage={post.image}
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase tracking-wider text-xs mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3">
            <div className="prose prose-lg text-gray-600 max-w-none">

              {/* Render Dynamic Content */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

            </div>

            <div className="mt-16 pt-12 border-t border-gray-100">
              <h3 className="font-bold text-xl mb-6">Recommended Resources</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {post.suggestedInternalLinks.map((link, i) => (
                  <Link key={i} to={link} className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                    <span className="text-primary font-bold text-sm block mb-1">Internal Resource</span>
                    <span className="text-gray-900 font-medium">Read more about this topic</span>
                  </Link>
                ))}
                {post.suggestedExternalLinks.map((link, i) => (
                  <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                    <span className="text-gray-500 font-bold text-sm block mb-1">External Link</span>
                    <span className="text-gray-900 font-medium truncate">Visit Authority Site</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-6">Quick Stats</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Read Time</p>
                    <p className="font-bold text-gray-900">{post.readTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm text-primary">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Target Region</p>
                    <p className="font-bold text-gray-900">{post.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm text-primary">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Est. Monthly Interest</p>
                    <p className="font-bold text-gray-900">{post.estimatedTraffic}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles Section (Replaces Related Keywords) */}
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <h3 className="font-bold text-xl mb-6">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="group flex gap-4 items-start">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-400 group-hover:text-primary group-hover:bg-blue-50 transition-colors">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{relatedPost.country}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
