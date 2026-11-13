import React from 'react';

import bit from "../assets/baltic_talents_academy_logo.jpg";
import codeAcademy from "../assets/codeacademylt_logo.jpeg";
import ku from "../assets/klaipeda_university_logo.jpg";

import Projects from "../components/Projects";
import Skills from '../components/Skills';
import Experience from '../components/Experience'; // Import the Experience component

const IndexPage = ({language}) => {



    return (
        <main class="bg-primary ">
            {/* <!-- HERO --> */}
            <section className="px-4 mx-auto text-primary-content pt-28" id="about">
                <div className="flex flex-col w-full px-6 mx-auto max-w-[1150px] ">
                    <h1>
                        <div className="relative inline-block text-3xl md:text-4xl italic font-medium tracking-[7px] leading-[1.05em] my-3 font-medium transition-all duration-300 text-primary-content group">
                            Živilė Vibrė
                            <span className="absolute  bg-secondary left-0 top-[80%] w-[100%] h-[3px] text-3xl italic font-medium tracking-[7px] leading-[1.05em] my-3"></span>
                        </div>
                        <div className="flex items-end gap-3">
                            <div className="text-4xl font-thin md:text-6xl">Full-stack</div>
                            <div className="hidden text-4xl font-medium sm:flex md:text-6xl"> {language === 'lt' ? 'Programuotoja' : 'Developer'} </div>
                        </div>
                        <div className="text-4xl font-medium sm:hidden"> Programuotoja </div>
                        <div className="mt-2 text-xl font-light sm:text-3xl md:text-4xl">{language === 'lt' ? '(jaunesnioji-vidutinio lygio)' : '(Junior to Mid-Level)'}</div>
                    </h1>
                    <p className="mt-4 text-lg">
                        {language === 'lt' ? 'Sveiki, esu Živilė. Mano išsilavinimas ir didžioji dalis darbo patirties susiję su vadyba, tačiau atradusi IT supratau, kad tai sritis, kurioje noriu mokytis ir augti. Daugiausia praktinės patirties įgijau dirbdama „Suavis“, kur kūriau ne tik svetainę, bet ir programos funkcionalumą. Šis darbas man suteikė galimybę pritaikyti programavimo žinias ir daug išmokti sprendžiant realias užduotis.Vėliau savo žinias gilinau mokymuose, kuriuose mokiausi „React“. Taip pat dirbdama MB „Tangent Z“, pasitelkusi „WordPress“ ir dirbtinio intelekto įrankius, atnaujinau „BioLabs“ svetainę. Šiuo metu šiek tiek prisidedu prie jos administravimo ir priežiūros. IT srityje dar ieškau savo krypties. Man patinka mokytis, išbandyti naujus dalykus ir ieškoti sprendimų, todėl norėčiau prisidėti prie įvairių projektų bei įgyti daugiau praktinės patirties.'
                            : "Hi, I’m Živilė. My education and much of my professional experience are in management, but discovering IT showed me a field where I want to keep learning and growing. I gained most of my hands-on experience at Suavis, a software development company, where I worked on both the website and the application’s functionality. This gave me the opportunity to apply my programming knowledge and learn by solving real-world problems. I later developed my skills further through training, where I learned React. While working at Tangent Z, I also updated the BioLabs website using WordPress and AI tools. I currently contribute to its administration and maintenance. I’m still exploring my path in IT. I enjoy learning, trying new things and finding solutions, and I’d love to contribute to a variety of projects while gaining more practical experience."}
                    </p>

                </div>
            </section>

            {/* EDUCATION*/}
            <section className="w-full dark-right-up" id="education"></section>
            <section className="w-full py-6 bg-primary-content text-primary" >
                <div className="px-6 mx-auto max-w-[1150px]">
                    <div className="pb-8 text-center">
                        <h2 className="relative inline-block mx-auto text-5xl font-medium transition-all duration-300 text-primary group"> {language === 'lt' ? 'Išsilavinimas' : 'Education'}
                            <span className="absolute left-[33%] top-[116%] w-[33%] h-[3px] bg-secondary transition-all duration-300 "></span>
                        </h2>
                    </div>

                    <div className='flex flex-wrap pt-6'>
                        <div className="w-full px-2 mb-6 md:w-1/2">
                            <div className="flex items-center mb-4 title">
                                <img className='rounded-lg' height="auto" width="70px" src={bit} alt="Baltijos Technologijų Institutas Logo" />
                                <h3 className="ml-4 text-xl font-semibold">{language === 'lt'
                                    ? 'Baltijos Technologijų Institutas'
                                    : 'Baltic Institute of Technology'}</h3>
                            </div>
                            <h4 className="text-xl italic tracking-[0.5px]">{language === 'lt'
                                ? '2021 01 – 2021 06 · 5,5 mėn. Žiniatinklio programuotojo modulinė profesinio mokymo programa, LTKS IV'
                                : 'January 2021 – June 2021 · 5.5 months. Modular Vocational Training Programme in Web Development, Lithuanian Qualifications Framework Level IV (LTKS IV)'}</h4>
                            <h5 className="mt-3 text-xl font-bold"> {language === 'lt'
                                ? 'Įgyti įgūdžiai / kompetencijos:'
                                : 'Skills and competencies acquired:'}</h5>
                            <p className="mt-2">
                                {language === 'lt'
                                    ? 'Taikyti objektinio programavimo technologiją, kuriant internetinius puslapius tam pritaikyta programavimo kalba. Projektuoti, kurti ir administruoti internetinius puslapius. Kurti ir vykdyti nesudėtingus tinklalapių testavimo atvejus.'
                                    : 'Apply object-oriented programming principles when developing websites using an appropriate programming language. Design, develop and administer websites. Create and run basic website test cases.'}
                            </p>
                            <div className="flex flex-col mt-2">
                                <div>
                                    <span className='font-bold'>{language === 'lt' ? 'Frontend programavimas:' : 'Frontend development:'} </span> HMTL, CSS, Javascript</div>
                                <div><span className='font-bold'>{language === 'lt'
                                    ? 'Objektinis programavimas:'
                                    : 'Object-oriented programming:'} </span> Java</div>
                                <div><span className='font-bold'>{language === 'lt'
                                    ? 'Backend programavimas:'
                                    : 'Backend development:'} </span> {language === 'lt'
                                        ? 'PHP (Laravel), CRUD operacijos, duomenų bazės (MySQL)'
                                        : 'PHP (Laravel), CRUD operations, databases (MySQL)'}</div>
                            </div>
                        </div>

                        <div className="w-full px-2 mb-6 md:w-1/2">
                            <div className="flex items-center mb-4 title">
                                <img className='rounded-lg' height="auto" width="70px" src={codeAcademy} alt="Code Academy Logo" />
                                <h3 className="ml-4 text-xl font-semibold">Code Academy (UAB "Programuok")</h3>
                            </div>
                            <h4 className="text-xl italic tracking-[0.5px]">2 {language === 'lt'
                                ? '2024 09 – 2025 04 · 1088 valandų Jaunesniojo Front-end TypeScript programuotojo ir dirbtinio intelekto kompetencijų programa'
                                : 'September 2024 – April 2025 · 1,088-hour Junior Frontend TypeScript Developer and Artificial Intelligence Skills Programme'}</h4>
                            <h5 className="mt-3 text-xl font-bold">{language === 'lt'
                                ? 'Įgyti įgūdžiai / kompetencijos:'
                                : 'Skills and competencies acquired:'}</h5>
                            <p className="mt-2">
                                {language === 'lt'
                                    ? 'Visapusiški įgūdžiai Frontend ir Backend kūrimui naudojant JavaScript ir TypeScript. Interaktyvaus interneto dizaino, statinių svetainių, interaktyvių žiniatinklio programų, paprastų žaidimų kūrimo įgūdžiai.'
                                    : 'Comprehensive skills in frontend and backend development using JavaScript and TypeScript. Skills in creating interactive web designs, static websites, interactive web applications and simple games.'}
                            </p>
                            <div className="flex flex-col mt-2">
                                <div><span className='font-bold'>{language === 'lt' ? 'Frontend programavimas:' : 'Frontend development:'} </span> {language === 'lt'
                                    ? 'HTML, CSS, JavaScript, TypeScript, DOM manipuliavimas, React.js karkaso konceptai.'
                                    : 'HTML, CSS, JavaScript, TypeScript, DOM manipulation, React.js concepts.'}</div>
                                <div><span className='font-bold'>{language === 'lt'
                                    ? 'Backend programavimas:'
                                    : 'Backend development:'} </span> {language === 'lt'
                                        ? 'Node.js, npm, Express.js, REST API pagrindai, Socket.IO, serverio kūrimas bei CRUD operacijos, duomenų bazės (MongoDB).'
                                        : 'Node.js, npm, Express.js, REST API fundamentals, Socket.IO, server development and CRUD operations, databases (MongoDB).'}</div>
                            </div>
                        </div>

                        <div className="w-full px-2 mb-6 ">
                            <div className="flex items-center mb-4 grow title">
                                <img className='rounded-lg' height="auto" width="70px" src={ku} alt="Klaipėdos Universitetas Logo" />
                                <h3 className="ml-4 text-xl font-semibold">{language === 'lt'
                                    ? 'Klaipėdos universitetas'
                                    : 'Klaipeda University'}</h3>
                            </div>
                            <h4 className="text-xl italic tracking-[0.5px]">{language === 'lt'
                                ? '2002–2006 · Vadybos ir verslo administravimo bakalauras'
                                : '2002–2006 · Bachelor’s Degree in Management and Business Administration'}</h4>
                            <h5 className="mt-3 text-xl font-bold">{language === 'lt'
                                ? 'Įgyti įgūdžiai / kompetencijos:'
                                : 'Skills and competencies acquired:'}</h5>
                            <p className="mt-2">
                                {language === 'lt'
                                    ? 'Įgytos kognityvinės, funkcinės, asmeninės ir etinės kompetencijos bei įgūdžiai gebėti demonstruoti vadybos metodų bei priemonių taikymą nuolat kintančioje aplinkoje dirbant žemiausios ir vidutinės grandies vadovais bet kurioje verslo organizacijoje.'
                                    : 'Developed cognitive, practical, interpersonal and ethical competencies, including the ability to apply management methods and tools in a changing business environment as a first-line or middle manager.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORK & SKILLS */}
            <section className="w-full dark-right-down" id="work"></section>
            <section className="py-6 bg-primary text-primary-content" >
                <div className="flex flex-col gap-10 px-6 mx-auto md:flex-row max-w-[1150px]">
                    <Experience language={language} />
                    <Skills language={language}/>
                </div>

            </section>
            <section className="w-full dark-right-up" id="projects"></section>

            {/* PROJECTS */}
            <Projects language={language}/>

            <section className="w-full dark-right-down"></section>
            {/* CONTACTS */}
            <section className="py-6 bg-primary text-primary-content" id="contacts">
                <div className="flex flex-col justify-center px-6 mx-auto max-w-[1150px]">
                    <div className="text-center ">
                        <h2 className="relative inline-block mx-auto text-5xl font-medium transition-all duration-300 text-primary-content group">{language === 'lt' ? 'Susisiekime' : 'Get in Touch'}
                            <span className="absolute left-[33%] top-[116%] w-[33%] h-[3px] bg-secondary transition-all duration-300 "></span>
                        </h2>
                    </div>
                    <p className='mt-10 text-3xl text-center'>
                        {language === 'lt'
                            ? 'Pasidalinkite savo lūkesčiais bei idėjomis ir aš mielai prisidėsiu prie jų įgyvendinimo.'
                            : 'Share your ideas and expectations, and I’ll be happy to help bring them to life.'} </p>
                    <p className='mt-6 text-6xl text-center tracking-[2px] caveat'>to<span className='text-7xl text-secondary' >@</span>zivile.dev</p>
                </div>
            </section>

        </main >

    );
};

export default IndexPage;
