const projects = [
  {
    title: 'E‑Commerce Platform',
    description: 'Full‑stack Django app with custom checkout, admin dashboard, and responsive UI.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://github.com/',
    repo: 'https://github.com/'
  },
  {
    title: 'Portfolio CMS',
    description: 'Django + MySQL content manager with markdown, image uploads, and search.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://github.com/',
    repo: 'https://github.com/'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive charts, auth, and role‑based access built with Django + HTMX.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://github.com/',
    repo: 'https://github.com/'
  },
  {
    title: 'Booking System',
    description: 'Appointment booking with calendar integration, email notifications, and payments.',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://github.com/',
    repo: 'https://github.com/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
            <p className="mt-2 text-slate-600">Selected work I’m proud of</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 transition-colors">Start a Project</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">Live Demo</a>
                  <span className="text-slate-300">•</span>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
