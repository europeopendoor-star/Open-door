#!/bin/bash
for file in src/App.tsx src/Home.tsx src/FindJobs.tsx src/Employers.tsx src/Relocation.tsx src/AboutUs.tsx src/VisaGuide.tsx src/SuccessStories.tsx src/PostJob.tsx src/TalentSolutions.tsx src/Pricing.tsx src/Blog.tsx src/BlogPost.tsx src/Contact.tsx; do
  if [ -f "$file" ]; then
    echo "Processing $file"
    if ! grep -q "import { Helmet } from 'react-helmet-async';" "$file"; then
      # Need to place it after imports
      sed -i "1i import { Helmet } from 'react-helmet-async';" "$file"
    fi
  fi
done
