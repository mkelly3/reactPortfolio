import React from 'react';
// import mkphoto from '../../assets'

function About() {
    return (
        <div className ="about">
            <div>
            <h1 className='name'>Morgan Kelly</h1>
            {/* <img className='me' src={mkphoto} alt="me" /> */}
            <p> Software Developer with a demonstrated history of working on production web and mobile applications. Deep
                understanding and technical expertise in Computer Science fundamentals, Javascript, ReactJS, NodeJS, MongoDB, CSS,
                HTML and other technologies.</p>
            </div>

            <div className='education'>
            <h2 className='edu'>Education</h2>
            <br />

            <div className='grid-container-profile'>
                <div className='grid-item'>
                    <div className='title-uni'>University Of California, Berkeley</div>
                        <div className='title-concentration'>Full Stack Web Development</div>
            </div>
            <div className="grid-item">
                <div className='title-uni'>Purdue University</div>
                    <div className='title-concentration'>Bachelor of Science: Biological Sciences</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;