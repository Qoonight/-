import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './components/Experience';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.CHAOS);

  const toggleState = () => {
    setAppState(prev => prev === AppState.CHAOS ? AppState.FORMED : AppState.CHAOS);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-luxury-green to-black overflow-hidden">
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 25], fov: 45 }}
          gl={{ antialias: false, toneMappingExposure: 1.2 }}
          dpr={[1, 2]} // Optimize for pixel ratio
        >
          <Suspense fallback={null}>
            <Experience appState={appState} />
          </Suspense>
        </Canvas>
      </div>
      
      <Loader 
        containerStyles={{ background: '#001a0f' }} 
        innerStyles={{ width: '400px', height: '20px', background: '#333' }}
        barStyles={{ background: '#D4AF37', height: '20px' }}
        dataStyles={{ color: '#D4AF37', fontFamily: 'serif', fontSize: '1.2rem' }}
      />

      {/* Luxury Overlay UI */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12">
        
        {/* Header */}
        <header className="flex flex-col items-center text-center animate-fade-in-down">
          <div className="border-b-2 border-luxury-gold pb-4 mb-2">
            <h1 className="text-4xl md:text-6xl font-serif text-luxury-gold drop-shadow-lg tracking-widest uppercase">
              The Grand Illumination
            </h1>
          </div>
          <p className="text-luxury-silver font-sans tracking-[0.2em] text-sm md:text-base uppercase opacity-80">
            A Presidential Christmas Experience
          </p>
        </header>

        {/* Footer Controls */}
        <footer className="flex flex-col items-center gap-6 pointer-events-auto pb-10">
          
          <div className="flex items-center gap-4">
             <div className="h-[1px] w-12 bg-luxury-gold opacity-50"></div>
             <span className="text-luxury-gold font-serif italic">Est. 2024</span>
             <div className="h-[1px] w-12 bg-luxury-gold opacity-50"></div>
          </div>

          <button
            onClick={toggleState}
            className={`
              relative overflow-hidden group
              bg-luxury-green/80 backdrop-blur-md
              border-2 border-luxury-gold
              text-luxury-gold font-serif text-xl tracking-widest uppercase
              px-12 py-4
              transition-all duration-500 ease-out
              hover:bg-luxury-gold hover:text-luxury-green hover:scale-105
              shadow-[0_0_20px_rgba(212,175,55,0.3)]
              hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]
            `}
          >
            <span className="relative z-10">
              {appState === AppState.CHAOS ? 'Assemble Greatness' : 'Release Chaos'}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

        </footer>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-luxury-gold opacity-50 pointer-events-none"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-luxury-gold opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-luxury-gold opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-luxury-gold opacity-50 pointer-events-none"></div>

    </div>
  );
}

export default App;