import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-semibold tracking-tight text-slate-800">
            <span className="text-blue-600">Dev</span>Portfolio
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors">Hire Me</a>
          </nav>
          <button aria-label="Toggle Menu" className="md:hidden p-2" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors text-center">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  );
}
