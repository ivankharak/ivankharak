
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/me.png"
              alt="Ivan Kharak Profile"
              className="shadow-dark"
            />
            <h1>Ivan Kharakhashyan</h1>
            <p>Python Full Stack Engineer</p>
            <div className="social-links">
              {/* <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a> */}
              {/* <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a> */}
              <a href="mailto:ivankharak@gmail.com" target="_blank">
                <i className="fa fa-envelope-o" />
              </a>
              <a href="https://github.com/ivankharak" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://join.skype.com/invite/rAQ2UROCQ49S" target="_blank">
                <i className="fa fa-skype" />
              </a>
              {/* <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a> */}
              {/* <a href="https://linkedin.com/in/" target="_blank">
                <i className="fa fa-linkedin" />
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
