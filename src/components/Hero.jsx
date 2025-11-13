import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Hi, I’m <span className="text-blue-600">Alex Carter</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Full-Stack Web Developer crafting modern, performant web apps with HTML, CSS and Python Django.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 transition-colors">View Projects</a>
            <a href="#contact" className="rounded-md border border-slate-300 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-5 py-3 transition-colors bg-white/70 backdrop-blur">Hire Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white"></div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 hover:text-blue-600 transition-colors">
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
