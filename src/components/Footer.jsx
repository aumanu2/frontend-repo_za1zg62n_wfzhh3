import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Github/></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Linkedin/></a>
          <a href="mailto:developer@example.com" className="hover:text-slate-900"><Mail/></a>
        </div>
      </div>
    </footer>
  );
}
