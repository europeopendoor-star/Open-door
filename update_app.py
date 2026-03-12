import re

with open("src/App.tsx", "r") as f:
    content = f.read()

# Replace <a className="hidden sm:block hover:text-white/70 transition-colors" href="#">EN</a>
content = content.replace('href="#">EN</a>', 'href="#en" onClick={(e) => e.preventDefault()}>EN</a>')
content = content.replace('href="#">SEARCH</a>', 'href="#search" onClick={(e) => e.preventDefault()}>SEARCH</a>')
content = content.replace('href="#">LOG IN</a>', 'href="#login" onClick={(e) => e.preventDefault()}>LOG IN</a>')

# Footer links
content = content.replace('href="#">Privacy Policy</a>', 'href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>')
content = content.replace('href="#">Terms of Service</a>', 'href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>')

# Social links in Footer
content = content.replace('<a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">\n              <Globe className="w-4 h-4" />\n            </a>',
                          '<a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="/" aria-label="Website">\n              <Globe className="w-4 h-4" />\n            </a>')
content = content.replace('<a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">\n              <Mail className="w-4 h-4" />\n            </a>',
                          '<a className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" href="mailto:europeopendoor@gmail.com" aria-label="Email">\n              <Mail className="w-4 h-4" />\n            </a>')

with open("src/App.tsx", "w") as f:
    f.write(content)

