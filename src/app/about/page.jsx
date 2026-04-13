export const metadata = {
  title: "Portfolio - About",
  description: "Learn more about me and my background.",
};

export default function About() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-8">About Me</h1>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  Passionate Developer & Designer
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I&apos;m a full-stack developer with a passion for creating beautiful, functional, and user-centered
                  digital experiences. With several years of experience in web development, I specialize in modern
                  JavaScript frameworks and clean, efficient code.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or enjoying the outdoors. I believe in continuous learning and staying up-to-date with the
                  latest trends in technology.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">5+ years in web development</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Interests</h3>
                  <p className="text-gray-600 dark:text-gray-300">UI/UX Design, Open Source, Photography</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">Skills & Technologies</h2>

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
                  <div key={skill} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                    <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
