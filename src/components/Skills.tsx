import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container px-4 sm:px-6 lg:px-8 pt-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
            {/* Left Section */}
            <div data-aos="zoom-out-up">
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2 text-base sm:text-lg md:text-xl'>
                  I have a strong command of core web development technologies, including HTML, CSS, and JavaScript. 
                  I excel at creating the structure of web pages using HTML, designing visually appealing and responsive 
                  layouts with CSS, and adding interactivity and dynamic functionality with JavaScript. Additionally, 
                  I am familiar with modern front-end frameworks and responsive design techniques, ensuring that websites 
                  perform seamlessly across all devices. With excellent problem-solving abilities, I am adept at understanding 
                  complex challenges and delivering efficient solutions. My passion for web development and dedication to 
                  continuous learning make me a strong candidate for any web development role.
                </p>
            </div>
            
            {/* Right Section (Skill List) */}
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-3 text-accent text-2xl sm:text-3xl md:text-4xl gap-4'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-out-up">Typescript</h2>
                        <h2 data-aos="zoom-out-up">React.js</h2>
                        <h2 data-aos="zoom-out-up">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-out-up">Tailwind</h2>
                        <h2 data-aos="zoom-out-up">CSS</h2>
                        <h2 data-aos="zoom-out-up">Node.js</h2>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
