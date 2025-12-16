<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Shield, Code, BookOpen, Github, ExternalLink, Terminal, FileCode, Zap, Lock, Cpu, Network, Database, Cloud } from 'lucide-vue-next';

const features = [
  { icon: Lock, title: 'Cybersécurité', desc: 'Techniques avancées de sécurité offensive et défensive' },
  { icon: Code, title: 'Développement', desc: 'Python, JavaScript, C et Ruby pour le hacking' },
  { icon: Network, title: 'Réseaux', desc: 'Architecture, sécurisation et analyse réseau' },
  { icon: Database, title: 'Certifications', desc: 'Préparation Security+, PenTest+ et SOC Analyst' },
  { icon: Cloud, title: 'Infrastructure', desc: 'Linux, Windows Server et virtualisation' },
  { icon: Terminal, title: 'Outils', desc: 'Metasploit, Burp Suite, Nmap et plus encore' }
];

const mouseX = ref(0);
const mouseY = ref(0);
const isTyping = ref(false);
const typedText = ref('');
const fullText = 'Cybersécurité, infrastructure et développement';
let typeInterval: ReturnType<typeof setInterval> | null = null;

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

const typeText = () => {
  let i = 0;
  isTyping.value = true;

  if (typeInterval !== null) {
    clearInterval(typeInterval);
  }

  typeInterval = setInterval(() => {
    if (i < fullText.length) {
      typedText.value += fullText.charAt(i);
      i++;
    } else {
      isTyping.value = false;
      clearInterval(typeInterval!);
      typeInterval = null;
    }
  }, 80);
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  setTimeout(typeText, 800);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  if (typeInterval) clearInterval(typeInterval);
});
</script>

<template>
  <div class="home-container">
    <!-- Animated Background -->
    <div class="animated-bg">
      <div 
        class="cursor-glow" 
        :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
      ></div>
      <div class="grid-overlay"></div>
      <div class="floating-particles">
        <div v-for="i in 30" :key="i" class="particle" :style="{ '--delay': i * 0.2 + 's', '--x': (i * 23) % 100 + '%', '--y': (i * 31) % 100 + '%' }"></div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <!-- Animated Logo -->
        <div class="logo-container">
          <div class="logo-rings">
            <div class="ring ring-1"></div>
            <div class="ring ring-2"></div>
            <div class="ring ring-3"></div>
          </div>
          <div class="logo-core">
            <img src="/logo.png" alt="RootDev Logo" class="logo-img">
          </div>
        </div>
        
        <!-- Typing Effect Subtitle -->
        <div class="subtitle-container">
          <p class="hero-subtitle">
            {{ typedText }}<span v-if="isTyping" class="cursor-blink">|</span>
          </p>
        </div>
        
        <p class="hero-tagline">
          <Zap :size="24" class="inline-icon" />
          Ressources en constante rédaction
        </p>

        <!-- Interactive CTA -->
        <div class="cta-group">
          <a href="/cybersecurite/" class="cta-primary">
            <span class="cta-text">Explorer les ressources</span>
            <span class="cta-icon">
              <BookOpen :size="22" />
            </span>
            <span class="cta-glow"></span>
          </a>
          
          <a
            href="https://github.com/guilyandeurv/rootdev"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-secondary"
          >
            <Github :size="22" />
            <span>GitHub</span>
            <ExternalLink :size="18" class="external-icon" />
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>

    <!-- Interactive Features Grid -->
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

    <!-- Interactive Code Preview -->
    <section class="code-preview-section">
      <div class="code-container">
        <div class="section-title-wrapper">
          <Terminal :size="32" class="title-icon" />
          <h2 class="section-title">
            Exemples <span class="title-accent">pratiques</span>
          </h2>
        </div>
        
        <div class="code-grid">
          <!-- Terminal Window -->
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

          <!-- Code Editor Window -->
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

    <!-- Sources avec hover effects -->
    <section class="sources-section">
      <div class="sources-container">
        <h2 class="section-title">
          Inspiré par les <span class="title-accent">meilleurs</span>
        </h2>
        <p class="sources-description">
          Des plateformes reconnues mondialement pour leur excellence en cybersécurité
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

    <!-- Footer -->
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
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: opacity 0.3s;
  z-index: 1;
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
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #60a5fa, #a855f7);
  border-radius: 50%;
  animation: float 10s ease-in-out infinite;
  animation-delay: var(--delay);
  left: var(--x);
  top: var(--y);
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0) scale(1); 
    opacity: 0; 
  }
  10% {
    opacity: 1;
  }
  50% { 
    transform: translateY(-120px) translateX(30px) scale(1.5); 
    opacity: 0.8; 
  }
  90% {
    opacity: 1;
  }
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  z-index: 2;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

/* Animated Logo */
.logo-container {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto 3rem;
}

.logo-rings {
  position: absolute;
  inset: 0;
}

.ring {
  position: absolute;
  inset: 0;
  border: 3px solid transparent;
  border-top-color: rgba(59, 130, 246, 0.6);
  border-radius: 50%;
  animation: rotate 3s linear infinite;
}

.ring-1 {
  animation-duration: 3s;
  border-top-color: rgba(59, 130, 246, 0.9);
  border-right-color: rgba(168, 85, 247, 0.3);
}

.ring-2 {
  animation-duration: 4s;
  animation-direction: reverse;
  border-top-color: rgba(6, 182, 212, 0.7);
  border-left-color: rgba(236, 72, 153, 0.3);
  inset: 15px;
}

.ring-3 {
  animation-duration: 5s;
  border-top-color: rgba(147, 197, 253, 0.5);
  border-bottom-color: rgba(251, 191, 36, 0.2);
  inset: 30px;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.logo-core {
  position: absolute;
  inset: 45px;
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 80px rgba(59, 130, 246, 0.4),
    inset 0 0 40px rgba(59, 130, 246, 0.1);
  overflow: hidden;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: pulse 3s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.3));
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

/* Typing Effect */
.subtitle-container {
  min-height: 3.5rem;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--vp-c-text-1);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.cursor-blink {
  animation: blink 1s step-end infinite;
  color: #60a5fa;
  font-weight: 400;
  margin-left: 2px;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-tagline {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin-bottom: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-weight: 500;
}

.inline-icon {
  color: #fbbf24;
  animation: bounce 2s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.5));
}

.inline-icon-left {
  color: #fbbf24;
  animation: bounce 2s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.5));
  margin-right: 0.75rem;
  vertical-align: middle;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Interactive CTA */
.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 5rem;
}

.cta-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.875rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 1.25rem;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 12px 45px rgba(59, 130, 246, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.cta-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 18px 60px rgba(59, 130, 246, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.2) inset;
}

.cta-primary:active {
  transform: translateY(-1px) scale(1);
}

.cta-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.cta-primary:hover .cta-glow {
  transform: translateX(100%);
}

.cta-text {
  position: relative;
  z-index: 1;
}

.cta-icon {
  position: relative;
  z-index: 1;
  transition: transform 0.3s;
}

.cta-primary:hover .cta-icon {
  transform: translateX(5px);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 2.5rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 1.2rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 1.25rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-secondary:hover {
  border-color: #60a5fa;
  color: #60a5fa;
  background: rgba(59, 130, 246, 0.05);
  transform: translateY(-3px);
  box-shadow: 
    0 12px 35px rgba(59, 130, 246, 0.25),
    0 0 0 1px rgba(96, 165, 250, 0.3) inset;
}

.external-icon {
  transition: transform 0.3s;
}

.cta-secondary:hover .external-icon {
  transform: translate(4px, -4px);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 5.5rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s ease-in-out infinite;
}

.mouse {
  width: 32px;
  height: 55px;
  border: 3px solid var(--vp-c-text-3);
  border-radius: 18px;
  position: relative;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
}

.wheel {
  width: 5px;
  height: 12px;
  background: linear-gradient(180deg, #60a5fa, #a855f7);
  border-radius: 3px;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(96, 165, 250, 0.5);
}

@keyframes scroll {
  0% { opacity: 1; top: 12px; }
  100% { opacity: 0; top: 32px; }
}

/* Features Section */
.features-section {
  position: relative;
  padding: 8rem 2rem;
  z-index: 2;
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
  color: #3b82f6;
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
  border-color: #60a5fa;
  box-shadow: 
    0 25px 70px rgba(59, 130, 246, 0.35),
    0 0 0 1px rgba(96, 165, 250, 0.3) inset;
}

.feature-hover-effect {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 60%);
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
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.feature-card:hover .feature-icon-wrapper {
  transform: scale(1.15) rotate(-5deg);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.3);
}

.gradient-0 { 
  background: linear-gradient(135deg, #ef4444, #f97316);
  box-shadow: 0 12px 35px rgba(239, 68, 68, 0.4);
}
.gradient-1 { 
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
}
.gradient-2 { 
  background: linear-gradient(135deg, #a855f7, #ec4899);
  box-shadow: 0 12px 35px rgba(168, 85, 247, 0.4);
}
.gradient-3 { 
  background: linear-gradient(135deg, #10b981, #059669);
  box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
}
.gradient-4 { 
  background: linear-gradient(135deg, #f59e0b, #f97316);
  box-shadow: 0 12px 35px rgba(245, 158, 11, 0.4);
}
.gradient-5 { 
  background: linear-gradient(135deg, #6366f1, #3b82f6);
  box-shadow: 0 12px 35px rgba(99, 102, 241, 0.4);
}

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

.code-window {
  background: #1e1e1e;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #2d2d2d;
}

.code-window:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 30px 80px rgba(59, 130, 246, 0.5),
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.dot-red { 
  background: linear-gradient(135deg, #ff5f56, #e81123);
}
.dot-yellow { 
  background: linear-gradient(135deg, #ffbd2e, #faa307);
}
.dot-green { 
  background: linear-gradient(135deg, #27c93f, #14a76c);
}

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

.window-content::-webkit-scrollbar {
  width: 10px;
}

.window-content::-webkit-scrollbar-track {
  background: #1e1e1e;
}

.window-content::-webkit-scrollbar-thumb {
  background: #3d3d3d;
  border-radius: 5px;
}

.window-content::-webkit-scrollbar-thumb:hover {
  background: #4d4d4d;
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
    0 30px 80px rgba(59, 130, 246, 0.45),
    0 0 0 1px rgba(96, 165, 250, 0.3) inset;
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
  background: linear-gradient(to bottom, var(--vp-c-bg-soft), var(--vp-c-bg));
  border-top: 2px solid var(--vp-c-divider);
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
  filter: drop-shadow(0 2px 8px rgba(96, 165, 250, 0.4));
}

.footer-text {
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 1.1rem;
}

.footer-subtext {
  color: var(--vp-c-text-3);
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
  padding: 0.25rem 0;
  position: relative;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #b3b038, #a2f10d);
  transition: width 0.3s;
}

.footer-link:hover {
  color: #fbbf24;
  transform: translateX(5px);
}

.footer-link:hover::before {
  width: 100%;
}

/* Responsive */
@media (max-width: 968px) {
  .features-grid,
  .sources-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .code-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1.5rem;
    min-height: 90vh;
  }

  .logo-container {
    width: 180px;
    height: 180px;
  }

  .cta-group {
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
    padding: 1.35rem 2rem;
  }

  .stats-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .features-grid,
  .sources-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .code-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 2.5rem;
  }
  
  .section-title-wrapper {
    flex-direction: row;
    justify-content: center;
  }

  .section-subtitle,
  .sources-description {
    font-size: 1.15rem;
  }

  .features-section,
  .code-preview-section,
  .sources-section {
    padding: 5rem 1.5rem;
  }

  .footer {
    padding: 2.5rem 1.5rem 1.5rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .footer-brand {
    align-items: center;
  }

  .footer-links {
    align-items: center;
  }
  
  .footer-link::before {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 480px) {
  .logo-container {
    width: 150px;
    height: 150px;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }

  .feature-card,
  .source-card {
    padding: 2.5rem 2rem;
  }
  
  .feature-icon-wrapper {
    width: 80px;
    height: 80px;
  }
  
  .source-icon {
    width: 85px;
    height: 85px;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>