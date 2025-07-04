import { useEffect, useRef } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
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

  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    'UI/UX Design',
    'PostgreSQL & MongoDB'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Passionate Developer & Designer
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 3 years of experience in web development, I specialize in creating 
                modern, scalable applications that deliver exceptional user experiences. 
                I believe in the power of clean code and thoughtful design.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill}
                      className="flex items-center space-x-2 p-3 bg-card rounded-lg card-hover"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl card-hover">
                  <img 
                    src={profilePhoto} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;