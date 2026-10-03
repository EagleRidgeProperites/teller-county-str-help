const officialUrl = 'https://www.tellercounty.gov/1014/Short-Term-Rental-Information';

const inspectors = [
  { contractor: 'Savage Septic Service', examinee: 'James Savage', certification: 'NAWT - Vacuum Truck', mechanicId: '4972', contractorId: '29727', expiration: '5/20/2027' },
  { contractor: 'Underground Solutions', examinee: 'Timothy Galvin', certification: 'NAWT - Inspector, O&M', mechanicId: '', contractorId: '180', expiration: '10/31/2026' },
  { contractor: 'M and S Plowing LLC', examinee: 'Sheldon Bennett', certification: 'NAWT - Inspector', mechanicId: '', contractorId: '28677', expiration: '10/31/2027' },
  { contractor: 'Septic Remedy, LLC', examinee: 'Michael Slayton', certification: 'NAWT - Inspector', mechanicId: '', contractorId: '29252', expiration: '10/31/2027' },
  { contractor: '4 Mile Septic', examinee: 'Cody Schwab', certification: 'NAWT - Inspector', mechanicId: '4966', contractorId: '', expiration: '9/30/2026' },
  { contractor: 'Alpine Septic', examinee: 'Chris Diethelm', certification: 'NAWT - Inspector', mechanicId: '4961', contractorId: '28418', expiration: '5/31/2027' },
  { contractor: 'High Country Sewer & Septic LLC', examinee: 'Rich Stuckey', certification: 'NAWT - Inspector', mechanicId: '', contractorId: '29558', expiration: '9/30/2026' },
  { contractor: 'Tri-County Septic Service Inc.', examinee: 'Patrick Lohmeier', certification: 'NAWT - Inspector', mechanicId: '4316', contractorId: '29740', expiration: '11/30/2026' },
  { contractor: 'TAC Construction Services DBA TCS Septic', examinee: 'Terrell Cobb', certification: 'NAWT - Inspector, O&M', mechanicId: '4971', contractorId: '28510', expiration: '11/30/2027' },
  { contractor: 'Absolute Septic, LLC', examinee: 'Timothy Edwards', certification: 'NAWT - Inspector', mechanicId: '112', contractorId: '28126', expiration: '11/30/2027' },
  { contractor: 'Absolute Excavating LLC', examinee: 'Matthew Peterson', certification: 'NAWT - Inspector', mechanicId: '', contractorId: '29627', expiration: '9/16/2027' },
];

function Header() {
  return (
    <header className="subHeader">
      <a className="brand darkBrand" href="/" aria-label="Teller County STR Help home">
        <span className="brandMark">TC</span>
        <span>
          <strong>Teller County</strong>
          <small>STR Help</small>
        </span>
      </a>
      <nav className="subNav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a className="active" href="/common-questions">Common Questions</a>
        <a className="navButton darkNavButton" href={officialUrl} target="_blank" rel="noreferrer">Official County Site</a>
      </nav>
    </header>
  );
}

export default function CommonQuestions() {
  return (
    <main>
      <section className="faqHero">
        <Header />
        <div className="faqHeroInner">
          <p className="sectionKicker">Common questions</p>
          <h1>Practical answers for Teller County STR owners.</h1>
          <p>
            Straightforward information to help you prepare documents, inspections, and other items that may be needed for the STR licensing process.
          </p>
        </div>
      </section>

      <section className="faqSection">
        <article className="faqItem">
          <div className="faqNumber">01</div>
          <details className="faqContent faqDisclosure">
            <summary className="faqQuestion">
              <span>Who are certified septic inspectors in Teller County?</span>
              <span className="faqChevron" aria-hidden="true">⌄</span>
            </summary>

            <div className="faqAnswer">
              <p className="faqLead">
                The following contractors and examinees appear on the certified septic inspector list provided for Teller County. Because certifications expire, confirm that the inspector's certification is current before scheduling an inspection.
              </p>

              <div className="tableWrap">
                <table className="inspectorTable">
                  <thead>
                    <tr>
                      <th>Contractor</th>
                      <th>Certified person</th>
                      <th>Certification</th>
                      <th>Mechanic ID</th>
                      <th>Contractor ID</th>
                      <th>Expiration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inspectors.map((item) => (
                      <tr key={`${item.contractor}-${item.examinee}`}>
                        <td><strong>{item.contractor}</strong></td>
                        <td>{item.examinee}</td>
                        <td>{item.certification}</td>
                        <td>{item.mechanicId || '—'}</td>
                        <td>{item.contractorId || '—'}</td>
                        <td>{item.expiration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="faqNote">
                <strong>Important:</strong> Certification status can change. Verify the inspector is currently approved before relying on an inspection for your STR application.
              </div>
            </div>
          </details>
        </article>

        <div className="moreQuestions">
          <p className="sectionKicker">More answers coming</p>
          <h2>This page will grow as owners work through the licensing process.</h2>
          <p>We can add each new question as it comes up and keep all of the answers organized in one place.</p>
        </div>
      </section>

      <footer>
        <div>
          <strong>Teller County STR Help</strong>
          <p>Independent guidance for short-term rental owners in Teller County, Colorado.</p>
        </div>
        <div className="footerRight">
          <p>Not an official Teller County government website.</p>
        </div>
      </footer>
    </main>
  );
}
