import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="section-fade visible">
          <div className="animate-float mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 mb-8">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">YN</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code and elegant design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-secondary transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;