import "./style.css";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = /*html*/ `
<div class="min-h-screen bg-[#1b1b1f] text-slate-200 font-sans flex flex-col items-center justify-center p-6 selection:bg-purple-500 selection:text-white">
  
  <!-- HERO SECTION -->
  <section class="max-w-xl w-full flex flex-col items-center text-center pt-8 pb-10">
    
    <!-- Logo Container -->
    <div class="relative flex items-center justify-center mb-6">
      <img src="${heroImg}" class="w-40 h-auto opacity-90 drop-shadow-2xl" alt="Hero background" />
      <a href="https://vite.dev" target="_blank" class="absolute -left-6 top-1/2 -translate-y-1/2 hover:scale-110 transition duration-300">
        <img src="${viteLogo}" class="w-16 h-16 drop-shadow-[0_0_25px_rgba(100,108,255,0.6)]" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="absolute -right-6 top-1/2 -translate-y-1/2 hover:scale-110 transition duration-300">
        <img src="${javascriptLogo}" class="w-14 h-14 drop-shadow-[0_0_25px_rgba(247,223,30,0.5)]" alt="JavaScript logo" />
      </a>
    </div>

    <!-- Title & Description -->
    <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
      Get started
    </h1>
    <p class="text-slate-400 text-sm sm:text-base mb-6">
      Edit <code class="bg-[#242429] border border-slate-700/60 px-2 py-0.5 rounded text-purple-400 font-mono text-xs">src/main.js</code> and save to test <code class="bg-[#242429] border border-slate-700/60 px-2 py-0.5 rounded text-amber-400 font-mono text-xs">HMR</code>
    </p>

    <!-- Counter Button -->
    <button 
      id="counter" 
      type="button" 
      class="cursor-pointer bg-[#242429] hover:bg-[#2e2e34] active:scale-95 border border-slate-700 hover:border-purple-500 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg transition duration-200"
    ></button>
  </section>

  <!-- DIVIDER -->
  <div class="w-full max-w-2xl border-t border-slate-800/80 my-4"></div>

  <!-- NEXT STEPS SECTION -->
  <section class="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
    
    <!-- Documentation Card -->
    <div class="bg-[#242429]/70 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl flex flex-col justify-between transition">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          <h2 class="text-lg font-bold text-white">Documentation</h2>
        </div>
        <p class="text-xs text-slate-400 mb-5">Your questions, answered</p>
      </div>

      <ul class="flex flex-col gap-2.5 text-sm font-medium">
        <li>
          <a href="https://vite.dev/" target="_blank" class="flex items-center gap-2.5 bg-[#1b1b1f] hover:bg-slate-800 border border-slate-800 px-3.5 py-2 rounded-lg transition text-slate-300 hover:text-white">
            <img class="w-4 h-4" src="${viteLogo}" alt="Vite" />
            <span>Explore Vite</span>
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="flex items-center gap-2.5 bg-[#1b1b1f] hover:bg-slate-800 border border-slate-800 px-3.5 py-2 rounded-lg transition text-slate-300 hover:text-white">
            <img class="w-4 h-4" src="${javascriptLogo}" alt="JS" />
            <span>Learn JavaScript</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Social Card -->
    <div class="bg-[#242429]/70 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl flex flex-col justify-between transition">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <h2 class="text-lg font-bold text-white">Connect with us</h2>
        </div>
        <p class="text-xs text-slate-400 mb-5">Join the Vite community</p>
      </div>

      <ul class="grid grid-cols-2 gap-2 text-xs font-medium">
        <li>
          <a href="https://github.com/vitejs/vite" target="_blank" class="flex items-center justify-center gap-2 bg-[#1b1b1f] hover:bg-slate-800 border border-slate-800 py-2 px-3 rounded-lg transition text-slate-300 hover:text-white">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://chat.vite.dev/" target="_blank" class="flex items-center justify-center gap-2 bg-[#1b1b1f] hover:bg-slate-800 border border-slate-800 py-2 px-3 rounded-lg transition text-slate-300 hover:text-white">
            Discord
          </a>
        </li>
        <li>
          <a href="https://x.com/vite_js" target="_blank" class="flex items-center justify-center gap-2 bg-[#1b1b1f] hover:bg-slate-800 border border-slate-800 py-2 px-3 rounded-lg transition text-slate-300 hover:text-white">
            X.com
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/vite.dev" target="_blank" class="flex items-center justify-center gap-2 bg-[#1b1b1f] hover:bg-slate-800 border border-slate-800 py-2 px-3 rounded-lg transition text-slate-300 hover:text-white">
            Bluesky
          </a>
        </li>
      </ul>
    </div>
  </section>

</div>
`;

setupCounter(document.querySelector("#counter"));
