export const metadata = {
  title: 'Portfolio - Projects',
  description: 'Explore my recent projects and work.',
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website built with Next.js and Tailwind CSS, featuring dark mode and responsive design.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              A selection of projects I&apos;ve worked on recently.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
