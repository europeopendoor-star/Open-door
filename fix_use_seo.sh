#!/bin/bash
for file in src/App.tsx src/Blog.tsx src/Contact.tsx src/PostJob.tsx src/Pricing.tsx src/SuccessStories.tsx src/TalentSolutions.tsx src/VisaGuide.tsx src/pages/AboutUs.tsx src/pages/Relocation.tsx; do
  sed -i "/import { useSEO }/d" "$file"
  # Now remove the block of useSEO(...)
  # Since it could be multiline, we'll use awk or python
done
