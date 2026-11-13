import React from 'react';

const Experience = ({language}) => {

    return (
        <div className="w-full">
            <div className="pb-8 text-center md:text-left">
                <h2 className="relative inline-block mx-auto text-5xl font-medium transition-all duration-300 text-primary-content group">{language === 'lt' ? 'IT patirtis' : 'IT Experience'}
                    <span className="absolute left-[33%] md:left-0 top-[116%] w-[33%] h-[3px] bg-secondary transition-all duration-300 "></span>
                </h2>
            </div>

            <h5 className="mt-2 text-xl font-bold">{language === 'lt'
                ? 'IT specialistė | MB „Tangent Z“'
                : 'IT Specialist | Tangent Z'}</h5>
            <span className="text-xl font-thin">{language === 'lt'
                ? '2024 06 – dabar'
                : 'June 2024 – Present'}</span>
            <p className='text-xl'>
                {language === 'lt'
                    ? 'Kurti bei administruoti įmonės internetinę parduotuvę biolabs.lt. Darbas su „WordPress“. Rūpinuosi parduotuvės priežiūra, prekių atnaujinimu ir kasdieniu jos veikimu.'
                    : 'Develop and manage the company’s online store, biolabs.lt, using WordPress. Maintain the store, update products and support its daily operation.'}
            </p>
            <br />
            <h5 className="mt-2 text-xl font-bold">{language === 'lt'
                ? 'Jaunesnioji programuotoja | MB „Suavis“'
                : 'Junior Developer | Suavis'}</h5>
            <span className="text-xl font-thin">{language === 'lt'
                ? '2021 09 – 2024 01'
                : 'September 2021 – January 2024'}</span>
            <p className='text-xl'>
                {language === 'lt'
                    ? 'Kūriau ir administravau įmonės svetainę traficero.com bei prisidėjau prie žiniatinklio programos, skirtos konteinerių gabenimui sekti. Dirbau su Laravel karkasu: kūriau programos funkcionalumą, valdžiau duomenų bazes ir testavau funkcijas. Taip pat perkėliau ir pritaikiau sukurtą dizainą Laravel aplinkoje.'
                    : 'Developed and maintained the company website, traficero.com, and contributed to a web application for tracking container shipments. Worked with the Laravel framework to develop application features, manage databases, and test functionality. Also implemented and adapted the provided design within the Laravel application.'}
            </p>

        </div>
    );
};

export default Experience;