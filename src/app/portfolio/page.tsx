"use client";

import type { NextPage } from "next";
import { useState } from "react";
import DescriptionModal from "@/components/Description/DescriptionModal";

const Portfolio: NextPage = () => {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  // Define an array of portfolio items with unique content
  const portfolioItems = [
    {
      image: "/imgs/portfolio/1.jpg",
      title: "AtHotel",
      description: "I successfully tackled significant challenges as a Full Stack and AI Developer. I developed a sophisticated AI-driven algorithm to enhance user interfaces and streamline content curation, enabling global scalability and improving user engagement. My expertise in React was pivotal in building responsive and dynamic user interfaces that are both efficient and scalable.",
      skills: ["React", "Next.js", "Django", "Python", "Artificial Intelligence"],
      demoLink: "https://athotel.com/"
    },
    {
      image: "/imgs/portfolio/2.jpg",
      title: "BURROW",
      description: "I contributed to developing this web platform that connects families caring for elder individuals with senior care professionals and provides guidance throughout the journey.",
      skills: ["React", "Next.js", "Python", "Django", "HIPAA"],
      demoLink: "https://olera.care/"
    },
    {
      image: "/imgs/portfolio/3.jpg",
      title: "E-commerce site and internal production management system",
      description:  "Modernized a decade-old legacy Django project from a monolithic architecture to a microservice design using Django Rest Framework and React/Nextjs for the frontend (Project stack - Django, Django Rest Framework, React, Next.", 
      skills: ["API Integration", "Django", "Docker", "RESTful Architecture", "Web Appliction", "PostgreSQL", "Ecommerce Website", "Python", "React", "Terraform", "Amazon EC2"],
      demoLink: "https://makemy.freshstaging.info/"
    },
    {
      image: "/imgs/portfolio/4.jpg",
      title: "Roomster - Real Estate",
      description: "Roomster is an Airbnb-like social platform for people around the world who are looking for roommates to live with. It has 5+ million active listings in different countries all over the world and 3+ million active users every month. It has a website built with Python/Flask, and React.",
      skills: ["React", "Typescript", "Flask", "Python", "SQLAlchemy", "Celery", "RabbitMQ", "Amazon Web Services", "Kubernetes", "Next.js", "RESTful API", "Socket.io", "Jest", "Mapbox", "GIS"],
      demoLink: "https://www.roomster.com/"
    },
    {
      image: "/imgs/portfolio/5.jpg",
      title: "ORION Trading Terminal",
      description: "Develop and maintain high-performance, scalable, and user-friendly trading terminal for ORION.",
      skills: ["React", "Defi", "Node.js"],
      demoLink: "https://trade.orion.xyz/"
    },
    {
      image: "/imgs/portfolio/6.jpg",
      title: "Stringboard: Visual Sales CRM",
      description: "As a full stack developer, I contributed to the development of Stringboard, a tool designed to address the increasing complexity of enterprise sales cycles. My role involved building the platform's interactive features, such as visual stakeholder maps, and ensuring that these elements are integrated smoothly with the backend systems that handle data management and analytics. This functionality allows sales teams to create detailed profiles of each stakeholder and track their individual journeys towards making a purchasing decision.",
      skills: ["React", "CRM Development", "Node.js", "CRM Software"],
      demoLink: "https://stringboard.it/"
    },
    // Add more portfolio items as needed
  ];

  // Function to handle portfolio item click
  const handlePortfolioItemClick = (index: number) => {
    setSelectedModal(index); // Set the selected modal index
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedModal(null); // Reset selected modal index to close the modal
  };

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row">
            {/* Render portfolio items */}
            {portfolioItems.map((item, index) => (
              <div key={index} className="portfolio-item padd-15" data-category="web-design">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={item.image} alt={`portfolio-${index}`} />
                  </div>
                  <div className="portfolio-info" onClick={() => handlePortfolioItemClick(index)}>
                    <h4>Click Here</h4>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render modal for the selected portfolio item */}
      {selectedModal !== null && (
        <DescriptionModal
          isOpen={true} // Set isOpen to true to open the modal
          handleClose={handleCloseModal}
          title={portfolioItems[selectedModal].title}
          description={portfolioItems[selectedModal].description}
          skills={portfolioItems[selectedModal].skills}
          image={portfolioItems[selectedModal].image}
          demoLink={portfolioItems[selectedModal].demoLink}
        />
      )}
    </div>
  );
};

export default Portfolio;