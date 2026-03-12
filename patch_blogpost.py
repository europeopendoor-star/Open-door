with open("src/BlogPost.tsx", "r") as f:
    content = f.read()

# Fix the extra `</div>` that was injected
content = content.replace('            </div>\n\n            </div>\n\n            <div className="mt-16 pt-12 border-t border-gray-100">', '            </div>\n\n            <div className="mt-16 pt-12 border-t border-gray-100">')

with open("src/BlogPost.tsx", "w") as f:
    f.write(content)
