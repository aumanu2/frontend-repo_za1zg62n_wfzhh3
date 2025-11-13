import { Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
        <p className="mt-2 text-slate-600">Have a project in mind? Let’s talk.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="you@example.com"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell me about your project"/>
              </div>
              <button className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 transition-colors">Send Message</button>
              {submitted && <p className="text-sm text-green-600">Thanks! Your message has been noted.</p>}
            </div>
          </form>
          <div className="space-y-4">
            <a className="flex items-center gap-3 group" href="mailto:developer@example.com">
              <span className="rounded-md p-2 bg-blue-50 text-blue-600"><Mail/></span>
              <span className="group-hover:underline">developer@example.com</span>
            </a>
            <a className="flex items-center gap-3 group" href="https://github.com/" target="_blank" rel="noreferrer">
              <span className="rounded-md p-2 bg-slate-100 text-slate-700"><Github/></span>
              <span className="group-hover:underline">github.com/your-handle</span>
            </a>
            <a className="flex items-center gap-3 group" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <span className="rounded-md p-2 bg-slate-100 text-slate-700"><Linkedin/></span>
              <span className="group-hover:underline">linkedin.com/in/your-handle</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
