import React from "react";
import traficeroImg from "../../src/assets/traficero/traficero.png";
import bitmanijaImg from "../../src/assets/bitmanija/bitmanija.png";
import biolabsImg from "../../src/assets/biolabs/biolabs.png";
import {useInView} from "react-intersection-observer";

const ProjectCard = ({language}) => {

    const [ref1, inView1] = useInView({
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
    });
    const [ref2, inView2] = useInView({
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
    });
    const [ref3, inView3] = useInView({
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px",
    });


    return (

        <section className="pt-6 bg-primary-content text-primary" >
            <div className="flex flex-col justify-center px-6 mx-auto max-w-[1150px]">
                <div className="pb-16 text-center">
                    <h2 className="relative inline-block mx-auto text-5xl font-medium transition-all duration-300 text-primary group">{language === 'lt' ? 'Mano projektai' : 'My Projects'}
                        <span className="absolute left-[33%] top-[116%] w-[33%] h-[3px] bg-secondary transition-all duration-300 "></span>
                    </h2>
                </div>
                <div className="space-y-10 ">
                    <section
                        ref={ref1}
                        className={`flex-col md:flex-row items-start justify-around group rounded-lg min-h-[25rem] border  border-black/5 overflow-hidden relative mb-3 sm:mb-8 last:mb-0 flex transition-all duration-700 ease-in-out ${inView1 ? "scale-100 bg-neutral shadow-[0px_0px_5px_0px_rgba(0,0,0,0)]  " : "bg-neutral/60 scale-90 opacity-60"
                            }`}
                    >
                        <div className="flex flex-col order-2 w-full h-full px-5 pt-4 pb-4 md:order-2 sm:pl-10 sm:pr-2 sm:pt-10">
                            <h3 className="text-2xl font-semibold">Biolabs.lt <em class="thin">{language === 'lt'
                                ? 'Internetinė parduotuvė'
                                : 'Online store'}</em></h3>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full">
                                    WordPress
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    Elementor
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    PHP
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    HTML
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    CSS
                                </li>
                            </ul>
                            <div className="leading-relaxed mt-7 text-white/70">
                                <h5 className="font-bold">{language === 'lt'
                                    ? 'Mano funkcijos:'
                                    : 'My responsibilities:'}</h5>
                                <ul>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Naudodama „WordPress“ ir dirbtinio intelekto įrankius, atnaujinau „BioLabs“ internetinę parduotuvę.'
                                            : 'Updated the BioLabs online store using WordPress and AI tools.'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Atnaujinau, papildžiau ir koregavau svetainės funkcionalumą.'
                                            : 'Updated, expanded and adjusted the website’s functionality.'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Šiuo metu administruoju ir prižiūriu svetainę.'
                                            : 'Currently administer and maintain the website.'}
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="flex justify-center order-2 w-full px-5 my-10 sm:p-0 md:order-2">

                            <div className="hidden md:flex w-[90%]  m-5 md:p-0 rounded-lg md:-rotate-[0.08rad] hover:md:-rotate-0 hover:md:scale-110 transition">
                                <a href="https://biolabs.lt/" target="_blank" rel="noopener noreferrer">
                                    <img alt="biolabs" className="object-cover w-full h-full rounded-lg" src={biolabsImg} />
                                    <span className="absolute inset-0 flex items-center justify-center text-lg text-white transition-opacity duration-300 rounded-lg opacity-100 bg-black/60 md:opacity-0 md:hover:opacity-100 md:focus-visible:opacity-100">
                                        {language === 'lt'
                                            ? 'Apsilankyti svetainėje ↗'
                                            : 'Visit website ↗'}
                                    </span>
                                </a>
                            </div>

                            <a href="https://biolabs.lt/" target="_blank" rel="noopener noreferrer">
                                <img alt="biolabs" src={biolabsImg}
                                    className="md:hidden w-[90%] m-5 md:p-0 rounded-lg " />
                            </a>
                        </div>
                    </section>
                    <section
                        ref={ref2}
                        className={`flex-col md:flex-row items-start justify-around group rounded-lg min-h-[25rem] border  border-black/5 overflow-hidden relative mb-3 sm:mb-8 last:mb-0 flex transition-all duration-700 ease-in-out ${inView2 ? "scale-100 bg-neutral shadow-[0px_0px_5px_0px_rgba(0,0,0,0)]  " : "bg-neutral/60 scale-90 opacity-60"
                            }`}
                    >
                        <div className="flex flex-col order-2 w-full h-full px-5 pt-4 pb-4 md:order-2 sm:pl-10 sm:pr-2 sm:pt-10">
                            <h3 className="text-2xl font-semibold">Traficero.com <em class="thin">{language === 'lt'
                                ? '(jūrinių konteinerių sekimo programa)'
                                : '(shipping container tracking application)'}</em></h3>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    Laravel
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    MySQL
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    Back-End
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    Functional Testing
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    PHP Pest
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    PHP
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    HTML
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    CSS
                                </li>
                            </ul>
                            <div className="leading-relaxed mt-7 text-white/70">
                                <h5 className="font-bold">{language === 'lt'
                                    ? 'Mano funkcijos:'
                                    : 'My responsibilities:'}</h5>
                                <ul>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Programos funkcionalumo kūrimas (back-end).'
                                            : 'Development of application functionality (back-end).'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Sukurto ir suprogramuoto dizaino perkėlimas bei pritaikymas „Laravel Blade“ šablonams (front-end).'
                                            : 'Implementation and adaptation of the provided design using Laravel Blade templates (front-end).'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Duomenų apie konteinerių buvimo vietą apdorojimas, saugojimas duomenų bazėse ir pateikimas klientams.'
                                            : 'Processing container location data, storing it in databases and presenting it to clients.'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Klientų prisijungimo sistemos, sekamų konteinerių ataskaitų, pranešimų, filtravimo, rūšiavimo ir duomenų eksporto į „Excel“ kūrimas.'
                                            : 'Development of client login, tracked container reports, notifications, filtering, sorting and data export to Excel.'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Mokėjimo sistemos integravimas.'
                                            : 'Payment system integration.'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'API kūrimas klientams.'
                                            : 'API development for clients.'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Testavimas ir duomenų validacija.'
                                            : 'Testing and data validation.'}
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className="flex justify-center order-2 w-full px-5 my-10 sm:p-0 md:order-2">
                            <div className="hidden md:flex w-[90%]  m-5 md:p-0 rounded-lg md:-rotate-[0.08rad] hover:md:-rotate-0 hover:md:scale-110 transition">
                                <div>
                                    <img alt="traficero" className="object-cover w-full h-full rounded-lg" src={traficeroImg} />
                                    <span className="absolute inset-0 flex items-center justify-center text-lg text-white transition-opacity duration-300 rounded-lg opacity-100 bg-black/60 md:opacity-0 md:hover:opacity-100 md:focus-visible:opacity-100">
                                        {language === 'lt'
                                            ? 'Deja, svetainė nebeveikia.'
                                            : 'Unfortunately, the website is no longer available.'}
                                    </span>
                                </div>
                            </div>

                            <img alt="traficero" src={traficeroImg} className="order-2 md:hidden w-[90%] m-5 md:p-0 rounded-lg" />

                        </div>
                    </section>

                    <section
                        ref={ref3}
                        className={`flex-col md:flex-row items-start justify-around group rounded-lg min-h-[25rem] border  border-black/5 overflow-hidden relative mb-3 sm:mb-8 last:mb-0 flex transition-all duration-700 ease-in-out ${inView3 ? "scale-100 bg-neutral shadow-[0px_0px_5px_0px_rgba(0,0,0,0)]  " : "bg-neutral/60 scale-90 opacity-60"
                            }`}
                    >
                        <div className="flex flex-col order-1 w-full h-full px-5 pt-4 pb-4 sm:pl-10 sm:pr-2 sm:pt-10 md:order-1">
                            <h3 className="text-2xl font-semibold">bitmanija.lt <em class="thin">{language === 'lt'
                                ? 'Internetinė parduotuvė'
                                : 'Online store'}</em></h3>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full">
                                    WordPress
                                </li>
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full ">
                                    Elementor
                                </li>
                            </ul>
                            <div className="leading-relaxed mt-7 text-white/70">
                                <h5 className="font-bold">{language === 'lt'
                                    ? 'Mano funkcijos:'
                                    : 'My responsibilities:'}</h5>
                                <ul>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Svetainės dizaino kūrimas naudojant „WordPress“ ir „Elementor“.'
                                            : 'Website design using WordPress and Elementor.'}
                                    </li>
                                    <li className="list-disc">
                                        {language === 'lt'
                                            ? 'Mokėjimo sistemos integravimas.'
                                            : 'Payment system integration.'}
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="flex justify-center order-2 w-full px-5 my-10 sm:p-0 md:order-2">
                            <div className="hidden md:flex w-[90%]  m-5 md:p-0 rounded-lg md:-rotate-[0.08rad] hover:md:-rotate-0 hover:md:scale-110 transition">
                                <a href="https://bitmanija.lt/" target="_blank" rel="noopener noreferrer">
                                    <img alt="bitmanija" className="object-cover w-full h-full rounded-lg" src={bitmanijaImg} />
                                    <span className="absolute inset-0 flex items-center justify-center text-lg text-white transition-opacity duration-300 rounded-lg opacity-100 bg-black/60 md:opacity-0 md:hover:opacity-100 md:focus-visible:opacity-100">
                                        {language === 'lt'
                                            ? 'Apsilankyti svetainėje ↗'
                                            : 'Visit website ↗'}
                                    </span>
                                </a>
                            </div>

                            <a href="https://bitmanija.lt/" target="_blank" rel="noopener noreferrer">
                                <img alt="bitmanija" src={bitmanijaImg}
                                    className=" order-2 md:hidden w-[90%] m-5 md:p-0 rounded-lg" />
                            </a>
                        </div>
                    </section>


                    {/* <section
                        ref={ref3}
                        className={`flex-col md:flex-row items-start justify-around group rounded-lg min-h-[25rem] border  border-black/5 overflow-hidden relative mb-3 sm:mb-8 last:mb-0 flex transition-all duration-700 ease-in-out ${inView3 ? "scale-100 bg-neutral shadow-[0px_0px_5px_0px_rgba(0,0,0,0)]  " : "bg-neutral/60 scale-90 opacity-60"
                        }`}
                    >
                        <div className="flex flex-col w-full h-full px-5 pt-4 pb-4 sm:pl-10 sm:pr-2 sm:pt-10">
                            <h3 className="text-2xl font-semibold">Studijų baigiamasis projektas <em class="thin"></em></h3>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.55rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                                    Laravel  <a href="https://bitmanija.lt/" target="_blank" rel="noopener noreferrer">
                                    <img alt="bitmanija" className="object-cover w-full h-full rounded-lg" src={bitmanijaImg}/>
                                    <span className="absolute inset-0 flex items-center justify-center text-lg text-white transition-opacity duration-300 rounded-lg opacity-100 bg-black/60 md:opacity-0 md:hover:opacity-100 md:focus-visible:opacity-100">
                                    Apsilankyti svetainėje ↗
                                    </span>
                                </a>
                                </li>

                            </ul>
                            <div className="leading-relaxed mt-7 text-slate-700 dark:text-white/70">
                                <h5>Mano funkcijos:</h5>
                                <ul>
                                    <li>puslapio funkcionalumo programavimas bei kūrimas (back-end)</li>
                                    <li>sukurto ir suprogramuoto dizaino perkėlimas ir
                                        adaptavimas prie Laravel blade formato (front-end)
                                    </li>
                                    <li>gautų duomenų apie konteinerių buvimo vietą
                                        apdorojimas, susisteminimas į duomenų bazes bei pateikimas klientui
                                    </li>
                                    <li>kliento prisijungimo sistema, jo sekamų konteinerių
                                        ataskaita, pranešimai, filtravimas, rūšiavimas, duomenų eksportavimas į excel
                                    </li>
                                   
                                </ul>
                            </div>

                        </div>
                        <div className="flex justify-center w-full p-5 mt-16 sm:p-0">
                            <img alt="traficero" src={traficeroImg}
                                // className="block sm:absolute top-8 sm:-right-96 md:-right-80 lg:-right-64 sm:w-[40rem] rounded-lg shadow-2xl group-hover:sm:-translate-x-3 group-hover:sm:translate-y-3 group-hover:sm:-rotate-2 group-hover:sm:scale-105 transition"
                                className="w-[90%]  m-5 md:p-0 rounded-lg md:-rotate-[0.08rad] hover:md:-rotate-0 hover:md:scale-110 transition"
                            />
                        </div>
                    </section> */}
                </div>


            </div>


        </section >










    );
};

export default ProjectCard;

