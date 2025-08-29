import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import projectWordpress from '@/assets/project-wordpress.jpg';
import projectUiDesign from '@/assets/project-ui-design.jpg';
import projectSocialMedia from '@/assets/project-social-media.jpg';
import projectCoding from '@/assets/project-coding.jpg';

const projectsData = {
  1: {
    title: "Modern WordPress Website",
    description: "A complete WordPress website redesign for a local business, featuring custom themes, responsive design, and enhanced functionality.",
    image: projectWordpress,
    skills: ["WordPress", "PHP", "Custom Themes", "Responsive Design", "SEO"],
    challenge: "The client needed a modern, professional website to replace their outdated design while maintaining their existing content and improving user experience.",
    solution: "I created a custom WordPress theme from scratch, implemented responsive design principles, and added modern functionality including contact forms, gallery sections, and SEO optimization.",
    improvements: [
      "Redesigned the entire user interface with a modern, clean aesthetic",
      "Implemented responsive design for optimal mobile experience",
      "Added custom post types for better content management",
      "Integrated advanced contact forms with spam protection",
      "Optimized site speed and implemented SEO best practices",
      "Added social media integration and sharing capabilities"
    ],
    results: "The new website saw a 150% increase in user engagement and 80% improvement in mobile usability scores.",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "MySQL"],
    timeline: "6 weeks"
  },
  2: {
    title: "Mobile App UI/UX Design",
    description: "Complete user interface and experience design for a productivity mobile application with focus on intuitive navigation and modern aesthetics.",
    image: projectUiDesign,
    skills: ["UI/UX Design", "Figma", "Prototyping", "User Research", "Wireframing"],
    challenge: "Design a productivity app that stands out in a crowded market while maintaining simplicity and ease of use for busy professionals.",
    solution: "Conducted user research, created detailed wireframes, and designed a clean, intuitive interface that prioritizes task management and user productivity.",
    improvements: [
      "Conducted extensive user research and interviews",
      "Created detailed user personas and journey maps",
      "Designed intuitive navigation patterns and information architecture",
      "Developed a cohesive visual design system with consistent components",
      "Created interactive prototypes for user testing",
      "Implemented accessibility best practices throughout the design"
    ],
    results: "User testing showed 95% task completion rate and 4.8/5 satisfaction score for the new design.",
    technologies: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
    timeline: "8 weeks"
  },
  3: {
    title: "Social Media Campaign",
    description: "Comprehensive social media strategy and content management for a growing startup, including brand development and community building.",
    image: projectSocialMedia,
    skills: ["Social Media", "Content Creation", "Brand Strategy", "Analytics", "Community Management"],
    challenge: "Build brand awareness and community engagement for a new startup in a competitive market with limited initial following.",
    solution: "Developed a comprehensive social media strategy with consistent branding, engaging content calendar, and community management practices.",
    improvements: [
      "Created a cohesive brand voice and visual identity across platforms",
      "Developed content calendar with diverse, engaging post types",
      "Implemented hashtag strategies for improved discoverability",
      "Created visually appealing graphics and video content",
      "Established community management protocols and response strategies",
      "Set up analytics tracking and performance monitoring"
    ],
    results: "Achieved 300% follower growth and 450% increase in engagement rates within 3 months.",
    technologies: ["Canva", "Adobe Creative Suite", "Buffer", "Google Analytics", "Meta Business Suite"],
    timeline: "12 weeks ongoing"
  },
  4: {
    title: "Custom Web Application",
    description: "Interactive web application built with modern technologies, featuring real-time data updates and responsive design.",
    image: projectCoding,
    skills: ["HTML/CSS", "JavaScript", "React", "Web Development", "API Integration"],
    challenge: "Build a custom web application with complex data visualization and real-time updates while maintaining excellent performance.",
    solution: "Developed a modern React application with clean architecture, efficient state management, and optimized performance.",
    improvements: [
      "Built responsive, mobile-first design with CSS Grid and Flexbox",
      "Implemented React with TypeScript for type safety and better development experience",
      "Created reusable component library following design system principles",
      "Integrated REST APIs with proper error handling and loading states",
      "Added real-time data updates using WebSocket connections",
      "Optimized bundle size and implemented lazy loading for better performance"
    ],
    results: "Application achieved 98% uptime and 2.1s average load time with excellent user satisfaction.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "WebSocket"],
    timeline: "10 weeks"
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[Number(id) as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-smooth"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary-hover">
                  <ExternalLink size={16} className="mr-2" />
                  View Live
                </Button>
                <Button variant="outline">
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-elegant animate-slide-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.results}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
            What I Changed & Improved
          </h2>
          <div className="space-y-6">
            {project.improvements.map((improvement, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-lg leading-relaxed text-foreground">
                  {improvement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elegant animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elegant animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Timeline</h3>
                <p className="text-2xl font-bold text-accent">{project.timeline}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Interested in working together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
            I'd love to discuss your next project and how I can help bring your vision to life.
          </p>
          <div className="animate-scale-in">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-lg px-8 py-6"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;