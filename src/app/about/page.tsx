import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Ivan Kharakhashyan a <span>Python Full Stack Engineer</span>
                  </h2>
                  <p>
                    Hi! My name is Ivan Kharakhashyan. I am a Python Full Stack Engineer, and I am
                    very passionate and dedicated to my work. With 9 years
                    experience as a your expertise, I have acquired the skills and
                    knowledge necessary to make your project a success. I enjoy
                    every step of the design process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    {/* <div className="info-item padd-15">
                      <p>
                        Website : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div> */}
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>ivankharak@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>SSC</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+46 091-4852991</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Holm</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Python</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Django</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>FastAPI</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2010 to 2014
                          </h6>
                          <h4 className="timeline-title">
                            Stockholm University
                          </h4>
                          <p className="timeline-text">
                            Bachelor of Science in Computer Science
                            <br></br>
                            Focused in Web Development and Software Engineering
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Diploma in Civil Engineering
                          </h4>
                          <p className="timeline-text">
                            From 2018 I started my journey to be a Civil
                            Engineer on Shyamoli Ideal Polytechnic Institute. It
                            still Running to Present.
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 to 2019
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2017 I passed SSC Exam from Science Group with
                            GPA- 4.56. My school name was Patgram Anath Bondhu
                            Govt. High School.
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> June 2020 to Present
                          </h6>
                          <h4 className="timeline-title">Peiko | Senior Python Engineer</h4>
                          <p className="timeline-text">
                            • Architected several successful projects of clients (E-Commerce Marketplace, Financial
                              Loan Solution, eLearning, Healthcare)
                              <br></br>
                              <br></br>
                            • Guided and instructed junior developers on industry best practices for writing
                              maintainable and scalable code during meticulous code reviews; led to a 40%
                              increase in code quality and a 25% reduction in technical debt within the TypeScript
                              codebase.
                              <br></br>
                              ...
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> June 2017 to February 2020
                          </h6>
                          <h4 className="timeline-title">Qian | Python Engineer</h4>
                          <p className="timeline-text">
                            • Built a serverless API using Node.js and AWS Lambda functions that connects a web
                              application to a third-party service, such as SendGrid, to send email or SMS
                              notifications
                              <br></br>
                              <br></br>
                            • Developed progressive web apps with React,
                              enhancing mobile user engagement by more than 50%.
                              <br></br>
                              ...
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> August 2014 to March 2017
                          </h6>
                          <h4 className="timeline-title">Toptal Freelancer | Full Stack Developer</h4>
                          <p className="timeline-text">
                            • Worked various Django projects along with HTML,
                            CSS, JavaScript, Bootstrap
                            <br></br>
                            <br></br>
                            • Improved the user experience by implementing infinite scrolling, and smooth animations  
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
