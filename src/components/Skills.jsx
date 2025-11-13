import { Code2, Database, Layers, Layout, Braces, Boxes } from 'lucide-react';

const skills = [
  { name: 'HTML', level: 95, icon: Layout },
  { name: 'CSS', level: 92, icon: Layers },
  { name: 'Python', level: 90, icon: Code2 },
  { name: 'Django', level: 88, icon: Braces },
  { name: 'MySQL', level: 85, icon: Database },
  { name: 'JavaScript', level: 80, icon: Boxes },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-slate-900">Skills</h2>
        <p className="mt-2 text-slate-600">A snapshot of my core technologies</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <s.icon className="h-6 w-6 text-blue-600"/>
                  <span className="font-semibold text-slate-800">{s.name}</span>
                </div>
                <span className="text-sm text-slate-500">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" style={{ width: `${s.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
