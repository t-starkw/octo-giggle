import React from "react";
import ProjectCards from "../components/projects";

const projects = [

    {
        id: 0,
        title: "Book Search",
        tools: ["HTML", "CSS", "JavaScript", "MERN", "GraphQL"],
        image: "./images/graphql.png",
        description: "A browser-based application that allows users to randomly generate strong passwords based on window prompts.",
        repo: "https://github.com/t-starkw/graphic-ql",
    },

    {
        id: 1,
        title: "J.A.T.E",
        tools: ["Node", "Express", "Babel", "Webpack", "Workbox", "IndexedDB"],
        image: "./images/JATE.png",
        description: "JATE is a single-page text editor application that runs in the browser. This application meets PWA criteria and features multiple data persistence techniques.",
        repo: "https://github.com/t-starkw/snippet",
    },
    {
        id: 2,
        title: "PPLUS",
        tools: ["HTML", "CSS", "JavaScript", "MERN", "GraphQL", "TailwindCSS"],
        image: "./images/PPLUS.png",
        description: "A password generating and storage application. Users can generate custom passwords and assign them to various apps and services.",
        repo: "https://github.com/t-starkw/pplus",
    },

    {
        id: 3,
        title: "JsCafe",
        tools: ["JavaScript", "MongoDB", "Mongoose", "Express"],
        image: "./images/JSCAFE.png",
        description: "An online MERN stack cafe site. Allows users to login and order menu items, view their favorites, and earn rewards for purchases. ",
        repo: "https://github.com/t-starkw/jsCafe",
    },
    {
        id: 4,
        title: "LibScrib",
        tools: ["Node", "Express", "MySQL", "Bcrypt", "Handlebars"],
        image: "./images/LIBSCRIB.png",
        description: "LibScrib is a library and reviewing platform for bookworms. Users can search for books, make an account, and leave their own reviews. ",
        repo: "https://github.com/smfitz/Project-2-restAPI-group-4",
    },
    {
        id: 5,
        title: "Tech Talk",
        tools: ["JavaScript", "MySQL", "Express", "Node", "Bcrypt", "Handlebars"],
        image: "./images/TechTalk.png",
        description: "A tech blog where users can create and personalize an account, post, and comment on other users posts.",
        repo: "https://github.com/t-starkw/what-the-tech",
    },
]

function Work() {
    return (

        <section className="flex items-center justify-center w-screen mt-28">
                <ProjectCards projects={projects} />
        </section>


    );
}

export default Work;