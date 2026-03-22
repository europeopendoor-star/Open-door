with open("src/BlogPost.tsx", "r") as f:
    content = f.read()

# Remove useSEO import
content = content.replace("import { useSEO } from './hooks/useSEO';", "")

# Replace the useSEO call
use_seo_call = """  useSEO({
    title: post ? `${post.title} | OpenDoor Blog` : "Blog Post Not Found | OpenDoor",
    description: post ? post.metaDescription : "The requested blog post could not be found."
  });"""
content = content.replace(use_seo_call, "")

# Find return ( and inject Helmet
return_idx = content.find("return (")
if return_idx != -1:
    # Let's insert Helmet right after return (
    # We'll use a fragment to wrap it

    # We know the return structure is:
    # return (
    #   <div className="min-h-screen bg-white">

    helmet_str = """return (
    <>
      <Helmet>
        <title>{post.title} | OpenDoor Blog</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>"""

    content = content.replace("return (", helmet_str, 1)

    # Find last `  );` to add `</>`
    last_paren_idx = content.rfind("  );")
    if last_paren_idx != -1:
        content = content[:last_paren_idx] + "    </>\n" + content[last_paren_idx:]

with open("src/BlogPost.tsx", "w") as f:
    f.write(content)
