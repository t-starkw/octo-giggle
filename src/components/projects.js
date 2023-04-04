import React from "react";



export default function ProjectCards(props) {


    return (

        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -mx-1 lg:-mx-4 ">
                {props.projects.map((project) => (
                    <div class="my-1 px-1 mb-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden border border-solid border-cyan-900/30 border-4 h-full rounded-lg shadow-lg bg-white dark:bg-white transform transition duration-500 hover:scale-105 ">
                            <a href={project.repo} target="_blank">
                                <img alt="Card Image" className="block  w-full" src={project.image}></img>
                            </a>

                            <header className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
                                <div className="flex flex-row">
                                    {project.tools.map((tool) => (
                                        <p className=" flex flex-row text-grey-darker text-sm mb-2">
                                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{tool}</span>
                                        </p>
                                    ))}
                                </div>

                                <h1 className="text-xl font-bold ">

                                    {project.title}

                                </h1>


                            </header>
                            <footer className="flex items-center justify-between leading-none h-min px-2 pb-4">
                                <p className="ml-2 text-sm ">
                                    {project.description}
                                </p>
                            </footer>
                        </article>
                    </div>
                ))}
            </div>
        </div>

    )

}