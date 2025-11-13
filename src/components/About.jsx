export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m a full‑stack developer focused on building complete, dynamic web applications. On the frontend, I craft clean, accessible interfaces with HTML and CSS; on the backend, I architect scalable systems using Python Django, integrating databases like MySQL to deliver robust features end‑to‑end.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I care about performance, maintainability, and a delightful user experience. I’m comfortable taking a project from idea to deployment, collaborating closely with teams, and shipping quickly with quality.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
            <ul className="space-y-3 text-slate-800">
              <li><span className="font-semibold">Frontend:</span> HTML5, CSS3, responsive UI, accessibility, animations</li>
              <li><span className="font-semibold">Backend:</span> Python, Django, REST APIs, authentication, background tasks</li>
              <li><span className="font-semibold">Database:</span> MySQL, PostgreSQL, ORM, schema design, optimization</li>
              <li><span className="font-semibold">DevOps:</span> Git, CI/CD, Docker, cloud deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
