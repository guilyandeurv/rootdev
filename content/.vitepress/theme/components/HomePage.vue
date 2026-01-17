<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Shield, Code, BookOpen, Github, ExternalLink, Terminal, Zap, Lock, Network, Database, Cloud, Wrench, ArrowRight } from 'lucide-vue-next';

const quickstarts = [
  { 
    icon: Lock, 
    title: 'Cybersécurité', 
    duration: 'Essentiel',
    desc: 'Techniques de sécurité offensive et défensive',
    color: 'blue',
    link: '/cybersecurite/'
  },
  { 
    icon: Cloud, 
    title: 'Environnements', 
    duration: 'Infrastructure',
    desc: 'Linux, Windows Server et virtualisation',
    color: 'green',
    link: '/environnement/linux/linux'
  },
  { 
    icon: Network, 
    title: 'Réseaux', 
    duration: 'Fondamental',
    desc: 'Architecture, sécurisation et analyse réseau',
    color: 'purple',
    link: '/reseaux/'
  },
  { 
    icon: Code, 
    title: 'Programmation', 
    duration: 'Pratique',
    desc: 'Python, JavaScript, C et Ruby pour le hacking',
    color: 'orange',
    link: '/programmation/'
  }
];

const features = [
  { icon: Lock, title: 'Cybersécurité', desc: 'Techniques avancées de sécurité offensive et défensive' },
  { icon: Code, title: 'Développement', desc: 'Python, JavaScript, C et Ruby pour le hacking' },
  { icon: Network, title: 'Réseaux', desc: 'Architecture, sécurisation et analyse réseau' },
  { icon: Database, title: 'Certifications', desc: 'Préparation Security+, PenTest+ et SOC Analyst' },
  { icon: Cloud, title: 'Infrastructure', desc: 'Linux, Windows Server et virtualisation' },
  { icon: Terminal, title: 'Outils', desc: 'Metasploit, Burp Suite, Nmap et plus encore' }
];

const itSymbols = ['0', '1', '{}', '/>', '[]', '#', '::', '->', '&&', '||'];

const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div class="home-container">
    <div class="animated-bg">
      <div class="grid-overlay"></div>
      <div 
        class="cursor-glow" 
        :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
      ></div>
      <div class="floating-particles">
        <div 
          v-for="i in 40" 
          :key="i" 
          class="particle" 
          :style="{ 
            '--delay': (i * 0.2) + 's', 
            '--x': (i * 19) % 100 + 'vw', 
            '--y': (i * 23) % 100 + 'vh',
            '--tx': ((i * 7) % 80 - 40) + 'px',
            '--ty': ((i * 13) % 80 - 120) + 'px',
            '--s': 1 + ((i * 5) % 10) / 10
          }"
        >{{ itSymbols[i % itSymbols.length] }}</div>
      </div>
    </div>

    <section class="hero-section">
      <div class="hero-content">
      </div>
    </section>

    <section class="main-content">
      <div class="content-grid">
        <div class="connect-section">
          <h2 class="section-heading">Explorez nos ressources</h2>
          <p class="section-subheading">Déployez le projet chez vous</p>
          
          <div class="connect-card">
            <div class="terminal-container">
              <div class="terminal-content">
                <div class="terminal-line">
                  <span class="prompt">$</span> <span class="command">git clone https://github.com/guilyandeurv/rootdev.git</span>
                </div>
                <div class="terminal-output">
                  <span class="output-comment">Cloning into 'rootdev'...</span><br>
                  <span class="output-success">remote: Enumerating objects: 847, done.</span><br>
                  <span class="output-success">remote: Counting objects: 100% (847/847), done.</span><br>
                  <span class="output-success">Receiving objects: 100% (847/847), 2.45 MiB | 3.12 MiB/s, done.</span>
                </div>
                <div class="terminal-line">
                  <span class="prompt">$</span> <span class="command">cd rootdev && npm install</span>
                </div>
                <div class="terminal-output">
                  <span class="output-text">✓ Installation des dépendances...</span><br>
                  <span class="output-success">✓ 243 packages installés</span>
                </div>
                <div class="terminal-line">
                  <span class="prompt">$</span> <span class="command">npm run dev</span>
                </div>
                <div class="terminal-output">
                  <span class="output-success">✓ Serveur démarré sur http://localhost:5173</span>
                </div>
              </div>
            </div>
            <div class="connect-content">
              <div class="duration-badge github-badge">
                <Github :size="16" />
                <span>Projet Open Source</span>
              </div>
              <div class="button-group">
                <a href="https://github.com/guilyandeurv/rootdev" target="_blank" rel="noopener noreferrer" class="connect-button secondary">
                  <Github :size="20" />
                  <span>Voir sur GitHub</span>
                  <ExternalLink :size="16" />
                </a>
                <a href="/content" class="connect-button primary">
                  <span>Commencer maintenant</span>
                  <ArrowRight :size="20" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="quickstart-section">
          <h2 class="section-heading">Première visite ?</h2>
          <p class="section-subheading">Jetez un coup d'oeil aux cours rédigés</p>
          
          <div class="quickstart-grid">
            <a 
              v-for="(item, index) in quickstarts" 
              :key="index" 
              :href="item.link" 
              class="quickstart-card"
              :class="`quickstart-${item.color}`"
            >
              <div class="quickstart-icon">
                <component :is="item.icon" :size="28" />
              </div>
              <div class="quickstart-content">
                <div class="quickstart-header">
                  <h3 class="quickstart-title">{{ item.title }}</h3>
                  <span class="duration-tag" :class="`duration-${item.color}`">
                    <span class="duration-icon">●</span>
                    {{ item.duration }}
                  </span>
                </div>
                <p class="quickstart-desc">{{ item.desc }}</p>
              </div>
            </a>
          </div>

          <a href="/content" class="explore-all-button">
            Explorez tous les tutoriels
          </a>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="features-container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-accent">Explorez</span> les domaines
          </h2>
          <p class="section-subtitle">
            Des ressources complètes et pratiques pour maîtriser les domaines IT
          </p>
        </div>

        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
            :style="{ '--index': index }"
          >
            <div class="feature-icon-wrapper" :class="`gradient-${index}`">
              <component :is="feature.icon" :size="40" class="feature-icon" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.desc }}</p>
            <div class="feature-hover-effect"></div>
          </div>
        </div>
      </div>
    </section>

        <section class="code-preview-section">
      <div class="code-container">
        <div class="section-title-wrapper">
          <Terminal :size="32" class="title-icon" />
          <h2 class="section-title">
            Exemples <span class="title-accent">pratiques</span>
          </h2>
        </div>
        
        <div class="code-grid">
          <div class="code-window terminal-window">
            <div class="window-header">
              <div class="window-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="window-title">terminal.sh</span>
            </div>
            <div class="window-content">
              <pre class="code-block"><code><span class="prompt">┌──(</span><span class="user">root㉿kali</span><span class="prompt">)-[</span><span class="path">~/rootdev</span><span class="prompt">]
└─$</span> nmap -sV -sC target.com
<span class="output">Starting Nmap 7.94...</span>
<span class="success">✓ Port 22/tcp open  ssh</span>
<span class="success">✓ Port 80/tcp open  http</span>
<span class="warning">⚠ Port 443/tcp filtered https</span></code></pre>
            </div>
          </div>

          <div class="code-window editor-window">
            <div class="window-header">
              <div class="window-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="window-title">exploit.py</span>
            </div>
            <div class="window-content">
              <pre class="code-block"><code><span class="line-num">1</span>  <span class="keyword">import</span> <span class="module">socket</span>
<span class="line-num">2</span>  
<span class="line-num">3</span>  <span class="keyword">def</span> <span class="function">exploit</span>(<span class="param">target</span>):
<span class="line-num">4</span>      <span class="variable">payload</span> = <span class="string">"A"</span> * <span class="number">1024</span>
<span class="line-num">5</span>      <span class="variable">s</span> = <span class="module">socket</span>.<span class="function">socket</span>()
<span class="line-num">6</span>      <span class="variable">s</span>.<span class="function">connect</span>((<span class="param">target</span>, <span class="number">9999</span>))
<span class="line-num">7</span>      <span class="comment"># Exploit successful ✓</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sources-section">
      <div class="sources-container">
        <h2 class="section-title">
          Inspiré par les <span class="title-accent">meilleurs</span>
        </h2>
        <p class="sources-description">
          Des plateformes reconnues pour leur excellence dans ces domaines
        </p>

        <div class="sources-grid">
          <a
            href="https://tryhackme.com"
            target="_blank"
            rel="noopener noreferrer"
            class="source-card thm-card"
          >
            <div class="source-glow"></div>
            <div class="source-icon">
              <Shield :size="44" />
            </div>
            <h3 class="source-title">TryHackMe</h3>
            <p class="source-desc">Apprentissage pratique et gamifié</p>
            <div class="source-arrow">→</div>
          </a>

          <a
            href="https://skillsforall.com"
            target="_blank"
            rel="noopener noreferrer"
            class="source-card cisco-card"
          >
            <div class="source-glow"></div>
            <div class="source-icon">
              <BookOpen :size="44" />
            </div>
            <h3 class="source-title">Cisco Skills For All</h3>
            <p class="source-desc">Préparation aux certifications</p>
            <div class="source-arrow">→</div>
          </a>

          <a
            href="https://udemy.com"
            target="_blank"
            rel="noopener noreferrer"
            class="source-card udemy-card"
          >
            <div class="source-glow"></div>
            <div class="source-icon">
              <Code :size="44" />
            </div>
            <h3 class="source-title">Udemy</h3>
            <p class="source-desc">Cours d'experts reconnus</p>
            <div class="source-arrow">→</div>
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-grid">
          <div class="footer-brand">
            <Shield :size="36" class="footer-logo" />
            <p class="footer-text">RootDev © 2025</p>
            <p class="footer-subtext">RootDev.fr par Guilyan - contact@rootdev.fr</p>
            <p class="footer-subtext">Vous, et uniquement vous, êtes responsable de vos actes.</p>
          </div>
          
          <div class="footer-links">
            <a href="/cybersecurite/" class="footer-link">Cybersécurité</a>
            <a href="/programmation/" class="footer-link">Programmation</a>
            <a href="/reseaux/" class="footer-link">Réseaux</a>
            <a href="/certification/introduction" class="footer-link">Certifications</a>
            <a href="/environnement/linux/linux" class="footer-link">Environnements</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-container {
  width: 100%;
  overflow-x: hidden;
  background: linear-gradient(to bottom, var(--vp-c-bg), var(--vp-c-bg-soft));
}

/* Animated Background */
.animated-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.cursor-glow {
  position: fixed;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 137, 250, 0.2) 0%, rgba(30, 12, 194, 0.1) 20%, transparent 80%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: opacity 0.3s;
  z-index: -1;
  filter: blur(40px);
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

.floating-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  font-size: 1rem;
  font-weight: 500;
  color: #60a5fa;
  background: transparent;
  animation: float 12s ease-in-out infinite;
  animation-delay: var(--delay);
  left: var(--x);
  top: var(--y);
  text-shadow: 0 0 12px rgba(96, 165, 250, 0.6);
  user-select: none;
}

@keyframes float {
  0%, 100% { 
    transform: translate(0, 0) scale(1); 
    opacity: 0; 
  }
  10% {
    opacity: 1;
  }
  50% { 
    transform: translate(var(--tx), var(--ty)) scale(var(--s)); 
    opacity: 0.8; 
  }
  90% {
    opacity: 1;
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: 4rem 2rem 3rem;
  text-align: center;
  z-index: 2;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}


/* Main Content Grid */
.main-content {
  position: relative;
  padding: 1.5rem 2rem 5rem;
  z-index: 2;
}

.content-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
  align-items: start;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.4rem;
}

.section-subheading {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.75rem;
}

/* Terminal Styles - KEEPING DARK THEME FOR TERMINAL INTENTIONALLY */
.terminal-container {
  background: #1b2b3a; /* Hardcoded dark for terminal look */
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  position: relative;
}

.terminal-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(to top, #00000050, transparent);
  pointer-events: none;
}

.terminal-content {
  padding: 1.25rem;
  font-family: var(--vp-font-family-mono, 'Courier New', monospace);
  font-size: 0.85rem;
  line-height: 1.7;
  min-height: 160px;
}

.terminal-line {
  margin-bottom: 0.5rem;
}

.prompt {
  color: #60a5fa;
  font-weight: 600;
}

.user {
  color: #ce9178;
  font-weight: 600;
}

.path {
  color: #dcdcaa;
}

.command {
  color: #e2cd0a;
  font-weight: 500;
}

.terminal-output {
  margin: 1rem 0 1rem 1.5rem;
  color: #d4d4d4;
}

.output-text {
  color: #60a5fa;
  font-weight: 600;
  font-size: 1.05rem;
}

.output-comment {
  color: #6a9955;
  font-style: italic;
}

.output-success {
  color: #c97f4e;
}

/* Connect Card Styles */
.connect-card {
  /* CHANGED: Dynamic background and border */
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s;
}

.connect-card:hover {
  border-color: var(--vp-c-brand-1, #3b82f6);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15);
}

.connect-content {
  padding: 1.75rem;
}

.connect-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.6rem;
}

.connect-desc {
  color: var(--vp-c-text-2);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.duration-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.875rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 0.4rem;
  color: #3b82f6;
  font-size: 0.8125rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
}

/* Specific text colors adjustment for badges in light mode */
html:not(.dark) .duration-badge {
  color: #2563eb;
  background: rgba(37, 99, 235, 0.1);
}

.github-badge {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
  color: #8b5cf6;
}
html:not(.dark) .github-badge {
    color: #7c3aed;
}

.button-group {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
}

.connect-button {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s;
  flex: 1;
  min-width: 170px;
  justify-content: center;
}

.connect-button.primary {
  background: var(--vp-c-brand-1, #3b82f6);
  color: #fff;
}

.connect-button.primary:hover {
  background: var(--vp-c-brand-2, #2563eb);
  transform: translateY(-2px);
}

.connect-button.secondary {
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.connect-button.secondary:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-1, #3b82f6);
  color: var(--vp-c-brand-1, #3b82f6);
  transform: translateY(-2px);
}

/* Quickstart Section */
.quickstart-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.quickstart-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  /* CHANGED: Dynamic background/border */
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.875rem;
  text-decoration: none;
  transition: all 0.3s;
}

.quickstart-card:hover {
  border-color: var(--vp-c-brand-1, #3b82f6);
  transform: translateX(4px);
  /* Use a slightly different background on hover */
  background: var(--vp-c-bg);
}

.quickstart-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

/* Icon colors - adjusted to be visible but not too harsh */
.quickstart-blue .quickstart-icon { color: #3b82f6; }
.quickstart-green .quickstart-icon { color: #10b981; background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.2); }
.quickstart-purple .quickstart-icon { color: #a855f7; background: rgba(168, 85, 247, 0.1); border-color: rgba(168, 85, 247, 0.2); }
.quickstart-orange .quickstart-icon { color: #f59e0b; background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.2); }

.quickstart-content {
  flex: 1;
}

.quickstart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.quickstart-title {
  font-size: 1.025rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.duration-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.65rem;
  border-radius: 0.35rem;
  font-size: 0.775rem;
  font-weight: 500;
  white-space: nowrap;
}

.duration-blue { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
.duration-green { background: rgba(16, 185, 129, 0.15); color: #10b981; }
.duration-purple { background: rgba(168, 85, 247, 0.15); color: #a855f7; }
.duration-orange { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }

/* Ensure tags are readable in light mode */
html:not(.dark) .duration-blue { color: #2563eb; }
html:not(.dark) .duration-green { color: #059669; }
html:not(.dark) .duration-purple { color: #7c3aed; }
html:not(.dark) .duration-orange { color: #d97706; }

.duration-icon {
  font-size: 0.5rem;
}

.quickstart-desc {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.5;
}

.explore-all-button {
  display: block;
  width: 100%;
  padding: 0.875rem;
  text-align: center;
  /* CHANGED */
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.625rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: all 0.3s;
}

.explore-all-button:hover {
  border-color: var(--vp-c-brand-1, #3b82f6);
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
}

/* Features Section */
.features-section {
  position: relative;
  padding: 8rem 2rem;
  z-index: 2;
  /* CHANGED: Gradient from soft to bg */
  background: linear-gradient(to bottom, transparent, var(--vp-c-bg-soft));
}

.features-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
}

.section-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.title-icon {
  color: #fbbf24;
  animation: bounce 2s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.5));
  flex-shrink: 0;
}

.title-accent {
  color: var(--vp-c-brand-1, #3b82f6);
}

.section-subtitle {
  font-size: 1.35rem;
  color: var(--vp-c-text-2);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
}

.feature-card {
  position: relative;
  padding: 3rem 2.5rem;
  /* CHANGED: Dynamic gradient */
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg) 100%);
  border: 2px solid var(--vp-c-divider);
  border-radius: 1.75rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: calc(var(--index) * 0.1s);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  opacity: 0;
  transition: opacity 0.4s;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.03);
  border-color: var(--vp-c-brand-1, #60a5fa);
  box-shadow: 
    0 25px 70px rgba(59, 130, 246, 0.15),
    0 0 0 1px rgba(96, 165, 250, 0.1) inset;
}

.feature-hover-effect {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.05), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.feature-card:hover .feature-hover-effect {
  opacity: 1;
}

.feature-icon-wrapper {
  width: 90px;
  height: 90px;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
}

.feature-card:hover .feature-icon-wrapper {
  transform: scale(1.15) rotate(-5deg);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.2);
}

.gradient-0 { background: linear-gradient(135deg, #ef4444, #f97316); }
.gradient-1 { background: linear-gradient(135deg, #3b82f6, #06b6d4); }
.gradient-2 { background: linear-gradient(135deg, #a855f7, #ec4899); }
.gradient-3 { background: linear-gradient(135deg, #10b981, #059669); }
.gradient-4 { background: linear-gradient(135deg, #f59e0b, #f97316); }
.gradient-5 { background: linear-gradient(135deg, #6366f1, #3b82f6); }

.feature-icon {
  color: white;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.feature-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.feature-desc {
  color: var(--vp-c-text-2);
  line-height: 1.7;
  font-size: 1.1rem;
}

/* Code Preview Section */
.code-preview-section {
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(to bottom, var(--vp-c-bg-soft), var(--vp-c-bg));
  z-index: 2;
}

.code-container {
  max-width: 1300px;
  margin: 0 auto;
}

.code-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
}

/* CODE WINDOW - KEEP DARK THEME */
.code-window {
  background: #1e1e1e; /* Hardcoded dark */
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #2d2d2d;
}

html:not(.dark) .code-window {
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.1);
    border-color: #e5e5e5;
}

.code-window:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 30px 80px rgba(59, 130, 246, 0.2),
    0 0 0 1px rgba(96, 165, 250, 0.3);
  border-color: #3b82f6;
}

.window-header {
  background: linear-gradient(180deg, #2d2d2d 0%, #252525 100%);
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #3d3d3d;
}

.window-dots {
  display: flex;
  gap: 0.625rem;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

.dot-red { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.window-title {
  color: #a0a0a0;
  font-size: 0.95rem;
  font-family: var(--vp-font-family-mono);
  font-weight: 500;
}

.window-content {
  padding: 2rem;
  max-height: 350px;
  overflow-y: auto;
}

.code-block {
  font-size: 0.95rem;
  font-family: var(--vp-font-family-mono);
  line-height: 1.8;
  margin: 0;
  color: #d4d4d4;
}

.prompt { color: #4ec9b0; font-weight: 600; }
.user { color: #ce9178; font-weight: 600; }
.path { color: #dcdcaa; }
.output { color: #9a9a9a; }
.success { color: #4ec9b0; font-weight: 500; }
.warning { color: #fbbf24; font-weight: 500; }

.line-num {
  display: inline-block;
  width: 2.5rem;
  color: #858585;
  user-select: none;
  margin-right: 1.5rem;
  text-align: right;
}

.keyword { color: #569cd6; font-weight: 600; }
.module { color: #4ec9b0; }
.function { color: #dcdcaa; }
.param { color: #9cdcfe; }
.variable { color: #9cdcfe; }
.string { color: #ce9178; }
.number { color: #b5cea8; }
.comment { color: #6a9955; font-style: italic; }

/* Sources Section */
.sources-section {
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(to bottom, var(--vp-c-bg), var(--vp-c-bg-soft));
  z-index: 2;
}

.sources-container {
  max-width: 1300px;
  margin: 0 auto;
}

.sources-description {
  text-align: left;
  color: var(--vp-c-text-2);
  font-size: 1.35rem;
  margin-bottom: 5rem;
  max-width: 800px;
  line-height: 1.6;
}

.sources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
}

.source-card {
  position: relative;
  padding: 3.5rem 3rem;
  /* CHANGED */
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  border: 2px solid var(--vp-c-divider);
  border-radius: 2rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.source-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.08));
  opacity: 0;
  transition: opacity 0.4s;
}

.source-card:hover::before {
  opacity: 1;
}

.source-card:hover {
  transform: translateY(-12px) scale(1.04);
  border-color: #60a5fa;
  box-shadow: 
    0 30px 80px rgba(59, 130, 246, 0.25),
    0 0 0 1px rgba(96, 165, 250, 0.2) inset;
}

.source-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.35), transparent 60%);
  opacity: 0;
  transition: opacity 0.6s;
}

.source-card:hover .source-glow {
  opacity: 1;
  animation: rotateGlow 4s linear infinite;
}

@keyframes rotateGlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.source-icon {
  width: 100px;
  height: 100px;
  border-radius: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: white;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
}

.thm-card .source-icon {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  box-shadow: 0 15px 40px rgba(239, 68, 68, 0.5);
}

.cisco-card .source-icon {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.5);
}

.udemy-card .source-icon {
  background: linear-gradient(135deg, #a855f7, #9333ea);
  box-shadow: 0 15px 40px rgba(168, 85, 247, 0.5);
}

.source-card:hover .source-icon {
  transform: scale(1.2) rotate(-8deg);
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.6);
}

.source-title {
  font-size: 1.85rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  letter-spacing: -0.01em;
}

.source-desc {
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  line-height: 1.6;
}

.source-arrow {
  font-size: 2.5rem;
  color: #60a5fa;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  font-weight: 300;
}

.source-card:hover .source-arrow {
  opacity: 1;
  transform: translateX(0);
}


/* Footer */
.footer {
  position: relative;
  padding: 3rem 2rem 2rem;
  /* CHANGED */
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  z-index: 2;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 1rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-logo {
  color: #f59e0b;
}

.footer-text {
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 1.1rem;
}

.footer-subtext {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.3s;
  font-size: 0.95rem;
  font-weight: 500;
}

.footer-link:hover {
  color: var(--vp-c-brand-1, #3b82f6);
}

/* =========================================
   MEDIA QUERIES - MOBILE & TABLETTE
   ========================================= */

@media (max-width: 1024px) {
  /* On réduit déjà les marges sur tablette */
  .features-section,
  .code-preview-section,
  .sources-section {
    padding: 4rem 1.5rem; /* De 8rem à 4rem */
  }

  .content-grid {
    grid-template-columns: 1fr; /* Force l'empilement */
  }
}

@media (max-width: 768px) {
  /* --- 1. Ajustements Globaux --- */
  .hero-section {
    padding: 3rem 1rem 1rem;
  }
  
  .main-content {
    padding: 1rem 1rem 3rem;
  }

  /* --- 2. Carte de Connexion (Terminal + Boutons) --- */
  .connect-content {
    padding: 1.25rem;
  }

  .button-group {
    flex-direction: column; /* Boutons l'un sous l'autre */
    width: 100%;
  }

  .connect-button {
    width: 100%; /* Pleine largeur pour le tactile */
    justify-content: center;
  }

  /* --- 3. Section Quickstart --- */
  .quickstart-card {
    flex-direction: column; /* Icône au dessus, texte dessous */
    align-items: flex-start;
  }

  .quickstart-icon {
    width: 40px;
    height: 40px; /* Icônes plus petites */
  }

  /* --- 4. Section Features (Grille) --- */
  .features-grid {
    /* CORRECTION CRITIQUE : Remplace le minmax(340px) qui casse le mobile */
    grid-template-columns: 1fr; 
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem 1.5rem; /* Moins de padding interne */
  }
  
  .feature-icon-wrapper {
    width: 70px;
    height: 70px; /* Icône plus petite */
    margin-bottom: 1.5rem;
  }

  /* --- 5. Section Code Preview (Le plus gros problème) --- */
  .code-preview-section {
    padding: 4rem 1rem;
  }

  .code-grid {
    margin-top: 2rem;
    /* CORRECTION CRITIQUE : Remplace le minmax(400px) */
    grid-template-columns: 1fr; 
  }

  .code-window {
    /* Empêche la fenêtre de code de dépasser de l'écran */
    max-width: 100%;
    border-radius: 1rem;
  }

  .window-content {
    padding: 1rem; /* Moins d'espace interne */
    overflow-x: auto; /* Permet de scroller LE CODE, pas toute la page */
  }

  pre.code-block {
    font-size: 0.8rem; /* Code plus petit sur mobile */
  }

  /* --- 6. Section Sources --- */
  .sources-grid {
    /* CORRECTION CRITIQUE : Remplace le minmax(340px) */
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .source-card {
    padding: 2.5rem 1.5rem;
  }

  /* --- 7. Footer --- */
  .footer {
    padding: 2rem 1.5rem;
  }

  /* --- 8. Typographie Mobile --- */
  .section-title {
    font-size: 2rem; /* Titres plus petits */
  }
  
  .section-subtitle, 
  .sources-description {
    font-size: 1rem;
  }

  /* Désactiver les animations lourdes sur mobile pour la performance */
  .floating-particles {
    opacity: 0.3; /* Moins intrusif */
  }
}
</style>