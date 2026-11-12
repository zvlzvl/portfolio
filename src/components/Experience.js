import React from 'react';

const Experience = () => {

    return (
        <div className="w-full">
        <div className="pb-8 text-center md:text-left">
            <h2 className="relative inline-block mx-auto text-5xl font-medium transition-all duration-300 text-primary-content group">IT patirtis
                <span className="absolute left-[33%] md:left-0 top-[116%] w-[33%] h-[3px] bg-secondary transition-all duration-300 "></span>
            </h2>
        </div>

        <h5 className="mt-2 text-xl font-bold">IT specialistė | MB „Tangent Z“</h5>
        <span className="text-xl font-thin">2024 06 - dabar</span>
        <p className='text-xl'>
            Kurti bei administruoti įmonės internetinę parduotuvę biolabs.lt. Darbas su „WordPress“. Rūpinuosi parduovės priežiūra, prekių atnaujinimu ir kasdieniu jos veikimu.
        </p>
        <br/>
          <h5 className="mt-2 text-xl font-bold">Jaunesnioji programuotoja | MB "Suavis" </h5>
        <span className="text-xl font-thin">2021 09 - 2024 01</span>
        <p className='text-xl'>
            Kurti bei administruoti įmonės tinklalapį traficero.com. Darbas su Laravel karkasu vidinio
            programavimo ("Back-end") programuotoja. Puslapio funkcionalumo kūrimas, duomenų bazių valdymas,
            funkcionalumo testavimas,
            sukurto WEB dizaino perkėlimas ir adaptavimas prie laravel karkaso.
        </p>

    </div>
    );
};

export default Experience;