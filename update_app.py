import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

old_button = r'''                    <button className="w-full sm:w-auto border-2 border-primary text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                      Apply
                    </button>'''

new_button = r'''                    <a
                      href={`https://wa.me/4915210755401?text=Hi,%20I'm%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.title)}%20position.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto border-2 border-primary text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-colors text-center inline-block">
                      Apply
                    </a>'''

new_content = content.replace(old_button, new_button)

with open('src/App.tsx', 'w') as f:
    f.write(new_content)

print("Updated Apply button" if old_button in content else "Apply button not found")
