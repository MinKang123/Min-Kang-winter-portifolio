export const metadata = {
  title: "Portfolio - Min",
  description: "Portfolio of Min - Developer & Designer",
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="section min-h-screen flex items-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6">
              Hello, I&apos;m <span className="font-medium text-gray-600 dark:text-gray-300">Min</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A passionate developer creating beautiful and functional digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">About Me</h2>

            <div className="max-w-3xl">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                Hello, I&apos;m a student developer at Ensign College passionate about crafting intuitive user
                experiences. Currently pursuing my studies in software development, I am deeply interested in the
                process of transforming complex data into clear, visual insights.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                My recent focus has been on building responsive web applications using Next.js and Tailwind CSS. I am
                also working on a Student Performance Analytics Dashboard, where I integrate Canvas API data with Excel
                tools to provide meaningful academic metrics. Beyond writing code, I value creating efficient solutions
                that solve real-world problems.
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">Skills & Technologies</h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "JavaScript/TypeScript",
                  "React/Next.js",
                  "Node.js",
                  "Python",
                  "HTML/CSS",
                  "Tailwind CSS",
                  "PostgreSQL",
                  "AWS",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center text-gray-900 dark:text-white mb-12">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white dark:text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating responsive and interactive user interfaces with modern technologies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white dark:text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing intuitive and beautiful user experiences that delight users.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white dark:text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building fast, scalable applications with optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              A selection of projects I&apos;ve worked on. Click on the Code or Demo buttons to view the full
              implementation.
            </p>

            <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {[
                {
                  title: "React UI Components & Testing",
                  description:
                    "Developed reusable UI components like Navbar and Button in Next.js, then validated UI behavior with Vitest and React Testing Library for production readiness.",
                  tech: "Next.js, React, Vitest, Tailwind CSS",
                  status: "Completed",
                  github: "https://github.com/MinKang123/cs220-cc-10",
                  demo: "https://cs-220-portfolio-v3.vercel.app",
                },
                {
                  title: "Modern Responsive Portfolio",
                  description:
                    "Built this professional portfolio website with dark mode, responsive layouts, and smooth navigation. Fully deployed on Vercel for global availability and fast performance.",
                  tech: "Next.js, Tailwind CSS, Vercel",
                  status: "Completed",
                  github: "https://github.com/Ensign-College/cs-220-portfolio-v3-MinKang123",
                  demo: "https://cs-220-portfolio-v3.vercel.app",
                },
                {
                  title: "Academic Analytics Dashboard",
                  description:
                    "Designed a performance dashboard for academic metrics, including data modeling and API-driven visualizations. This work demonstrates analytics strategy and UX for data-heavy applications.",
                  tech: "Power Query, API Integration, Data Visualization",
                  status: "In Progress",
                  github: "#",
                  demo: "#",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{project.title}</h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : project.status === "Current Project"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                          />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-md transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Demo
                      </a>
                    )}
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
