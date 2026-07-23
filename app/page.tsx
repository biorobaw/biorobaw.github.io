const researchAreas = [
  ["Spatial cognition", "Neural models of place, grid, and head-direction cells for navigation and memory."],
  ["Neurorobotics", "Embodied computational neuroscience connecting animal behavior, brain physiology, and robots."],
  ["Cognitive robotics", "Learning, planning, and adaptive behavior for autonomous mobile and humanoid robots."],
  ["Multi-robot systems", "Coordination, collaboration, formation control, and autonomous robot soccer."],
  ["Human–robot interaction", "Natural interfaces and intelligent behavior for robots operating with people."],
  ["Neural simulation", "The Neural Simulation Language and schema-based tools for large-scale brain modeling."],
];

const publications = [
  {
    year: "2025",
    title: "Visual Place Cell Encoding: A Computational Model for Spatial Representation and Cognitive Mapping",
    authors: "C. Hamilton and A. Weitzenfeld",
    venue: "arXiv:2504.15953",
    href: "https://doi.org/10.48550/arXiv.2504.15953",
  },
  {
    year: "2025",
    title: "Hierarchical Reinforcement Learning in Multi-Goal Spatial Navigation with Autonomous Mobile Robots",
    authors: "B. Johnson and A. Weitzenfeld",
    venue: "arXiv:2504.18794",
    href: "https://doi.org/10.48550/arXiv.2504.18794",
  },
  {
    year: "2025",
    title: "Space Robotics: A Proposal for Technical Guideline Standardization of Biomimetic Engineering Design Methodology",
    authors: "J. Cornejo, A. Weitzenfeld, J. Baca, and C. E. García Cena",
    venue: "Biomimetics",
    href: "https://doi.org/10.3390/biomimetics10100668",
  },
  {
    year: "2024",
    title: "Analyzing Multi-Robot Leader-Follower Formations in Obstacle-Laden Environments",
    authors: "Z. Hinnen and A. Weitzenfeld",
    venue: "SAB 2024",
    href: "https://doi.org/10.1007/978-3-031-71533-4_9",
  },
];

const grants = [
  {
    dates: "2017–2024",
    program: "NSF · IIS #1703225",
    title: "Experimental and Robotics Investigations of Multi-Scale Spatial Memory Consolidation in Complex Environments",
    partners: "University of South Florida · University of Arizona",
  },
  {
    dates: "2014–2019",
    program: "NSF–ANR · CRCNS #1429937",
    title: "A Replay-Driven Model of Spatial Sequence Learning in the Hippocampus–PFC Network Using Reservoir Computing",
    partners: "USF · University of Arizona · INSERM",
  },
  {
    dates: "2011–2015",
    program: "NSF · IIS #1117303",
    title: "Dorsal versus Ventral Place and Grid Cells during Multi-Scale Spatial Navigation in Rats and Robots",
    partners: "University of South Florida · University of Arizona",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="BioRobotics Laboratory home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>BioRobotics</strong><small>Laboratory · USF</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#director">Director</a>
          <a href="#opportunities">Opportunities</a>
        </nav>
        <a className="header-link" href="https://github.com/biorobaw/">GitHub <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> University of South Florida</p>
            <h1>Intelligence inspired by <em>living systems.</em></h1>
            <p className="hero-deck">
              We study how brains represent space, learn from experience, and coordinate behavior—then bring those principles into autonomous robots.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#research">Explore our research</a>
              <a className="text-link" href="#opportunities">Join the lab <Arrow /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract visualization of spatial cognition">
            <div className="orbit orbit-one"><span /></div>
            <div className="orbit orbit-two"><span /></div>
            <div className="orbit orbit-three"><span /></div>
            <div className="core"><b>B</b><small>bio × robotics</small></div>
            <p className="visual-label label-one">PERCEPTION</p>
            <p className="visual-label label-two">MEMORY</p>
            <p className="visual-label label-three">ACTION</p>
          </div>
          <div className="hero-stats">
            <div><strong>130+</strong><span>publications</span></div>
            <div><strong>30+</strong><span>years of research</span></div>
            <div><strong>8</strong><span>core research areas</span></div>
          </div>
        </section>

        <section className="marquee" aria-label="Research themes">
          <span>Spatial cognition</span><i>+</i><span>Neurorobotics</span><i>+</i><span>Multi-robot systems</span><i>+</i><span>Computational neuroscience</span>
        </section>

        <section className="section" id="research">
          <div className="section-heading">
            <div><p className="eyebrow dark"><span /> Research</p><h2>From neural circuits<br />to robot behavior.</h2></div>
            <p>Our work seeks an in-depth understanding of animal behavior mapped to brain neurophysiology, using robots as both scientific instruments and intelligent systems.</p>
          </div>
          <div className="research-grid">
            {researchAreas.map(([title, description], index) => (
              <article className="research-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-section" id="publications">
          <div className="section-heading light">
            <div><p className="eyebrow"><span /> Selected work</p><h2>Recent publications</h2></div>
            <a className="button button-outline" href="/publications/">View the full archive <Arrow /></a>
          </div>
          <div className="publication-list">
            {publications.map((publication) => (
              <a href={publication.href} className="publication" key={publication.title}>
                <span className="publication-year">{publication.year}</span>
                <span className="publication-main"><strong>{publication.title}</strong><small>{publication.authors} · {publication.venue}</small></span>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section className="section director" id="director">
          <div className="portrait-wrap">
            <img src="https://weitzenfeld.robolat.org/wp-content/uploads/2014/12/weitzenfield1.jpg" alt="Professor Alfredo Weitzenfeld" />
            <span>Lab Director</span>
          </div>
          <div className="director-copy">
            <p className="eyebrow dark"><span /> Leadership</p>
            <h2>Prof. Alfredo<br />Weitzenfeld</h2>
            <p className="lead">Professor, Bellini College of Artificial Intelligence, Cybersecurity and Computing</p>
            <p>Dr. Weitzenfeld directs the BioRobotics Laboratory and the USF RoboBulls RoboCup team. He is a main developer of the Neural Simulation Language and Abstract Schema Language, a founding member of the Latin American Robotics Council and Symposium, and a former IEEE-RAS Distinguished Lecturer.</p>
            <div className="director-links">
              <a href="mailto:aweitzenfeld@usf.edu">Email <Arrow /></a>
              <a href="https://www.usf.edu/ai-cybersecurity-computing/people/faculty/weitzenfeld-alfredo.aspx">USF faculty profile <Arrow /></a>
              <a href="https://weitzenfeld.robolat.org/wp-content/uploads/2019/05/BioWeitzenfeld2019.pdf">Biography PDF <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="section funded">
          <div className="section-heading">
            <div><p className="eyebrow dark"><span /> Support</p><h2>Funded research</h2></div>
            <p>Collaborative work spanning spatial memory, neural sequence learning, navigation, and biomimetic robotics.</p>
          </div>
          <div className="grant-grid">
            {grants.map((grant) => (
              <article key={grant.title}>
                <div><span>{grant.dates}</span><strong>{grant.program}</strong></div>
                <h3>{grant.title}</h3>
                <p>{grant.partners}</p>
              </article>
            ))}
          </div>
          <a className="text-link green" href="/grants/">View complete grant history <Arrow /></a>
        </section>

        <section className="opportunities" id="opportunities">
          <div>
            <p className="eyebrow"><span /> Opportunities</p>
            <h2>Build the next generation of intelligent robots.</h2>
          </div>
          <div>
            <p>The BioRobotics Laboratory recruits Ph.D. students interested in spatial cognition, neurorobotics, autonomous systems, and computational neuroscience.</p>
            <a className="button button-gold" href="https://grad.robolat.org/">View funded Ph.D. opportunities <Arrow /></a>
            <a className="apply-link" href="https://www.usf.edu/admissions/graduate/admission-information/explore-programs.aspx">USF graduate admissions <Arrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span><strong>BioRobotics</strong><small>Laboratory · USF</small></span></a>
        <div><p>Bellini College of Artificial Intelligence,<br />Cybersecurity and Computing</p><p>University of South Florida<br />Tampa, Florida, USA</p></div>
        <div className="footer-links"><a href="mailto:aweitzenfeld@usf.edu">Contact</a><a href="https://github.com/biorobaw/">GitHub</a><a href="https://www.usf.edu/ai-cybersecurity-computing/">USF Bellini College</a></div>
        <p className="copyright">© {new Date().getFullYear()} USF BioRobotics Laboratory</p>
      </footer>
    </>
  );
}
