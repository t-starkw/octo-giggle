import React from "react";



export default function ProjectCards(props) {
    return (
        
            <div class="container">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    {props.projects.map((project) => (
                        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article className="overflow-hidden h-full rounded-lg shadow-lg dark:bg-white">
                                <a href={project.repo} target="_blank">
                                    <img alt="Card Image" className="block h-max w-full" src={project.image}></img>
                                </a>
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-xl font-bold">

                                        {project.title}

                                    </h1>
                                    <p className="text-grey-darker text-sm">
                                        4/3
                                    </p>
                                </header>
                                <footer className="flex items-center justify-between leading-none h-min p-2 md:p-4">
                                    <p className="ml-2 text-sm">
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