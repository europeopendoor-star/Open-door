with open("src/Pricing.tsx", "r") as f:
    content = f.read()

import_lines = [
    "import { useState } from 'react';",
    "import PageHeader from './components/PageHeader';",
    "import { CheckCircle2, Building, Star, HelpCircle } from 'lucide-react';",
    "import { Link } from 'react-router-dom';",
    "import { motion, AnimatePresence } from 'framer-motion';"
]

# extract only the component code
import re
pattern = re.compile(r'const Pricing = \(\) => \{(.*?)export default Pricing;', re.DOTALL)
match = pattern.search(content)

if match:
    component_code = "const Pricing = () => {" + match.group(1) + "export default Pricing;\n"
    new_content = "\n".join(import_lines) + "\n\n" + component_code
    with open("src/Pricing.tsx", "w") as f:
        f.write(new_content)
