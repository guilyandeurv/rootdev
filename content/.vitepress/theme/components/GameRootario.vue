<script setup>
import { ref } from 'vue'

const gameConfig = {
  'Interface': { color: '#ec4899', icon: '🎨', gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)' },
  'Système':   { color: '#10b981', icon: '📟', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
  'Sécurité':  { color: '#6366f1', icon: '🔐', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
  'Hardware':  { color: '#f59e0b', icon: '🔌', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
}

const features = [
  {
    title: "OS Moderne & Glassmorphism",
    category: "Interface",
    desc: "Fenêtres draggables, flou gaussien temps réel et dock réactif pour une immersion totale dans votre environnement de travail clandestin.",
    tags: ["React 18", "Framer Motion"],
    impact: "Immersion High-End"
  },
  {
    title: "Gestion CPU",
    category: "Hardware",
    desc: "Surveillez votre CPU Heat. Une surchauffe provoque du throttling et augmente drastiquement votre bruit numérique.",
    tags: ["Throttling", "Cooling"],
    impact: "Contrainte en jeu"
  },
  {
    title: "Système de Traque",
    category: "Sécurité",
    desc: "Chaque commande laisse une IP loguée. À 100%, subissez un raid du FBI avec perte de réputation et saisie du matériel. Optez pour une approche silencieuse !",
    tags: ["Log Wipers", "Stealth"],
    impact: "Haute Tension"
  },
  {
    title: "Missions boss & lore",
    category: "Système",
    desc: "Infiltrez Arasaka Corp ou le NSA Mainframe. Des scénarios écrits avec des mécaniques de hack uniques par cible.",
    tags: ["Story-driven", "Boss"],
    impact: "End-game Content"
  }
]

const techStack = [
  { name: 'React 18', category: 'Engine', icon: '⚛️', color: '#61dafb' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', color: '#06b6d4' },
  { name: 'Framer Motion', category: 'Animation', icon: '✨', color: '#ec4899' },
  { name: 'Vite', category: 'Build Tool', icon: '⚡', color: '#646cff' },
  { name: 'Node.js', category: 'Runtime', icon: '🟢', color: '#10b981' },
  { name: 'TypeScript', category: 'Language', icon: '📘', color: '#3178c6' }
]
</script>

<template>
  <div class="modern-game-page">
    <div class="ambient-bg">
      <div class="glow-sphere sphere-1"></div>
      <div class="glow-sphere sphere-2"></div>
      <div class="grid-texture"></div>
    </div>

    <div class="container">
      <section class="hero">
        <div class="badge-new animate-pulse">v0.7.0 : alpha version</div>
        <h1 class="main-title">rootar.io</h1>
        <p class="hero-desc">
          L'expérience ultime de simulation de hacking clandestin.<br>
          <span class="text-gradient">Infiltrez. Gérez. Dominez.</span>
        </p>
        
        <div class="hero-actions">
          <a href="https://io.rootdev.fr" target="_blank" class="primary-btn">INITIALISER LA CONNEXION</a>
          <div class="cheat-hint">Admin Reset Protocol: <code>0000</code></div>
        </div>
      </section>

      <section class="github-section">
        <div class="github-card">
          <div class="github-glow"></div>
          <div class="github-content">
            <svg class="git-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <div class="github-text">
              <h3>Rejoignez la résistance</h3>
              <p>Projet Open-Source. Pull requests bienvenues pour améliorer et/ou corriger le jeu.</p>
            </div>
            <a href="https://github.com/guilyandeurv/io.rootdev" target="_blank" class="github-btn">GitHub</a>
          </div>
        </div>
      </section>

      <section class="game-preview-bento">
        <div class="bento-main">
          <div class="image-slot hover-zoom">
            <img src="/game/preview-main.png" alt="Interface io.rootdev.fr">
            <div class="overlay-info">OS</div>
          </div>
        </div>
        <div class="bento-side">
          <div class="image-slot hover-zoom">
            <img src="/game/preview-terminal.png" alt="Terminal">
            <div class="overlay-info">Terminal</div>
          </div>
          <div class="image-slot hover-zoom">
            <img src="/game/preview-shop.png" alt="Shop Hardware">
            <div class="overlay-info">Black Market</div>
          </div>
        </div>
      </section>
      <br><br><br><br>
      <section class="features-section">
        <div class="section-header">
          <h2 class="section-title">Fonctionnalités clés</h2>
          <p class="section-subtitle">Des mécaniques de gameplay innovantes pour une immersion maximale</p>
        </div>
        <div class="feature-grid">
          <div v-for="item in features" :key="item.title" class="feature-card" :style="{ '--accent': (gameConfig[item.category] || gameConfig['Système']).color }">
            <div class="card-header">
              <span class="icon-circle" :style="{ background: (gameConfig[item.category] || gameConfig['Système']).gradient }">
                {{ (gameConfig[item.category] || gameConfig['Système']).icon }}
              </span>
              <span class="impact-tag">{{ item.impact }}</span>
            </div>
            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
            <div class="card-footer">
              <div class="tags">
                <span v-for="tag in item.tags" :key="tag" class="tag">#{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="tech-stack">
        <div class="section-header">
          <h2 class="section-title">Stack Technique</h2>
          <p class="section-subtitle">Technologies de pointe pour des performances optimales</p>
        </div>
        
        <div class="tech-grid">
          <div v-for="tech in techStack" :key="tech.name" class="tech-card" :style="{ '--tech-color': tech.color }">
            <div class="tech-icon">{{ tech.icon }}</div>
            <div class="tech-info">
              <div class="tech-name">{{ tech.name }}</div>
              <div class="tech-category">{{ tech.category }}</div>
            </div>
            <div class="tech-glow"></div>
          </div>
        </div>

        <div class="tech-features">
          <div class="tech-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span>Performance optimale</span>
          </div>
          <div class="tech-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 0v20m10-10H2"/>
            </svg>
            <span>Architecture modulaire</span>
          </div>
          <div class="tech-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Code sécurisé</span>
          </div>
        </div>
      </section>

      <section class="deploy-section">
        <div class="section-header">
          <h2 class="section-title">Installation Rapide</h2>
          <p class="section-subtitle">Lancez votre environnement de hack en quelques commandes</p>
        </div>
        
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
            <div class="terminal-title">guest@rootdev: ~/deploy-guide</div>
          </div>
          <div class="terminal-body">
            <div class="command">
              <span class="prompt">$</span> git clone https://github.com/guilyandeurv/io.rootdev.git
            </div>
            <div class="response">Cloning into 'io.rootdev'... Done.</div>
            
            <div class="command">
              <span class="prompt">$</span> cd io.rootdev && npm install
            </div>
            <div class="response">added 142 packages, and audited 143 packages...</div>
            
            <div class="command">
              <span class="prompt">$</span> npm run dev
            </div>
            <div class="response highlight">➜ Local: http://localhost:5173/</div>
          </div>
        </div>
      </section>

      
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono&display=swap');

.modern-game-page {
  /* Variables pour thème sombre (par défaut) */
  --bg-color: #05070a;
  --card-bg: rgba(13, 17, 23, 0.8);
  --border-color: rgba(255, 255, 255, 0.05);
  --text-primary: #f0f6fc;
  --text-secondary: #8b949e;
  --emerald: #3e8538;
  --title-gradient-start: #fff;
  --title-gradient-end: #444444;
  --greenbtn: #65f043;
  
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-primary);
  padding: 100px 24px 80px;
  position: relative;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
}

/* Adaptation thème clair */
.dark .modern-game-page {
  --bg-color: #05070a;
  --card-bg: rgba(13, 17, 23, 0.8);
  --border-color: rgba(255, 255, 255, 0.05);
  --text-primary: #f0f6fc;
  --text-secondary: #8b949e;
  --title-gradient-start: #fff;
  --title-gradient-end: #444;
}

html:not(.dark) .modern-game-page {
  --bg-color: #ffffff;
  --card-bg: rgba(255, 255, 255, 0.8);
  --border-color: rgba(0, 0, 0, 0.08);
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --title-gradient-start: #1a1a1a;
  --title-gradient-end: #666666;
}

/* Background & Texture */
.ambient-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.grid-texture { 
  position: absolute; inset: 0; 
  background-image: radial-gradient(circle at 2px 2px, rgba(128, 128, 128, 0.03) 1px, transparent 0);
  background-size: 32px 32px;
}

html:not(.dark) .grid-texture {
  background-image: radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.04) 1px, transparent 0);
}

.glow-sphere { position: absolute; filter: blur(150px); border-radius: 50%; opacity: 0.1; }
.sphere-1 { top: -10%; left: 10%; width: 500px; height: 500px; background: #6366f1; }
.sphere-2 { bottom: 0%; right: 5%; width: 600px; height: 600px; background: var(--emerald); }

html:not(.dark) .glow-sphere {
  opacity: 0.05;
}

.container { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }

/* Section Spacing */
section { margin-bottom: 120px; }

/* Hero */
.hero { text-align: center; margin-bottom: 120px; }
.badge-new { 
  display: inline-block; 
  background: rgba(16, 185, 129, 0.26); 
  color: #a5da86; 
  padding: 8px 16px; 
  border-radius: 20px; 
  font-size: 0.75rem; 
  font-weight: 700; 
  border: 1px solid rgba(16, 185, 129, 0.3);
  margin-bottom: 20px;
}

html:not(.dark) .badge-new {
  background: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.4);
}

.main-title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 800;
  letter-spacing: -4px;
  line-height: 0.9;
  margin: 20px 0;
  background: linear-gradient(to bottom, var(--title-gradient-start) 40%, var(--title-gradient-end) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc { 
  font-size: 1.2rem; 
  color: var(--text-secondary); 
  line-height: 1.6; 
  margin-bottom: 40px; 
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.text-gradient { 
  background: linear-gradient(90deg, #10b981, #ff7300); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  font-weight: 700; 
}

.hero-actions { margin-top: 40px; }
.primary-btn {
  background: var(--emerald);
  color: #fff; 
  padding: 18px 40px; 
  border-radius: 8px;
  font-weight: 800; 
  text-decoration: none; 
  display: inline-block;
  letter-spacing: 1px; 
  transition: 0.3s;
  box-shadow: 0 0 20px rgba(6, 95, 36, 0.3);
}

html:not(.dark) .primary-btn {
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
}

.primary-btn:hover { 
  transform: scale(1.05); 
  box-shadow: 0 0 40px rgba(16, 185, 129, 0.5); 
}

.cheat-hint { 
  margin-top: 20px; 
  font-size: 0.85rem; 
  color: var(--text-secondary); 
}

.cheat-hint code { 
  background: rgba(16, 185, 129, 0.1); 
  padding: 4px 12px; 
  border-radius: 4px; 
  color: var(--greenbtn); 
  font-family: 'JetBrains Mono';
  border: 1px solid rgba(16, 185, 129, 0.2);
}

html:not(.dark) .cheat-hint code {
  background: rgba(16, 185, 129, 0.12);
  border-color: rgba(16, 185, 129, 0.25);
}

/* Section Headers */
.section-header { 
  text-align: center; 
  margin-bottom: 60px; 
}

.section-title { 
  font-size: 2.5rem; 
  font-weight: 800; 
  line-height: 1.3;
  margin-bottom: 12px;
  background: linear-gradient(to bottom, var(--title-gradient-start) 40%, var(--title-gradient-end) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle { 
  color: var(--text-secondary); 
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Bento Grid */
.game-preview-bento { 
  display: grid; 
  grid-template-columns: 1.5fr 1fr; 
  gap: 16px; 
  margin-bottom: 120px; 
  height: 500px; 
}

.bento-side { display: grid; grid-template-rows: 1fr 1fr; gap: 16px; }

.image-slot { 
  background: var(--card-bg); 
  border: 1px solid var(--border-color); 
  border-radius: 12px; 
  overflow: hidden; 
  position: relative; 
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

html:not(.dark) .image-slot {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.image-slot img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  transition: 0.5s;
  display: block;
}

.overlay-info { 
  position: absolute; 
  bottom: 0; 
  left: 0; 
  right: 0; 
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 70%, transparent 100%);
  font-size: 0.85rem; 
  font-weight: 600; 
  color: var(--emerald);
  z-index: 2;
}

.hover-zoom:hover img { transform: scale(1.1) rotate(1deg); }

/* Features Section */
.features-section { margin-bottom: 120px; }

.feature-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
  gap: 24px; 
}

.feature-card { 
  background: var(--card-bg); 
  border: 1px solid var(--border-color); 
  padding: 32px; 
  border-radius: 16px; 
  transition: 0.3s; 
  position: relative;
  backdrop-filter: blur(10px);
}

html:not(.dark) .feature-card {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.feature-card:hover { 
  border-color: var(--accent); 
  transform: translateY(-5px); 
  box-shadow: 0 10px 30px -10px var(--accent); 
}

.card-header { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: 20px; 
}

.icon-circle { 
  width: 48px; 
  height: 48px; 
  border-radius: 12px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 1.3rem; 
}

.impact-tag { 
  font-size: 0.65rem; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  color: var(--greenbtn); 
  font-weight: 800; 
}

.card-content h3 { 
  font-size: 1.3rem; 
  font-weight: 700; 
  margin-bottom: 12px;
  color: var(--text-primary);
}

.card-content p { 
  color: var(--text-secondary); 
  line-height: 1.6; 
  font-size: 0.95rem; 
}

.card-footer { 
  margin-top: 20px; 
  padding-top: 20px; 
  border-top: 1px solid var(--border-color); 
}

.tags { display: flex; flex-wrap: wrap; gap: 8px; }

.tag { 
  font-size: 0.7rem; 
  color: var(--text-secondary); 
  background: rgba(128, 128, 128, 0.08); 
  padding: 6px 12px; 
  border-radius: 6px; 
}

html:not(.dark) .tag {
  background: rgba(0, 0, 0, 0.05);
}

/* Tech Stack */
.tech-stack { margin-bottom: 120px; }

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;
}

.tech-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(10px);
}

html:not(.dark) .tech-card {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.tech-card:hover {
  transform: translateY(-8px);
  border-color: var(--tech-color);
  box-shadow: 0 20px 40px -15px var(--tech-color);
}

.tech-card:hover .tech-glow {
  opacity: 0.15;
}

html:not(.dark) .tech-card:hover .tech-glow {
  opacity: 0.08;
}

.tech-glow {
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle at center, var(--tech-color), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}

.tech-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: block;
}

.tech-info {
  position: relative;
  z-index: 1;
}

.tech-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
  line-height: 1.3;
  min-height: 2.6em;
  display: flex;
  align-items: center;
}

.tech-category {
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-features {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  padding: 30px;
  background: rgba(128, 128, 128, 0.04);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

html:not(.dark) .tech-features {
  background: rgba(0, 0, 0, 0.02);
}

.tech-feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 500;
}

.tech-feature-item svg {
  width: 20px;
  height: 20px;
  color: var(--greenbtn);
}

/* Terminal Style */
.deploy-section { margin-bottom: 120px; }

.terminal-window {
  background: #0d1117; 
  border: 1px solid #30363d; 
  border-radius: 12px;
  max-width: 800px; 
  margin: 0 auto; 
  overflow: hidden; 
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

html:not(.dark) .terminal-window {
  background: #1a1a1a;
  border-color: #333;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

.terminal-header { 
  background: #161b22; 
  padding: 12px 20px; 
  display: flex; 
  align-items: center; 
  gap: 15px; 
}

html:not(.dark) .terminal-header {
  background: #2a2a2a;
}

.dots { display: flex; gap: 6px; }
.dots span { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; } 
.yellow { background: #ffbd2e; } 
.green { background: #27c93f; }

.terminal-title { 
  font-size: 0.75rem; 
  color: #8b949e; 
  font-family: 'JetBrains Mono'; 
}

.terminal-body { 
  padding: 25px; 
  font-family: 'JetBrains Mono'; 
  font-size: 0.9rem; 
  line-height: 1.8; 
}

.command { color: #58a6ff; margin-top: 15px; }
.prompt { color: var(--emerald); margin-right: 10px; }
.response { color: #8b949e; }
.highlight { color: #d29922; font-weight: bold; }

/* GitHub Card */
.github-section { margin-bottom: 0; }

.github-card {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), transparent);
  border: 1px solid var(--border-color); 
  border-radius: 20px; 
  padding: 50px;
  position: relative; 
  overflow: hidden;
  margin-bottom: 120px;
}

html:not(.dark) .github-card {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(255, 255, 255, 0.9));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.github-glow {
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.1), transparent 70%);
  pointer-events: none;
}

.github-content { 
  display: flex; 
  align-items: center; 
  gap: 30px; 
  position: relative; 
  z-index: 1; 
}

.git-svg { 
  width: 48px; 
  height: 48px; 
  color: var(--text-primary); 
  flex-shrink: 0;
}

.github-text h3 { 
  font-size: 1.5rem; 
  font-weight: 700; 
  margin-bottom: 8px;
  color: var(--text-primary);
}

.github-text p { 
  color: var(--text-secondary); 
  line-height: 1.6; 
}

.github-btn { 
  background: var(--emerald); 
  color: #fff; 
  padding: 14px 28px; 
  border-radius: 8px; 
  font-weight: 700;
  text-decoration: none;
  margin-left: auto;
  flex-shrink: 0;
  transition: 0.3s;
}
.github-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
}
@media (max-width: 900px) {
.game-preview-bento {
grid-template-columns: 1fr;
height: auto;
}
.bento-main, .bento-side .image-slot {
min-height: 250px;
}
.github-content {
flex-direction: column;
text-align: center;
}
.github-btn {
margin-left: 0;
}
.tech-features {
gap: 20px;
}
.tech-feature-item {
font-size: 0.85rem;
}
section {
margin-bottom: 80px;
}
}
@media (max-width: 768px) {
.tech-grid {
grid-template-columns: repeat(2, 1fr);
}
}
@media (max-width: 600px) {
.tech-grid {
grid-template-columns: 1fr;
}
.section-title {
font-size: 2rem;
}
}
</style>