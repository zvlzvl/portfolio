import React from 'react';

const CVPage = ({language}) => {
    const handleDownload = () => {
        // Chrome PDF failą pavadina pagal document.title
        const oldTitle = document.title;
        document.title = language === 'lt' ? 'CV_Zivile_Vibre' : 'CV_Zivile_Vibre_en';
        const restore = () => {
            document.title = oldTitle;
            window.removeEventListener('afterprint', restore);
        };
        window.addEventListener('afterprint', restore);
        window.print();
    };

return (
  <div>
    <div className="flex flex-col items-center min-h-screen px-4 pt-0 mt-[100px] print:mt-0 print:min-h-0 print:p-0">
      
      {/* CV */}
      <div
        id="cv-content-inner"
        className="w-full max-w-4xl mx-auto my-0 bg-white"
      >
        <div className="flex flex-col h-full p-8">
          {/* Header */}
          <section className="py-6 mb-3 text-center bg-primary-content">
            <div className="text-center pb-7">
              <h2 className="relative inline-block mx-auto text-4xl font-thin transition-all duration-300 text-primary group">
                ŽIVILĖ VIBRĖ
                <span className="absolute left-[33%] top-[116%] w-[33%] h-[3px] bg-secondary transition-all duration-300"></span>
              </h2>
            </div>
            <h3 className="text-lg text-primary">
              {language === 'lt'
                ? 'FULL-STACK PROGRAMUOTOJA (jaunesnioji–vidutinio lygio)'
                : 'FULL-STACK DEVELOPER (junior to mid-level)'}
            </h3>
          </section>
          <div className="flex flex-col flex-grow gap-6 text-primary-content">
            <div className="w-full space-y-4">
              {/* Apie mane */}
              <section className="w-full mb-4 leading-tight ">
                {language === 'lt' ? (
                  <p>
                    Esu ambicinga jaunesnioji „full-stack“ programuotoja,
                    siekianti tobulėti iki vidutinio lygio ir ieškanti naujų
                    iššūkių IT srityje.
                    <br />
                    Turiu daugiau nei dvejų metų vidinio programavimo
                    („back-end“) patirtį dirbant su „Laravel“ karkasu.
                    Taip pat baigiau 1 088 valandų intensyvius „JavaScript“
                    kursus, kuriuose gilinausi į „React.js“, „Node.js“,
                    „TypeScript“ ir žiniatinklio programų kūrimą.
                    <br />
                    Esu atvira naujovėms, noriai mokausi, mėgstu išbandyti
                    naujus dalykus ir ieškoti sprendimų. Norėčiau prisidėti
                    prie įvairių projektų ir įgyti daugiau praktinės patirties.
                  </p>
                ) : (
                  <p>
                    I am an ambitious junior full-stack developer looking for
                    new challenges in IT and working towards a mid-level role.
                    <br />
                    I have over two years of back-end development experience
                    with Laravel. I also completed an intensive 1,088-hour
                    JavaScript programme, where I studied React.js, Node.js,
                    TypeScript and web application development.
                    <br />
                    I enjoy learning, trying new things and finding solutions.
                    I am keen to contribute to a variety of projects and
                    gain more practical experience.
                  </p>
                )}
              </section>
              {/* IT patirtis */}
              <section className="mb-4 leading-tight ">
                <h4 className="p-0.5 pl-2 mb-2 font-light bg-gray-200">
                  {language === 'lt' ? 'IT PATIRTIS' : 'IT EXPERIENCE'}
                </h4>
                <div className="flex justify-between">
                  <div className="font-medium">
                    {language === 'lt'
                      ? '2024 06 – dabar'
                      : 'June 2024 – Present'}
                  </div>
                  <p className="w-[75%]">
                    {language === 'lt'
                      ? 'IT specialistė, MB „Tangent Z“'
                      : 'IT Specialist, Tangent Z'}
                    <br />
                    {language === 'lt'
                      ? 'Įmonės internetinės parduotuvės biolabs.lt kūrimas ir administravimas naudojant „WordPress“. Svetainės dizaino ir funkcionalumo kūrimas, prekių valdymas.'
                      : 'Develop and manage the company’s online store, biolabs.lt, using WordPress. Work includes website design, functionality and product management.'}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">
                    {language === 'lt'
                      ? '2021 09 – 2024 01'
                      : 'Sept 2021 – Jan 2024'}
                  </div>
                  <p className="w-[75%]">
                    {language === 'lt'
                      ? 'Jaunesnioji programuotoja, MB „Suavis“'
                      : 'Junior Developer, Suavis'}
                    <br />
                    {language === 'lt'
                      ? 'Kūriau ir prižiūrėjau jūrinių konteinerių sekimo programą traficero.com. Dirbdama su „Laravel“ kūriau programos funkcionalumą, valdžiau duomenų bazes, pritaikiau dizainą „Blade“ šablonams ir testavau funkcijas.'
                      : 'Developed and maintained traficero.com, a shipping container tracking application. Used Laravel to build application features, manage databases, adapt the design to Blade templates and test functionality.'}
                  </p>
                </div>
              </section>
              {/* Kita patirtis */}
              <section className="mb-4 leading-tight !mt-2">
                <h4 className="p-0.5 pl-2 mb-2 font-light bg-gray-200">
                  {language === 'lt' ? 'KITA PATIRTIS' : 'OTHER EXPERIENCE'}
                </h4>
                <div className="flex justify-between">
                  <div className="font-medium">
                    {language === 'lt'
                      ? '2012 09 – 2019 10'
                      : 'Sept 2012 – Oct 2019'}
                  </div>
                  <p className="w-[75%]">
                    {language === 'lt'
                      ? 'Projektų vadovė, UAB „Sorpo Consulting“'
                      : 'Project Manager, Sorpo Consulting'}
                    <br />
                    {language === 'lt'
                      ? 'ES paramos socialinėms įmonėms projektų rengimas ir valdymas, paraiškų teikimas, socialinių įmonių administravimas.'
                      : 'Prepared and managed EU funding projects for social enterprises, submitted applications and administered social enterprises.'}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">
                    {language === 'lt'
                      ? '2007 01 – 2011 06'
                      : 'Jan 2007 – June 2011'}
                  </div>
                  <p className="w-[75%]">
                    {language === 'lt'
                      ? 'Parduotuvės vedėja, UAB „Limeta“'
                      : 'Store Manager, Limeta'}
                    <br />
                    {language === 'lt'
                      ? 'Medicinos prekių ir įrangos pardavimas.'
                      : 'Sales of medical supplies and equipment.'}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">
                    {language === 'lt'
                      ? '2005 07 – 2006 11'
                      : 'July 2005 – Nov 2006'}
                  </div>
                  <p className="w-[75%]">
                    {language === 'lt'
                      ? 'Pardavimų vadybininkė, UAB „Merkurita“'
                      : 'Sales Manager, Merkurita'}
                    <br />
                    {language === 'lt'
                      ? 'Vilnos gaminių pardavimas.'
                      : 'Sales of wool products.'}
                  </p>
                </div>
              </section>
              <div className="flex justify-between">
                {/* Išsilavinimas */}
                <section className="mb-0 w-[60%] leading-tight">
                  <h4 className="p-0.5 pl-2 mb-2 font-light bg-gray-200">
                    {language === 'lt' ? 'IŠSILAVINIMAS' : 'EDUCATION'}
                  </h4>
                  <div className="flex justify-between">
                    <div className="font-medium">2002 – 2006</div>
                    <p className="w-[62%]">
                      <strong>
                        {language === 'lt'
                          ? 'Klaipėdos universitetas'
                          : 'Klaipeda University'}
                      </strong>
                      <br />
                      {language === 'lt'
                        ? 'Vadybos ir verslo administravimo bakalauras'
                        : 'Bachelor’s Degree in Management and Business Administration'}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-medium">
                      {language === 'lt'
                        ? '2021 01 – 2021 06'
                        : 'Jan – June 2021'}
                    </div>
                    <p className="w-[62%]">
                      <strong>
                        {language === 'lt'
                          ? 'UAB „Baltijos technologijų institutas“'
                          : 'Baltijos technologijų institutas'}
                      </strong>
                      <br />
                      {language === 'lt'
                        ? 'Žiniatinklio programuotojas, LTKS IV'
                        : 'Web Developer, Lithuanian Qualifications Framework Level IV'}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-medium">
                      {language === 'lt'
                        ? '2024 09 – 2025 04'
                        : 'Sept 2024 – Apr 2025'}
                    </div>
                    <p className="w-[62%]">
                      <strong>CodeAcademy</strong>
                      <br />
                      {language === 'lt'
                        ? 'Jaunesniojo „Front-end“ TypeScript programuotojo ir dirbtinio intelekto kompetencijų programa'
                        : 'Junior Frontend TypeScript Developer and Artificial Intelligence Skills Programme'}
                    </p>
                  </div>
                </section>
                <div className="flex flex-col w-[35%] leading-tight">
                  {/* Internete */}
                  <section className="mb-4">
                    <h4 className="p-0.5 pl-2 mb-2 font-light bg-gray-200">
                      {language === 'lt' ? 'INTERNETE' : 'ONLINE'}
                    </h4>
                    <p>
                      <strong>LinkedIn:</strong>
                      <br />
                      www.linkedin.com/in/zivilevibre
                    </p>
                    <p>
                      <strong>
                        {language === 'lt' ? 'Darbų aplankas:' : 'Portfolio:'}
                      </strong>
                      <br />
                      https://zvlzvl.github.io/portfolio/
                    </p>
                  </section>
                  {/* Kontaktai */}
                  <section className="mb-4 leading-tight">
                    <h4 className="w-full p-0.5 pl-2 mb-2 font-light bg-gray-200">
                      {language === 'lt' ? 'KONTAKTAI' : 'CONTACT'}
                    </h4>
                    <p>
                      {language === 'lt'
                        ? 'Klaipėda, Lietuva'
                        : 'Klaipėda, Lithuania'}
                    </p>
                    <p>Tel.: +37061612424</p>
                    <p>
                      {language === 'lt' ? 'El. paštas:' : 'Email:'}{' '}
                      to@zivile.dev
                    </p>
                  </section>
                </div>
              </div>
             <div className="flex justify-between !mt-0">
                {/* Įgūdžiai */}
                <section className="mb-4 w-[60%]">
                  <h4 className="p-0.5 pl-2 mb-2 font-light bg-gray-200">
                    {language === 'lt' ? 'ĮGŪDŽIAI' : 'SKILLS'}
                  </h4>
                  <p>
                    {language === 'lt'
                      ? 'PHP, Pest, Laravel, WordPress, Git, JavaScript, TypeScript pagrindai, Node.js, Express, npm, Socket.IO, React, HTML, CSS, Bootstrap, Tailwind CSS, MySQL, MongoDB pagrindai.'
                      : 'PHP, Pest, Laravel, WordPress, JavaScript, basic TypeScript, Node.js, Express, npm, Socket.IO, React, MySQL, basic MongoDB, Git, HTML, CSS, Bootstrap, Tailwind CSS'}
                  </p>
                </section>
                {/* Kalbos */}
                <section className="mb-4 w-[35%]">
                  <h4 className="p-0.5 pl-2 mb-2 font-light bg-gray-200">
                    {language === 'lt' ? 'KALBOS' : 'LANGUAGES'}
                  </h4>
                  <p>
                    <strong>
                      {language === 'lt' ? 'Lietuvių:' : 'Lithuanian:'}
                    </strong>{' '}
                    {language === 'lt' ? 'gimtoji' : 'native'}
                  </p>
                  <p>
                    <strong>
                      {language === 'lt' ? 'Anglų:' : 'English:'}
                    </strong>{' '}
                    {language === 'lt'
                      ? 'supratimas – gerai, kalbėjimas – vidutiniškai'
                      : 'good comprehension, intermediate speaking'}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Atsisiuntimo mygtukas */}
      <div className="flex gap-1 mb-2 print:hidden">
        <button
          onClick={handleDownload}
          className="relative inline-block px-8 py-2 mt-8 mb-10 font-medium text-sm md:text-lg text-primary-content tracking-widest bg-secondary border-2 border-secondary rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:before:translate-x-full before:content-[''] before:absolute before:inset-0 before:bg-base-content before:transition-transform before:duration-500 before:z-0 hover:text-primary print:hidden"
        >
          <span className="relative z-10">
            {language === 'lt' ? 'Atsisiųsti CV' : 'Download CV'}
          </span>
        </button>
      </div>
    </div>
  </div>
);
}
export default CVPage;