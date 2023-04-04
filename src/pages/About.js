import React from "react";
import Typewriter from "typewriter-effect"

function About() {
    const typewrite = [
        {
            text: "HELLO, I'M",
            name: "TESSA STARKWEATHER",
            post: "SOFTWARE DEVELOPER",
            design: "UX/UI DESIGNER",
            desc: "I'm a Full-Stack Web Developer with a passion for tinkering.",
        },
    ]
    return (
        <>
            <section className='text-gray-700 flex items-center justify-center w-screen min-h-screen'>
                {typewrite.map((val, i) => (
                    <div className=' flex flex-col items-center mx-auto justify-center'>
                        <div className="mb-4">
                            <h1 className='text-2xl font-large text-gray-900 dark:text-white' data-aos='fade-right'>
                                {val.text}
                            </h1>
                        </div>
                        <div className="mb-4">
                            <h1 className='text-5xl font-bold tracking-wider text-gray-900 dark:text-white'>
                                <Typewriter
                                    options={{
                                        strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                        </div>
                        <div className="mb-4 text-xl">
                            <p data-aos='fade-left'>{val.desc}</p>
                        </div>

                        <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' data-aos='fade-up-right'>
                            <a href="https://drive.google.com/file/d/1Mv03g5hAHC5_Q4j_buI-cw-VsvG6whlJ/view?usp=sharing" target="_blank">Download Resume</a>
                            
                        </button>
                    </div>
                ))}
            </section>

        </>
    );
}

export default About;