const fs = require('fs');

const path = 'src/data/blogPosts.ts';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('content?: string;')) {
  content = content.replace(
    /estimatedTraffic: string;\n}/,
    'estimatedTraffic: string;\n  content?: string;\n}'
  );
  fs.writeFileSync(path, content, 'utf8');
  console.log('Added content? to BlogPost interface');
} else {
  console.log('content? already exists in BlogPost interface');
}
