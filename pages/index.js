import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'

// ── DATA ─────────────────────────────────────────────────────────────────────

const skills = [
  { category: 'Security Operations', items: ['SIEM', 'Splunk', 'QRadar', 'ELK Stack', 'Incident Response', 'Wireshark', 'MITRE ATT&CK', 'Threat Detection'] },
  { category: 'IT Infrastructure', items: ['Microsoft 365', 'Active Directory', 'Windows 10/11', 'Network Security', 'VPN', 'DNS/DHCP', 'Remote Desktop', 'ITIL v4'] },
  { category: 'Development & Cloud', items: ['Python', 'PowerShell', 'Azure (AZ-900)', 'HTML5/CSS3', 'SQL', 'ASP.NET Core', 'JavaScript', 'Linux/Ubuntu'] },
  { category: 'Governance & Compliance', items: ['GDPR', 'Risk & Compliance', 'ISO 27001', 'ISMS Design', 'Risk Assessment', 'Audit Support', 'Policy Management', 'Cyber Essentials'] },
]

const experience = [
  {
    title: 'IT Support Analyst',
    company: 'Nottingham Trent University',
    period: 'Nov 2024 – Aug 2025',
    location: 'Nottingham, UK',
    type: 'Enterprise',
    bullets: [
      'I deployed, configured, maintained, and decommissioned a wide range of end user devices including desktop PCs, laptops, tablets, and peripherals using structured lifecycle management processes, ensuring accurate asset records were maintained from procurement through to secure disposal.',
      'I diagnosed and resolved second line incidents across Windows 10 and 11, Microsoft 365, Outlook, Active Directory, VPN, and network connectivity, keeping clear case records in Zendesk and Microsoft Dynamics throughout, and using RDP to support remote users without on-site delays.',
      'I maintained audio visual equipment across teaching spaces and meeting rooms, including classroom projectors, interactive whiteboards, Microsoft Teams Rooms, and Zoom Rooms, carrying out regular checks and resolving faults quickly before sessions started to avoid disruption to academic activity.',
      'I administered Active Directory and Microsoft 365 accounts for staff and students, handling user provisioning, password resets, access control, and onboarding, while documenting recurring incident resolutions in the knowledge base to help the whole team resolve similar faults faster.',
      'I consistently achieved 95 percent or above SLA compliance across 30 plus incidents daily by prioritising workloads effectively, escalating complex issues with clear handover notes, and keeping users informed at every stage of the resolution process in line with ITIL good practice.',
    ]
  },
  {
    title: 'IT Support Technician',
    company: 'Mani Maligai Supermarket',
    period: 'Jun 2020 – Jul 2022',
    location: 'Pollachi, India',
    type: 'Operational',
    bullets: [
      'I provided independent IT support to 20 to 30 staff users in a live retail environment, installing and maintaining desktop computers, POS systems, barcode scanners, receipt printers, and Wi-Fi routers, and diagnosing Windows-based software faults and peripheral issues using structured troubleshooting.',
      'I managed user account administration and access control, coordinated with external vendors on complex escalations, and maintained accurate records of all faults and resolutions to support continuity and identify recurring issues across IT systems.',
      'I configured and maintained networked devices including routers and CCTV-connected systems, ensuring reliable connectivity across the site and resolving network faults with minimal disruption to daily operations.',
    ]
  },
  {
    title: 'Web Design Professional',
    company: 'SENsible SENCO CIC',
    period: 'Jun 2020 – Jul 2022',
    location: 'Nottingham, UK',
    type: 'Contract',
    bullets: [
      'Progressed into a contracted role after delivering measurable improvements during my internship, accomplishing a 30% improvement in user navigation and engagement by redesigning the site architecture using WordPress, HTML5, and CSS3.',
      'Delivered 20+ responsive web pages by translating stakeholder requirements into wireframes, UI mock-ups, and front-end implementations aligned with accessibility and usability standards.',
      'Improved website accessibility by conducting structured WCAG audits using WAVE, testing across devices, and implementing front-end fixes to enhance usability and compliance.',
      'Increased search visibility by optimising SEO metadata, sitemap structure, and internal linking, and enhanced functionality through WordPress theme and plugin customisation using basic PHP.',
    ]
  },
  {
    title: 'Digital Content & UX Coordinator (Intern)',
    company: 'SENsible SENCO CIC',
    period: 'Aug 2025 – Sep 2025',
    location: 'Nottingham, UK',
    type: 'Internship',
    bullets: [
      'Supported the redevelopment and structural enhancement of the organisation\'s website, redesigning layouts and producing wireframes and prototypes based on user-centred design principles and stakeholder requirements.',
      'Increased cross-device compatibility and accessibility compliance by implementing responsive design improvements using HTML5 and CSS3 within WordPress environments.',
      'Delivered visually consistent UI components and branded layouts by creating mock-ups in Adobe Photoshop and translating concepts into functional web content.',
      'Strengthened SEO and website crawlability by updating metadata, internal linking, and sitemap structures to support technical optimisation.',
    ]
  },
]

const certifications = [
  { name: 'Microsoft Azure Fundamentals AZ-900', status: 'In Preparation', icon: '☁️', color: 'blue' },
  { name: 'ITIL v4 Foundation', status: 'In Progress', icon: '📋', color: 'purple' },
  { name: 'TryHackMe SOC Level 1', status: 'Completed', icon: '🛡️', color: 'green' },
  { name: 'Python Programming', status: 'Completed', icon: '🐍', color: 'green' },
  { name: 'Cybersecurity Analyst Simulation', status: 'Completed', icon: '🔐', color: 'green' },
  { name: 'Identity & Access Management', status: 'Completed', icon: '🔑', color: 'green' },
]

const projects = [
  {
    title: 'Network & Cloud Security Lab',
    tech: ['Ubuntu 18.04', 'IDPS', 'Firewall', 'Security Monitoring'],
    description: 'Deployed and secured a prototype network defending against SQL injection, backdoor, and flood attacks. Monitored security events in real time and documented mitigation strategies.',
    icon: '🌐',
  },
  {
    title: 'Phishing Education via Serious Games',
    tech: ['Game Design', 'User Research', 'Cybersecurity Education', 'Survey Analysis'],
    description: 'MSc dissertation — Designed and user-tested serious games to teach phishing awareness. Gathered expert feedback and applied game design principles to cybersecurity training.',
    icon: '🎮',
  },
  {
    title: 'eCommerce Security Platform',
    tech: ['ASP.NET Core', 'Python', 'HTML5/CSS3', 'SQL', 'XSS Prevention'],
    description: 'Built a full eCommerce application with user authentication, admin management, and security controls against XSS and SQL injection attacks.',
    icon: '🛒',
  },
  {
    title: 'Information Security Management System',
    tech: ['ISMS Design', 'Risk Assessment', 'ISO 27001', 'Asset Inventory'],
    description: 'Designed a complete ISMS framework for a real-world scenario, developed asset risk inventory, and proposed structured mitigations aligned with security standards.',
    icon: '📊',
  },
]

const badminton = [
  { achievement: 'County Level Player', detail: 'Representing Nottinghamshire in competitive county badminton fixtures', icon: '🏆' },
  { achievement: '4-Nations Graded Internation', detail: 'Represented England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 and placed 2nd in Individuals', icon: '🏸' },
  { achievement: 'National Ranking', detail: 'Registered with Badminton England (BE No. 1381998)', icon: '🎯' },
  { achievement: 'London League', detail: 'Represented clubs in London competitive league fixtures', icon: '🌆' },
]

// ── COMPONENTS ───────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Skills', 'Experience', 'Certifications', 'Projects', 'Badminton', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#020817]/90 backdrop-blur-xl border-b border-cyan-500/10' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-mono text-cyan-400 text-sm font-medium tracking-wider">
          <span className="text-purple-400">&gt;</span> bubal<span className="text-cyan-400">_</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="text-sm font-body text-slate-400 hover:text-cyan-400 transition-colors duration-200 tracking-wide">
              {link}
            </a>
          ))}
        </div>
        <a href="https://drive.google.com/uc?export=download&id=1Ik_NxEKu6MAITptV-DtFBFMGgLYPxFra" download
          className="hidden md:block text-xs font-mono px-4 py-2 border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-500/10 transition-all duration-200 hover:border-cyan-400">
          Download CV
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-cyan-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#020817]/95 backdrop-blur-xl border-b border-cyan-500/10 px-6 py-4">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState(0)
  const phrases = ['IT Support Analyst', 'Cybersecurity Analyst', 'SOC Analyst']

  useEffect(() => {
    let timeout
    const currentPhrase = phrases[phase % phrases.length]
    let i = 0
    let deleting = false
    let current = ''

    const type = () => {
      if (!deleting && i <= currentPhrase.length) {
        current = currentPhrase.slice(0, i)
        setText(current)
        i++
        timeout = setTimeout(type, 80)
      } else if (!deleting && i > currentPhrase.length) {
        deleting = true
        timeout = setTimeout(type, 2000)
      } else if (deleting && i >= 0) {
        current = currentPhrase.slice(0, i)
        setText(current)
        i--
        timeout = setTimeout(type, 40)
      } else {
        setPhase(p => p + 1)
      }
    }
    timeout = setTimeout(type, 200)
    return () => clearTimeout(timeout)
  }, [phase])

  return (
    <section id="hero" className="relative min-h-screen flex items-center cyber-grid overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}} />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono text-cyan-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Boobalan<br />
              <span className="gradient-text">Selvakumar</span>
            </h1>

            <div className="font-mono text-xl text-slate-400 mb-6 h-8">
              <span className="text-cyan-400">&gt;</span> {text}
              <span className="text-cyan-400 animate-pulse">_</span>
            </div>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-lg">
              MSc IT Security graduate from Nottingham Trent University. Combining enterprise IT support experience with cybersecurity expertise in SIEM, threat detection, and blue team operations.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded hover:opacity-90 transition-opacity">
                Get in Touch
              </a>
              <a href="#projects"
                className="px-6 py-3 border border-cyan-500/30 text-cyan-400 text-sm font-medium rounded hover:bg-cyan-500/10 transition-all">
                View Projects
              </a>
              <a href="https://linkedin.com/in/boobalan-selvakumar" target="_blank" rel="noreferrer"
                className="px-6 py-3 border border-slate-700 text-slate-400 text-sm font-medium rounded hover:border-slate-500 transition-all">
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {['MSc IT Security', 'NTU Graduate', 'Nottingham, UK'].map(tag => (
                <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal card */}
          <div className="glass rounded-2xl p-6 border border-cyan-500/10 animate-float">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs font-mono text-slate-500">profile.sh</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <p><span className="text-purple-400">const</span> <span className="text-cyan-400">analyst</span> = {'{'}</p>
              <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-green-400">"Boobalan Selvakumar"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">degree:</span> <span className="text-green-400">"MSc IT Security"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">university:</span> <span className="text-green-400">"NTU"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">experience:</span> <span className="text-yellow-400">3</span>, <span className="text-slate-600">// years</span></p>
              <p className="pl-4"><span className="text-slate-400">sla_compliance:</span> <span className="text-yellow-400">"95%+"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">incidents_daily:</span> <span className="text-yellow-400">30</span>,</p>
              <p className="pl-4"><span className="text-slate-400">certs:</span> [<span className="text-green-400">"SOC L1"</span>, <span className="text-green-400">"Python"</span>],</p>
              <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-cyan-400">"available"</span>,</p>
              <p>{'}'}</p>
              <p className="text-slate-600 mt-2">// Ready to contribute</p>
              <p><span className="text-purple-400">export default</span> analyst<span className="text-cyan-400 animate-pulse">_</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white mb-16 flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xl">01.</span>
          About Me
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent ml-4" />
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I am an IT Support professional and cybersecurity graduate based in Nottingham, UK. I hold an <span className="text-cyan-400">MSc in IT Security from Nottingham Trent University</span> and have over three years of hands-on technical support experience across enterprise and operational environments.
            </p>
            <p>
              My work at NTU's enterprise service desk gave me real-world experience managing incidents at scale, 95%+ SLA compliance, Active Directory administration, and security monitoring through SIEM tools. I complement this with dedicated cybersecurity study through <span className="text-cyan-400">TryHackMe SOC Level 1</span>, covering log analysis, threat detection, and blue team operations.
            </p>
            <p>
              Beyond technology, I am a competitive badminton player representing clubs at county level in Nottinghamshire. Sport has taught me discipline, pressure management, and the importance of continuous improvement — values I bring to my professional work.
            </p>
            <p>
              I am immediately available, actively developing toward <span className="text-cyan-400">AZ-900</span> and <span className="text-cyan-400">ITIL v4 Foundation</span>, and seeking a role where I can contribute meaningfully from day one in IT support or cybersecurity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Incidents/Day', value: '30+', sub: 'at NTU service desk' },
              { label: 'SLA Compliance', value: '95%+', sub: 'consistently maintained' },
              { label: 'Years Experience', value: '3+', sub: 'across IT support roles' },
              { label: 'Certifications', value: '6', sub: 'completed and in progress' },
            ].map(stat => (
              <div key={stat.label} className="glass glass-hover rounded-xl p-5 text-center">
                <div className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-white text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-slate-500 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white mb-16 flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xl">02.</span>
          Technical Skills
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent ml-4" />
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <div key={group.category} className="glass glass-hover rounded-xl p-6">
              <h3 className="font-display text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800/60 border border-slate-700/50 rounded hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white mb-16 flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xl">03.</span>
          Experience
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent ml-4" />
        </h2>
        <div className="space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="glass glass-hover rounded-xl p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{job.title}</h3>
                  <p className="text-cyan-400 text-sm mt-1">{job.company} &bull; {job.location}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2">
                  <span className="text-xs font-mono text-slate-500 whitespace-nowrap">{job.period}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-purple-500/30 text-purple-400 bg-purple-500/5">{job.type}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-400">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  const colorMap = {
    blue: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400',
    purple: 'border-purple-500/30 bg-purple-500/5 text-purple-400',
    green: 'border-green-500/30 bg-green-500/5 text-green-400',
  }

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white mb-16 flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xl">04.</span>
          Certifications
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent ml-4" />
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="glass glass-hover rounded-xl p-5">
              <div className="text-2xl mb-3">{cert.icon}</div>
              <h3 className="text-sm font-medium text-white mb-2 leading-snug">{cert.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full border ${colorMap[cert.color]}`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white mb-16 flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xl">05.</span>
          Projects
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent ml-4" />
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="glass glass-hover rounded-xl p-6 group">
              <div className="text-3xl mb-4">{project.icon}</div>
              <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono text-slate-500 bg-slate-800/60 px-2 py-1 rounded border border-slate-700/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Badminton() {
  return (
    <section id="badminton" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xl">06.</span>
          Badminton Achievements
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent ml-4" />
        </h2>
        <p className="text-slate-500 text-sm mb-12 ml-12">Competitive badminton player at county level — discipline, teamwork, and performance under pressure.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {badminton.map((item, i) => (
            <div key={i} className="glass glass-hover rounded-xl p-5 flex gap-4 items-start">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-white text-sm font-semibold mb-1">{item.achievement}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <span className="text-cyan-400 font-mono text-xl">07.</span>
          Get In Touch
        </h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          I am immediately available and actively seeking IT support or cybersecurity roles across the UK. Whether you have a role in mind or just want to connect, I would love to hear from you.
        </p>
        <div className="glass rounded-2xl p-8 mb-8">
          <div className="space-y-4">
            {[
              { label: 'Email', value: 'bubal7567@gmail.com', href: 'mailto:bubal7567@gmail.com', icon: '✉️' },
              { label: 'Phone', value: '07818938507', href: 'tel:07818938507', icon: '📱' },
              { label: 'LinkedIn', value: 'linkedin.com/in/boobalan-selvakumar', href: 'https://linkedin.com/in/boobalan-selvakumar', icon: '💼' },
              { label: 'Location', value: 'Nottingham, UK — Open to relocation', href: null, icon: '📍' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/30 transition-colors">
                <span className="text-xl">{item.icon}</span>
                <div className="text-left">
                  <div className="text-xs text-slate-500 font-mono">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-300">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="mailto:bubal7567@gmail.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded hover:opacity-90 transition-opacity glow-blue">
          Send Me a Message
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-slate-600">
          <span className="text-purple-400">&gt;</span> Boobalan Selvakumar — MSc IT Security, NTU
        </span>
        <span className="font-mono text-xs text-slate-600">
          Nottingham, UK · Available Immediately
        </span>
      </div>
    </footer>
  )
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Boobalan Selvakumar — IT Security & Cybersecurity</title>
        <meta name="description" content="MSc IT Security graduate. IT Support Analyst & Cybersecurity professional based in Nottingham, UK. Available immediately." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="noise">
        <div className="scan-line" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <Projects />
          <Badminton />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
