'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-zinc-950 text-white overflow-hidden px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl"
      >
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">Next-Gen Urban Mobility</span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-2 mb-6">
          BLINQ-CLASS MICRO-EV
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Zero emissions. High efficiency. Engineered for modern urban micro-fleet logistics.
        </p>
        
        <div className="flex justify-center gap-4">
          <a href="#booking" className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full transition-all">
            Book a Demo Drive
          </a>
          <a href="#specs" className="border border-zinc-700 hover:border-zinc-500 px-8 py-3 rounded-full transition-all">
            Explore Specs
          </a>
        </div>
      </motion.div>

      {/* Tech Stat Bar Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-12 grid grid-cols-3 gap-8 md:gap-16 border-t border-zinc-800 pt-6 text-center"
      >
        <div>
          <p className="text-3xl font-bold text-white">45 <span className="text-emerald-400 text-sm">mph</span></p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Top Speed</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">80 <span className="text-emerald-400 text-sm">miles</span></p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Max Range</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">2.5 <span className="text-emerald-400 text-sm">hrs</span></p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Fast Charge</p>
        </div>
      </motion.div>
    </section>
  );
}