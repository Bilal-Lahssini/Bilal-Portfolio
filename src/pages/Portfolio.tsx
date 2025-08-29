import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Palette, Code, Smartphone, Users, Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';
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
    description: "Creating intuitive and beautiful user experiences with modern design principles.",
    icon: Palette
  },
  {
    name: "WordPress Development",
    description: "Building custom WordPress websites with themes, plugins, and advanced functionality.",
    icon: Code
  },
  {
    name: "HTML/CSS Development",
    description: "Crafting pixel-perfect, responsive websites with clean, semantic code.",
    icon: Smartphone
  },
  {
    name: "Social Media Management",
    description: "Creating engaging content and managing social media presence across platforms.",
    icon: Users
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
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for new projects
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hello, I'm <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">Sarah</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up leading-relaxed max-w-3xl mx-auto">
            A passionate <span className="text-accent font-semibold">UX/UI designer</span> and <span className="text-accent font-semibold">developer</span> who creates beautiful, functional digital experiences that users love
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              asChild
              size="lg"
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-smooth text-lg px-8 py-6 group"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 backdrop-blur-sm transition-smooth text-lg px-8 py-6"
            >
              <a href="#about">About Me</a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-12 animate-slide-up">
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Github size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hi! I'm Sarah, a creative professional with over 5 years of experience in digital design and development. 
                I'm passionate about creating user-centered experiences that not only look beautiful but also solve real problems.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey started in graphic design, but I quickly fell in love with the intersection of design and technology. 
                Today, I specialize in UX/UI design, WordPress development, and creating compelling digital experiences 
                that help businesses connect with their audiences.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not designing or coding, you can find me exploring new design trends, learning about emerging 
                technologies, or enjoying a good cup of coffee while sketching new ideas.
              </p>
              <Button className="bg-primary hover:bg-primary-hover group">
                <Mail size={16} className="mr-2" />
                Get In Touch
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
                <img 
                  src={profilePhoto}
                  alt="Sarah Johnson - UX/UI Designer & Developer"
                  className="relative rounded-3xl shadow-glow w-full max-w-md mx-auto"
                />
              </div>
            </div>
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
                className="card-elegant border-0 animate-on-scroll animate-scale-in group hover:scale-105 transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <skill.icon size={32} className="text-primary" />
                    </div>
                  </div>
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
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 transition-smooth group"
            >
              <Mail size={20} className="mr-2" />
              Get In Touch
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Sarah Johnson</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                UX/UI Designer & Developer creating beautiful, functional digital experiences. 
                Let's work together to bring your vision to life.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">Projects</a></li>
                <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth">Skills</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">UX/UI Design</li>
                <li className="text-muted-foreground">WordPress Development</li>
                <li className="text-muted-foreground">Web Development</li>
                <li className="text-muted-foreground">Social Media Management</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Sarah Johnson. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;