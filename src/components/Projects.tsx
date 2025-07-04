import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather data, forecasts, and interactive maps using modern web APIs.",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="card-hover p-0 overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      Source Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;