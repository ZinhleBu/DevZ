import React from 'react';
import Project from './Project/Project';

const projects = [
    {
        id: '0',
        name: 'Johannesburg Art Gallery Website',
        slug: 'jag',
        category: 'Web Design, UX/UI',
        image: '/images/jag.jpg',
        brand: 'Johannesburg Art Gallery',
        description: 'I created this website design as an upgrade to their current website. ',
    },
    {
        id: '1',
        name: 'Thema Agency Website Design',
        slug: 'thema',
        category: 'Web Design, UX/UI',
        image: '/thema-landing.jpg',
        brand: 'Thema Agency',
        description: 'A website design for a made up agency. ',
    },
    
];

const Projects = () => {
    return (
        <main>
            <div className="container">
         
                {projects.map((project) => (
                    <div item="true" key={project.id}>
                        <Project project={project} />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Projects;
