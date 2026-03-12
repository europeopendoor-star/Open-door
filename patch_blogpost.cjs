const fs = require('fs');

const path = 'src/BlogPost.tsx';
let content = fs.readFileSync(path, 'utf8');

// The original component had hardcoded text inside:
// <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
// ...
// </div>

// We want to replace everything inside:
// <div className="prose prose-lg text-gray-600 max-w-none"> ... </div>
// except the lead text and maybe the h2 "Article Overview" (we can keep that or remove it).
// Actually, it's easier to just replace the whole `<div className="prose ...">` block.

const replaceRegex = /<div className="prose prose-lg text-gray-600 max-w-none">[\s\S]*?<\/div>\n\n            <div className="mt-16 pt-12 border-t border-gray-100">/;

const newProse = `
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="lead text-xl mb-8 font-medium text-gray-800">
                {post.metaDescription}
              </p>
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>Content for this article is currently being updated. Please check back later for the full guide.</p>
                </div>
              )}
            </div>

            <div className="mt-16 pt-12 border-t border-gray-100">`;

if (content.match(replaceRegex)) {
  content = content.replace(replaceRegex, newProse);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated BlogPost.tsx to render dynamic HTML content.');
} else {
  console.log('Regex did not match in BlogPost.tsx');
}
