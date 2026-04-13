export const metadata = {
  title: 'Portfolio - Uses',
  description: 'Tools and technologies I use in my development workflow.',
}

const categories = [
  {
    title: 'Development',
    items: [
      { name: 'Visual Studio Code', description: 'My primary code editor with extensive customization' },
      { name: 'Next.js', description: 'React framework for production web applications' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
      { name: 'TypeScript', description: 'Typed superset of JavaScript for better development experience' },
    ],
  },
  {
    title: 'Design',
    items: [
      { name: 'Figma', description: 'Collaborative interface design tool' },
      { name: 'Adobe Creative Suite', description: 'Professional design and photo editing software' },
      { name: 'Sketch', description: 'Digital design toolkit for UI/UX designers' },
    ],
  },
  {
    title: 'Productivity',
    items: [
      { name: 'Notion', description: 'All-in-one workspace for notes, docs, and project management' },
      { name: 'Raycast', description: 'Blazingly fast, totally extendable launcher' },
      { name: 'GitHub', description: 'Version control and collaboration platform' },
    ],
  },
  {
    title: 'Hardware',
    items: [
      { name: 'MacBook Pro 16"', description: 'Primary development machine' },
      { name: 'Dell UltraSharp Monitor', description: '27" 4K display for extended workspace' },
      { name: 'Mechanical Keyboard', description: 'Custom-built with Cherry MX switches' },
      { name: 'Logitech MX Master 3', description: 'Wireless mouse for productivity' },
    ],
  },
];

export default function Uses() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Uses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              A list of tools, software, and hardware I use on a daily basis.
            </p>

            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
