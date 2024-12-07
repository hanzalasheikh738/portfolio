import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & Typescript based app for managing and organizing your tasks efficiently.",
        img: "/project-03.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Static Interactive Resume",
        desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project-02.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Resume Builder",
        desc: "A Typescript-based interactive resume built with HTML and CSS.",
        img: "/project-01.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container px-4 sm:px-6 lg:px-8 pt-32'>
      <Heading title='My Projects'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
