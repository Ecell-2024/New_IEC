import "./NewNote.css"
const NewNote = () => {
  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading" data-aos="fade-up">
          
          <p className="sectionHeadingP"></p>
        </div>
        <div className="project-boxes-div">
          <div data-aos="fade-up" className="project-box-wrapper">
            <div className="project-box project-box2" id="project-box2">
            <div className="info-div">
                <article className="ProjectHeading">Doc-Man (Extension) </article>
                <p className="ProjectDescription">
                    I&apos;ve built a VS Code Extension that generates comments and readme.md file for your code. This VS Code Extension is extremely useful for converting
                    Long Codes into Smaller Pieces of Readable Summary i.e. readme.md file. Using this tool, one can even
                    Generate Documentation of Entire code.
                </p>
                <div className="project-buttons">
                    <a href="https://github.com/Sakshamjain98/Doc_Man" target="_blank" rel="noreferrer" className="github-redirect"
                        aria-label="Visit Pexelicons on GitHub">
                        <img src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1715791377/github_eu4zz9.svg" alt="github redirect button" />
                    </a>
                    
                </div>
            </div>
              <div className="image-div">
                <img src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1715791807/ad325f5f-7558-46dd-be75-6652fed1a236_q6ujie.webp" alt="Pexelicon website preview image" />
              </div>
            </div>
          </div>


      
          <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box2" id="project-box2">
            <div className="info-div">
                <article className="ProjectHeading">E-Cell KIET</article>
                <p className="ProjectDescription">
                    E-Cell KIET&apos;s React website simplifies event registration with personalized profiles and real-time notifications. The admin portal streamlines management tasks, while Google Analytics integration offers insights for strategic decision-making
                </p>
                <div className="project-buttons">
                    <a href="https://github.com/Ecell-2024/frontend" target="_blank" rel="noreferrer" className="github-redirect"
                        aria-label="Visit Aquaregia on GitHub">
                        <img src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1715791377/github_eu4zz9.svg" alt="github redirect button" />
                    </a>
                 
                </div>
            </div>
              <div className="image-div">
                <img src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1715791594/WhatsApp_Image_2024-05-15_at_22.16.10_5e4f09ff_h8zb9f.jpg" alt="Aquaregia website preview image" />
              </div>
            </div>
          </div>
     
          <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box4" id="project-box4">
            <div className="info-div">
                <article className="ProjectHeading">Code Crafter</article>
                <p className="ProjectDescription">
                    I&apos;ve built an Documentation generating WebApp using gemini API. This WebApp is useful for generating AI-
                    Based Documentation which can be used for summary purposes.Along with this the WebApp have the support of Ai ChatBot.
                </p>
                <div className="project-buttons">
                    <a href="https://github.com/Sakshamjain98/Code_Crafter" target="_blank" rel="noreferrer"
                        className="github-redirect" aria-label="Visit qr generator on github">
                        <img src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1715791377/github_eu4zz9.svg" alt="github redirect button" />
                    </a>
                 
                </div>
            </div>
              <div className="image-div">
                <img src="https://res.cloudinary.com/djc8hwlgb/image/upload/v1715791101/2a576aeb-29fa-4bfb-8cf7-5f8b515c3668_pbmslx.webp" alt="qr generator website preview image" />
              </div>
            </div>
          </div>

      
         

         
        </div>
      </div>
    </section>
  )
}

export default NewNote;
