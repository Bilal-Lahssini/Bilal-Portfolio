import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, Palette, Code, Smartphone, Users, Mail, Github, Linkedin, Twitter, Quote } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';
import mockupLaptop from '@/assets/Mockup Laptop.png';
import { AnimatedText } from '@/components/AnimatedText';
import { motion } from 'framer-motion';
import projectUiDesign from '@/assets/project-ui-design.jpg';
import projectSocialMedia from '@/assets/VergaderzaalMockup.png';
import projectCoding from '@/assets/project-coding.jpg';
import iMacMock from '@/assets/IMacMockup.png';
import projectSocialInsta from '@/assets/SocialmediaMockUp.png';
import posikIpad from '@/assets/PosikiPadMock.png';
const projects = [
  {
    id: 1,
    title: "Trattoria Di Pepe",
    description: "Trattoria di Pepe is een gezellig Italiaans restaurant in Berchem dat tot voor kort geen eigen website had",
    image: mockupLaptop,
    skills: ["WordPress","Figma","UI/UX Design","Responsive Design"]
  },
  {
    id: 2,
    title: "Vergaderzalen Antwerpen & Kontich",
    description: "UcoWork, gelegen in Veldkant 13, 2550 Kontich biedt flexibele ruimtes aan, perfect voor vergaderingen, brainstormsessies en trainingen.",
    image: projectSocialMedia,
    skills: ["WordPress","Figma","UI/UX Design","Responsive Design"]
  },

    {
    id: 3,
    title: "Financiële trainingen Antwerpen",
    description: "Financiële Trainingen Antwerpen is een opleidingscentrum dat zich richt op het versterken van kennis en vaardigheden rond persoonlijke financiën en bedrijfsbeheer.",
    image: iMacMock,
    skills: ["WordPress","Figma","UI/UX Design","Responsive Design" ,"SEO"]
  },

  {
    id: 4,
    title: "Spotify Redesign",
    description: "Deze case study richt zich op het verbeteren van de Spotify-mobiele app door het herontwerpen van de interface en het toevoegen van functionaliteiten.",
    image: projectUiDesign,
    skills: ["UI/UX Design", "Figma", "User Research"]
  },

  {
    id: 5,
    title: "Ufinity Instagram Visual Design",
    description: "Ontwerp van creatieve Instagram-posts met focus op merkidentiteit en visuele samenhang. Door gebruik van typografie, kleur en beeld ontstaat een consistente en herkenbare feed.",
    image: projectSocialInsta,
    skills: ["UI/UX Design", "Figma", "Social Media", "Content Creatie", "Merkstrategie"]
  },

  {
    id: 6,
    title: "POS Systeem Restaurant",
    description: "Een eenvoudig en snel POS-systeem speciaal ontwikkeld voor de verkoop van eten. Het maakt het afrekenen makkelijk en efficiënt, zodat je klanten vlot bediend worden.",
    image: posikIpad,
    skills: ["UI/UX Design", "Figma", "Prototyping", "Gebruikersonderzoek", "Wireframing"]
  },

];

const skills = [
  {
    name: "UX/UI Design",
    description: "Het creëren van intuïtieve en mooie gebruikerservaringen met moderne ontwerpprincipes.",
    icon: Palette
  },
  {
    name: "WordPress Development",
    description: "Wordpress websites bouwen met behulp van , plugins, en geavanceerd functionaliteiten.",
    icon: Code
  },
  {
    name: "HTML/CSS Development",
    description: "Het creëren van responsieve websites met schone, duidelijke code.",
    icon: Smartphone
  },
  {
    name: "Social Media Management",
    description: "Het creëren van boeiende content en het beheren van de aanwezigheid op sociale media op alle platforms.",
    icon: Users
  }
];

const testimonials = [
  {
    id: 1,
    name: "Abraham Kucam",
    role: "Eigenaar, Trattoria Di Pepe",
    content: "Bilal heeft onze visie perfect vertaald naar een prachtige website. De samenwerking verliep soepel en het eindresultaat overtrof onze verwachtingen. Onze online aanwezigheid is nu professioneel en trekt meer klanten aan.",
    rating: 5
  },
];

const Portfolio = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el, index) => {
      const htmlElement = el as HTMLElement;
      htmlElement.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
              Beschikbaar voor nieuwe projecten
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 animate-fade-in min-h-[120px] md:min-h-[200px] flex items-center justify-center">
            <AnimatedText 
              texts={[
                "Hallo, ik ben Bilal", 
                "Web Designer", 
                "Frontend Developer", 
                "UX/UI Designer", 
                "Creative Developer", 
                "WordPress Developer"
              ]} 
              speed={2500}
            />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up leading-relaxed max-w-3xl mx-auto">
            die jou projecten in werkelijkheid brengt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              asChild
              size="lg"
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-smooth text-lg px-8 py-6 group"
            >
              <a href="#projects" className="flex items-center gap-2">
                Bekijk mijn projecten
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 backdrop-blur-sm transition-smooth text-lg px-8 py-6"
            >
              <a href="#about">Over mij</a>
            </Button>
          </div>
          
        
        </div>
      </section>

      {/* About Me Section */}
      <motion.section 
        id="about" 
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="animate-fade-in"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-primary">Over mij</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hallo, ik ben Bilal met een achtergrond in informaticabeheer en meer dan 3 jaar ervaring in digitaal design, help ik ondernemers om
                hun ideeën om te zetten in een professionele online uitstraling. 
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Mijn klanten zijn vaak zelfstandigen of kleine bedrijven die hun eerste serieuze stap willen zetten naar een krachtig merk. 
                Ik begeleid hen van idee tot realisatie en stel kritische vragen, 
                zodat we samen helder krijgen wat er écht nodig is om hun verhaal online goed over te brengen.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Je kunt van mij een persoonlijke aanpak verwachten: 
                ik luister naar jouw wensen, denk strategisch mee en werk zorgvuldig tot in de details. 
                Het resultaat is een website die niet alleen bij jou past, maar ook jouw klanten overtuigt.
              </p>
            </motion.div>
            
            <motion.div 
              className="animate-scale-in"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
                <img 
                  src={profilePhoto}
                  alt="Bilal Lahssini - UX/UI Designer & Developer"
                  className="relative rounded-3xl shadow-glow w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 animate-on-scroll animate-fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Wat ik doe
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground text-center mb-16 animate-on-scroll animate-slide-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Vaardigheden om jou visie in werkelijk te brengen.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.6,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="card-elegant border-0 animate-on-scroll animate-scale-in group hover:scale-105 transition-smooth">
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 px-6 bg-muted/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 animate-on-scroll animate-fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Een selectie van projecten waar ik aan bijdroeg
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground text-center mb-16 animate-on-scroll animate-slide-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Projecten en skills die mijn creativiteit in de kijker zetten
          </motion.p>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay:3000,
                stopOnInteraction : false,
                stopOnMouseEnter : true,
              })
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3">
                  <Link 
                    to={`/project/${project.id}`}
                    className="group animate-on-scroll animate-scale-in block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="card-elegant border-0 overflow-hidden group-hover:shadow-glow transition-smooth h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </motion.section>

        {/* Testimonials Section */}
      <motion.section 
        id="testimonials" 
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Wat Klanten Zeggen
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Reviews van mensen die ik heb geholpen
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15 + 0.6,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="card-elegant border-0 h-full group hover:scale-105 transition-smooth">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Quote size={32} className="text-primary/30" />
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6 animate-on-scroll animate-fade-in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Laten We Samenwerken
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8 animate-on-scroll animate-slide-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Klaar om jouw project tot leven te brengen? Ik hoor graag van je.
          </motion.p>
          <motion.div 
            className="animate-on-scroll animate-scale-in flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 transition-smooth group"
            >
              <a href="mailto:Bilal.Lahssini@hotmail.com">
                <Mail size={20} className="mr-2" />
                Neem Contact Op
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 transition-smooth group"
            >
              <a href="https://www.linkedin.com/in/bilal-lahssini-a17a31235/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="mr-2" />
                LinkedIn
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Bilal Lahssini</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
               Junior UX/UI Designer & Web Developer.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/bilal-lahssini-a17a31235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Linkedin size={20} />
                </a>
              
                <a 
                  href="mailto:Bilal.Lahssini@hotmail.com" 
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Snelle Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">Over mij</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">Projecten</a></li>
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
              © 2025 Lahssini Bilal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;