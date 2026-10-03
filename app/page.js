const officialUrl = 'https://www.tellercounty.gov/1014/Short-Term-Rental-Information';

const steps = [
  {
    n: '01',
    title: 'Understand the ordinance',
    text: 'Start with the adopted Teller County rules and learn which requirements apply to your property.'
  },
  {
    n: '02',
    title: 'Prepare your property',
    text: 'Work through safety, occupancy, parking, guest-information, and property-documentation requirements.'
  },
  {
    n: '03',
    title: 'Gather your documents',
    text: 'Use a practical checklist so the application package is organized before the County begins accepting applications.'
  },
  {
    n: '04',
    title: 'Apply with confidence',
    text: 'Follow a step-by-step application guide, track deadlines, and keep copies of everything you submit.'
  }
];

const resources = [
  ['Start Here', 'A simple overview of who needs a license, what to prepare, and what to do first.'],
  ['Application Checklist', 'A working checklist of documents, inspections, property details, and owner information.'],
  ['Property Requirements', 'Plain-English guidance on the operational and safety requirements that affect your STR.'],
  ['Forms & Documents', 'Quick links to official Teller County forms, ordinance documents, FAQs, and supporting materials.'],
  ['Common Questions', 'Answers to practical questions STR owners may have while preparing for licensing.'],
  ['Updates', 'Track new County announcements, application dates, procedures, and implementation changes.']
];

function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label="Teller County STR Help home">
        <span className="brandMark">TC</span>
        <span>
          <strong>Teller County</strong>
          <small>STR Help</small>
        </span>
      </a>
      <nav className="nav" aria-label="Main navigation">
        <a href="#start">Start Here</a>
        <a href="#resources">Resources</a>
        <a href="#updates">Updates</a>
        <a className="navButton" href={officialUrl} target="_blank" rel="noreferrer">Official County Site</a>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <Header />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">A practical resource for Teller County STR owners</p>
          <h1>Get ready for<br /><span>STR licensing.</span></h1>
          <p className="heroText">
            Clear, step-by-step help for short-term rental owners preparing to apply for a license in unincorporated Teller County, Colorado.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#start">Start preparing</a>
            <a className="secondaryButton" href="#resources">Explore resources</a>
          </div>
          <div className="statusCard">
            <span className="statusDot" aria-hidden="true" />
            <div>
              <strong>Current County status</strong>
              <p>Ordinance No. 23 has been adopted. Teller County says applications are not being accepted yet while the licensing process is being implemented.</p>
            </div>
          </div>
        </div>
        <div className="heroCredit">Pikes Peak region • Colorado</div>
      </section>

      <section className="intro" id="start">
        <div className="sectionKicker">Your road map</div>
        <div className="introGrid">
          <div>
            <h2>Turn a complicated process into a clear checklist.</h2>
          </div>
          <div>
            <p>
              TellerCountySTRHelp.com is designed as an independent, owner-focused guide. It does not replace Teller County’s official instructions; it helps you understand them, organize your paperwork, and prepare your property before you apply.
            </p>
          </div>
        </div>
        <div className="stepGrid">
          {steps.map((step) => (
            <article className="stepCard" key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scenicBreak" aria-label="Teller County mountain scenery">
        <div className="scenicPanel">
          <p>Built for local owners</p>
          <h2>One place for the rules, the paperwork, and the practical details.</h2>
        </div>
      </section>

      <section className="resources" id="resources">
        <div className="resourceHeading">
          <div>
            <div className="sectionKicker">Resource center</div>
            <h2>Everything you need to prepare.</h2>
          </div>
          <p>These will become dedicated subpages as we build out the site.</p>
        </div>
        <div className="resourceGrid">
          {resources.map(([title, text], i) => {
            const isCommonQuestions = title === 'Common Questions';
            const CardTag = isCommonQuestions ? 'a' : 'article';
            return (
              <CardTag
                className={`resourceCard${isCommonQuestions ? ' resourceCardLink' : ''}`}
                key={title}
                {...(isCommonQuestions ? { href: '/common-questions' } : {})}
              >
                <div className="resourceIcon">{String(i + 1).padStart(2, '0')}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="comingSoon">{isCommonQuestions ? 'View questions →' : 'Page coming next'}</span>
              </CardTag>
            );
          })}
        </div>
      </section>

      <section className="official" id="updates">
        <div className="officialImage" />
        <div className="officialContent">
          <div className="sectionKicker light">Stay current</div>
          <h2>Always verify against the official Teller County information.</h2>
          <p>
            County procedures, forms, dates, fees, and implementation details can change. This site will summarize the process, while the County remains the official source for licensing requirements.
          </p>
          <a className="lightButton" href={officialUrl} target="_blank" rel="noreferrer">Visit Teller County STR Information ↗</a>
        </div>
      </section>

      <footer>
        <div>
          <strong>Teller County STR Help</strong>
          <p>Independent guidance for short-term rental owners in Teller County, Colorado.</p>
        </div>
        <div className="footerRight">
          <p>Not an official Teller County government website.</p>
          <p className="photoCredit">Background photography: Wikimedia Commons, used under applicable Creative Commons licenses.</p>
        </div>
      </footer>
    </main>
  );
}
