import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';
import projectWordpress from '@/assets/project-wordpress.jpg';
import projectUiDesign from '@/assets/project-ui-design.jpg';
import projectSocialMedia from '@/assets/project-social-media.jpg';
import projectCoding from '@/assets/project-coding.jpg';

const projects = [
  {
    id: 1,
    title: "Modern WordPress Website",
    description: "Custom WordPress theme with responsive design and advanced functionality for a local business.",
    image: projectWordpress,
    skills: ["WordPress", "PHP", "Custom Themes", "Responsive Design"]
  },
  {
    id: 2,
    title: "Mobile App UI/UX Design",
    description: "Complete user interface design for a productivity app with intuitive user experience.",
    image: projectUiDesign,
    skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"]
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Comprehensive social media strategy and content management for a startup brand.",
    image: projectSocialMedia,
    skills: ["Social Media", "Content Creation", "Brand Strategy", "Analytics"]
  },
  {
    id: 4,
    title: "Custom Web Application",
    description: "Interactive web application built with modern HTML, CSS, and JavaScript frameworks.",
    image: projectCoding,
    skills: ["HTML/CSS", "JavaScript", "React", "Web Development"]
  }
];

const skills = [
  {
    name: "UX/UI Design",
    description: "Creating intuitive and beautiful user experiences with modern design principles."
  },
  {
    name: "WordPress Development",
    description: "Building custom WordPress websites with themes, plugins, and advanced functionality."
  },
  {
    name: "HTML/CSS Development",
    description: "Crafting pixel-perfect, responsive websites with clean, semantic code."
  },
  {
    name: "Social Media Management",
    description: "Creating engaging content and managing social media presence across platforms."
  }
];

const Portfolio = () => {
  useEffect(() => {
    // Add staggered animation delays to elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, index) => {
      const htmlElement = el as HTMLElement;
      htmlElement.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-gradient absolute inset-0 opacity-90" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hello, I'm <span className="text-accent">Sarah</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up leading-relaxed">
            A passionate designer and developer who creates beautiful, functional digital experiences
          </p>
          <div className="animate-scale-in">
            <Button 
              asChild
              size="lg"
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-smooth text-lg px-8 py-6"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll animate-fade-in">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 animate-on-scroll animate-slide-up">
            Specialized skills to bring your vision to life
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="card-elegant border-0 animate-on-scroll animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 animate-on-scroll animate-slide-up">
            Recent work that showcases my skills and creativity
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="group animate-on-scroll animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="card-elegant border-0 overflow-hidden group-hover:shadow-glow transition-smooth">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-primary group-hover:text-primary-hover transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-on-scroll animate-fade-in">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-on-scroll animate-slide-up">
            Ready to bring your project to life? I'd love to hear from you.
          </p>
          <div className="animate-on-scroll animate-scale-in">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 transition-smooth"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;