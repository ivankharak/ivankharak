import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Client Reviews</h2>
            </div>
          </div>
          <div className="row">
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <img src="/imgs/1.webp" className="rounded-image" style={{ borderRadius: '50%' }}/>
                <p>&quot;Comes up with great ideas and suggestions, in addition to the requested work. Highly recommend for anyone needing website work completed.&quot;</p>
                <br></br>
                <h3>Arsenij Pertsov</h3>
                <h5>Tech Lead at MedEvolve</h5>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <img src="/imgs/2.webp" className="rounded-image" style={{ borderRadius: '50%' }}/>
                <p>&quot;I was in a rush and Ivan was VERY fast. The work was excellent. Change requests were handled quickly. Communication was clear, friendly, and professional.&quot;</p>
                <br></br>
                <h3>Marko Bejat</h3>
                <h5>Director at Qian</h5>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <img src="/imgs/3.webp" className="rounded-image" style={{ borderRadius: '50%' }}/>
                {/* <div className="icon"><i className="fa fa-wordpress" /></div> */}
                <p>&quot;Harness the power of Django for your website. Our experts will build a feature-rich and scalable
                  Django site that empowers you to manage content effortlessly and stay ahead in the digital
                  landscape.&quot;</p>
                  <br></br>
                <h3>Mary T. Angelina</h3>
                <h5>Senior Software Engineer</h5>
              </div>
            </div>
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <img src="/imgs/4.webp" className="rounded-image" style={{ borderRadius: '50%' }}/>
                {/* <div className="icon"><i className="fa fa-wordpress" /></div> */}
                <p>&quot;Great final product, great communication, looking forward to the next project. Thank you. Would work with Ivan Kharakhashyan again and highly recommended this person for premium quality frontend development.&quot;</p>
                <br></br>
                <h3>Juan José</h3>
                <h5>Senior Software Engineer</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
