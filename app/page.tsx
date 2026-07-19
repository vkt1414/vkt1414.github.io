const selectedWork = [
  {
    number: "01",
    area: "Clinical diagnostics",
    title: "Reliable molecular testing and surveillance",
    description:
      "Assay verification, infectious-disease testing, and laboratory quality systems designed around dependable patient results.",
    outcomes: [
      "EBV and BKV assay verification",
      "SARS-CoV-2 mutation panel development",
      "Automated quality and epidemiology reporting",
    ],
    accent: "cyan",
  },
  {
    number: "02",
    area: "Medical imaging AI",
    title: "Reproducible pipelines for public cancer imaging",
    description:
      "Open-source tools and cloud workflows that make large medical-imaging collections easier to access, analyze, and reproduce.",
    outcomes: [
      "Co-developed the idc-index Python package",
      "Processed approximately 11 TB in under 9 hours",
      "DICOM, DuckDB, Parquet, Terra, and Seven Bridges",
    ],
    accent: "blue",
  },
  {
    number: "03",
    area: "Clinical data engineering",
    title: "Turning difficult clinical data into useful systems",
    description:
      "Python, SQL, and containerized workflows that convert fragmented clinical information into searchable, decision-ready data.",
    outcomes: [
      "More than 1.5 million pathology pages digitized",
      "Interactive dashboards and automated reporting",
      "Secure, scalable ETL and analytics workflows",
    ],
    accent: "green",
  },
];

const publications = [
  {
    year: "2025",
    journal: "Journal of Internal Medicine",
    title:
      "Opportunistic assessment of steatotic liver disease in lung cancer screening eligible individuals",
    href: "https://pubmed.ncbi.nlm.nih.gov/39868889/",
  },
  {
    year: "2024",
    journal: "Nature Communications",
    title: "End-to-end reproducible AI pipelines in radiology using the cloud",
    href: "https://www.nature.com/articles/s41467-024-51202-2",
  },
  {
    year: "2024",
    journal: "Scientific Data",
    title:
      "Enrichment of lung cancer computed tomography collections with AI-derived annotations",
    href: "https://www.nature.com/articles/s41597-023-02864-y",
  },
  {
    year: "2023",
    journal: "RadioGraphics",
    title:
      "National Cancer Institute Imaging Data Commons: Toward transparency, reproducibility, and scalability in imaging artificial intelligence",
    href: "https://pubs.rsna.org/doi/10.1148/rg.230180",
  },
  {
    year: "2023",
    journal: "Clinical Toxicology",
    title:
      "Cannabis positivity rates in 17 emergency departments across the United States with varying degrees of marijuana legalization",
    href: "https://pubmed.ncbi.nlm.nih.gov/37129223/",
  },
  {
    year: "2022",
    journal: "Annals of Internal Medicine",
    title:
      "Implementation of a SARS-CoV-2 genotyping panel for prompt Omicron variant identification",
    href: "https://pubmed.ncbi.nlm.nih.gov/35344374/",
  },
];

const experience = [
  {
    years: "2024 — present",
    role: "Senior Medical Laboratory Scientist",
    organization: "Massachusetts General Hospital · Clinical Microbiology",
    summary:
      "Molecular infectious-disease testing, assay verification, quality analytics, and laboratory data systems.",
  },
  {
    years: "2022 — 2024",
    role: "Data Engineer",
    organization: "Brigham and Women’s Hospital · Radiology Research",
    summary:
      "Open-source software and large-scale data pipelines for the NCI Imaging Data Commons.",
  },
  {
    years: "2021 — 2024",
    role: "Clinical laboratory and research roles",
    organization: "Massachusetts General Hospital · Brigham and Women’s Hospital",
    summary:
      "Clinical microbiology, pathology analytics, and cross-institutional research projects.",
  },
  {
    years: "2018 — 2020",
    role: "Researcher",
    organization: "UC Davis · Massachusetts General Hospital",
    summary:
      "Analytical method development in forensic science, toxicology, and neurology research.",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Vamsi Thiriveedhi, home">
          <span className="wordmark-mark" aria-hidden="true">VT</span>
          <span>Vamsi Thiriveedhi</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
        </nav>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              Molecular diagnostics <span>·</span> Clinical data engineering <span>·</span>{" "}
              Medical imaging AI
            </p>
            <h1>
              Building reliable diagnostics and data systems for better patient care.
            </h1>
            <p className="hero-intro">
              I’m a Senior Medical Laboratory Scientist, researcher, and data engineer working
              across infectious-disease testing, clinical analytics, and reproducible medical
              imaging AI.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <span aria-hidden="true">→</span>
              </a>
              <a
                className="button button-secondary"
                href="https://scholar.google.com/citations?hl=en&user=GE8K8DIAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar <ExternalArrow />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="scan-grid" />
            <img src="/hero-data-atlas.webp" alt="" />
            <div className="signal-panel">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="metrics" aria-label="Selected professional highlights">
            <article>
              <span className="metric-icon layers" aria-hidden="true" />
              <div><strong>1.5M+</strong><span>pathology pages digitized</span></div>
            </article>
            <article>
              <span className="metric-icon database" aria-hidden="true" />
              <div><strong>11 TB</strong><span>imaging analysis</span></div>
            </article>
            <article>
              <span className="metric-icon document" aria-hidden="true" />
              <div><strong>12</strong><span>research outputs</span></div>
            </article>
            <article>
              <span className="metric-icon shield" aria-hidden="true" />
              <div><strong>SMB(ASCP)</strong><span>specialist credential</span></div>
            </article>
          </div>

          <p className="affiliations">
            <span aria-hidden="true">⌂</span> Greater Boston · Massachusetts General Hospital ·
            Brigham and Women’s Hospital · NCI Imaging Data Commons
          </p>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="section-index">01 / About</p>
            <h2>Laboratory rigor, engineered into data systems.</h2>
          </div>
          <div className="about-grid">
            <p className="about-lead">
              My work sits where clinical laboratory science meets software engineering. I move
              between assay performance, healthcare data, and reproducible research—with the same
              goal in each setting: make complex systems more reliable and useful.
            </p>
            <div className="focus-list">
              <article>
                <span>01</span>
                <h3>Validate</h3>
                <p>Translate analytical requirements into dependable clinical testing.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Automate</h3>
                <p>Replace repetitive reporting and fragmented data flows with durable tools.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Reproduce</h3>
                <p>Build research workflows that others can inspect, rerun, and extend.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading row-heading">
            <div>
              <p className="section-index">02 / Selected work</p>
              <h2>Clinical impact through systems thinking.</h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/ImagingDataCommons/idc-index"
              target="_blank"
              rel="noreferrer"
            >
              View idc-index on GitHub <ExternalArrow />
            </a>
          </div>
          <div className="work-grid">
            {selectedWork.map((item) => (
              <article className={`work-card ${item.accent}`} key={item.number}>
                <div className="work-card-top">
                  <span className="work-number">{item.number}</span>
                  <span className="work-area">{item.area}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="section-heading row-heading">
            <div>
              <p className="section-index">03 / Publications</p>
              <h2>Selected research.</h2>
            </div>
            <a
              className="text-link"
              href="https://scholar.google.com/citations?hl=en&user=GE8K8DIAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Complete profile <ExternalArrow />
            </a>
          </div>
          <div className="publication-list">
            {publications.map((publication) => (
              <a
                className="publication-row"
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                key={publication.title}
              >
                <span className="publication-year">{publication.year}</span>
                <span className="publication-title">{publication.title}</span>
                <span className="publication-journal">{publication.journal}</span>
                <ExternalArrow />
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="section-index">04 / Experience</p>
            <h2>From the bench to research infrastructure.</h2>
          </div>
          <div className="experience-grid">
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.years}-${item.role}`}>
                  <span className="timeline-years">{item.years}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="timeline-org">{item.organization}</p>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="credentials">
              <p className="credential-label">Credentials</p>
              <div><strong>SMB(ASCP)</strong><span>Specialist in Molecular Biology</span></div>
              <div><strong>MB(ASCP)</strong><span>Technologist in Molecular Biology</span></div>
              <div><strong>MS</strong><span>Forensic Science · UC Davis</span></div>
              <div><strong>BTech</strong><span>Biotechnology · NIT Warangal</span></div>
              <p className="award">Pillars of Excellence Award · Massachusetts General Hospital</p>
            </aside>
          </div>
        </section>

        <section className="contact-band">
          <p className="section-index">Professional inquiries</p>
          <h2>Interested in molecular diagnostics, clinical data, or reproducible medical AI?</h2>
          <p>
            To keep personal contact details off the public web, the best way to reach me is
            through my professional profile.
          </p>
          <a
            className="button button-primary"
            href="https://www.linkedin.com/in/vamsi-thiriveedhi"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ExternalArrow />
          </a>
        </section>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Vamsi Thiriveedhi</p>
        <p>Clinical science · Data engineering · Open research</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
