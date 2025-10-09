import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight,ArrowLeft, ExternalLink, Linkedin, Mail} from 'lucide-react';
import projectWordpress from '@/assets/project-wordpress.jpg';
import projectUiDesign from '@/assets/project-ui-design.jpg';
import projectSocialMedia from '@/assets/VergaderzaalMockup.png';
import projectCoding from '@/assets/project-coding.jpg';
import mockupVoice from '@/assets/Mockup_Voice.png';
import mockupProfiel from '@/assets/Mockup_Profiel.png';
import mockupLaptop from '@/assets/Mockup Laptop.png';
import menuMockup from '@/assets/MockupMenu.png';
import laptopIM from '@/assets/LaptopIphoneMockup.png';
import bookingMockup from '@/assets/BookingMockup.png';
import handMockup from '@/assets/HandMockup.png';
import iMacMock from '@/assets/IMacMockup.png';
import mockupFin from '@/assets/mockupFinance.png';
import mockupTra from '@/assets/mockupTraining.png';
import projectSocialInsta from '@/assets/SocialmediaMockUp.png';
import ufinityGeel from '@/assets/Ufinity Team.png';
import ufinityBlauw from '@/assets/Ufinity Projects.png';
import ufinityGroen from '@/assets/Ufinity Professionals.png';
import ufinityPaars from '@/assets/Ufinity Technology.png';
import posikIpad from '@/assets/PosikiPadMock.png';





interface Project {
  title: string;
  description: string;
  showcasedescription: string;
  showcasedescription2: string;
  headerShowcase: string;
  headerShowcase2: string;
  image: string;
  mockups?: string[];
  skills: string[];
  buttonType: 'live' | 'code' | 'none';
  liveUrl?: string;
  challenge: string;
  solution: string;
  improvements: string[];
  results: string;
  projectTitle : string;
}

const projectsData = {
  1: {
    title: "Trattoria Di Pepe",
    description: "Trattoria di Pepe is een gezellig Italiaans restaurant in Berchem dat tot voor kort geen eigen website had. Klanten wisten daardoor vaak niet wat er op het menu stond.Informatie was enkel via telefoon of sociale media te verkrijgen, wat niet altijd handig of overzichtelijk was. Dankzij een nieuwe website kan Trattoria di Pepe nu zijn authentieke Italiaanse aanbod online tonen, waardoor klanten eenvoudig kunnen ontdekken wat het restaurant te bieden heeft.",
    showcasedescription :'Het menu van Trattoria di Pepe is nu volledig online beschikbaar. Bezoekers kunnen gemakkelijk alle gerechten bekijken, van klassieke pasta’s tot authentieke Italiaanse specialiteiten. Zo krijgen klanten een goed beeld van de smaak en kwaliteit van het restaurant nog voordat ze langskomen.',
    showcasedescription2:'De website van Trattoria di Pepe is volledig mobielvriendelijk. Bezoekers kunnen eenvoudig het menu, openingstijden en contactinformatie bekijken op hun smartphone of tablet, waar ze ook zijn.',
    headerShowcase : 'Menu',
    headerShowcase2 : 'Altijd en overal toegankelijk',
    image: mockupLaptop,
    mockups: [menuMockup,laptopIM],
    skills: ["WordPress","Figma","UI/UX Design","Responsive Design" ,"SEO"],
    buttonType: "live", // "live" or "code"
    liveUrl: "https://trattoriadipepe.be/", // Add your live website URL here
    projectTitle : "",
    challenge: "Trattoria di Pepe had geen website klanten konden het menu niet online bekijken en moesten altijd bellen om informatie of reserveringen te krijgen. Dit leidde tot minder zichtbaarheid van het restaurant online en verlies van potentiële klanten die het menu wilden bekijken voordat ze kwamen.",
    solution: "Er is een nieuwe website ontwikkeld met een overzichtelijk menu en duidelijke contactinformatie. Het mobielvriendelijke design zorgt ervoor dat bezoekers ook via smartphone gemakkelijk het menu en de openingstijden kunnen bekijken.",
    improvements: [
      "Nieuwe website met overzichtelijk menu",
      "Mobielvriendelijk design",
      "Professionele online aanwezigheid",
      "Optimalisatie van site snelheid en implementatie van SEO best practices",
    ],
    results: "Klanten kunnen nu direct online het menu bekijken, waardoor het restaurant minder telefoontjes ontvangt voor basisinformatie en het team meer tijd overhoudt voor andere werkzaamheden. De website zorgt voor een professionele online aanwezigheid die de uitstraling van het restaurant versterkt.",
  },

  2: {
    title: "Vergaderzalen Antwerpen & Kontich",
    description: "Ufinity verhuurt vier vergaderruimtes en een trainingsruimte onder de naam UcoWork. Tot nu toe gebeurde dit vooral intern, waardoor aanvragen beperkt bleven. Het kostte bovendien veel tijd om alles handmatig op te volgen. Er was nood aan meer zichtbaarheid en een oplossing die grotendeels zelfstandig kon draaien.",
    showcasedescription :' Voor UcoWork ontwierp ik een mobiele interface die eenvoudig en overzichtelijk blijft, zelfs onderweg. Gebruikers kunnen in enkele klikken een vergaderruimte bekijken, de faciliteiten ontdekken en meteen reserveren. De focus ligt op duidelijke informatie, visuele iconen en een snelle call-to-action, zodat de klant nooit hoeft te zoeken.',
    showcasedescription2:'De reserveringspagina van UcoWork is ontworpen met gebruiksgemak en snelheid als prioriteit. Bezoekers krijgen in één overzicht alle beschikbare zalen te zien met duidelijke prijzen, capaciteit en een directe reserveringsknop. Dankzij de filtermogelijkheden vinden klanten meteen de juiste ruimte, zonder onnodige stappen. Het resultaat is een gestroomlijnde flow die conversies verhoogt en het beheer vereenvoudigt.',
    headerShowcase : 'Mobiele gebruiksvriendelijkheid',
    headerShowcase2 : 'Eenvoudig reserveren',
    image: projectSocialMedia,
    mockups: [handMockup,bookingMockup],
    skills: ["WordPress","Figma","UI/UX Design","Responsive Design" ,"SEO"],
    buttonType: "live", // "live" or "code"
    liveUrl: "https://vergaderzalenantwerpen.be/", // Add your live campaign URL here
    projectTitle : "",
    challenge: "De grootste uitdaging lag in het feit dat de vergaderruimtes en de trainingsruimte van Ufinity niet voldoende zichtbaar waren voor potentiële klanten. Er was dus nood aan een aparte, professionele website die UcoWork als zelfstandig merk kon neerzetten, beter vindbaar zou maken en het verhuurproces efficiënter kon laten verlopen.",
    solution: "Ik ontwierp een concept, gebruiksvriendelijke website voor UcoWork. Elke ruimte heeft een eigen detailpagina met info over capaciteit, faciliteiten en een directe reserveringsknop. Daarnaast werkte ik een SEO-strategie uit met zoekwoorden als vergaderruimte huren [stad], trainingsruimte, coworking space en meeting locatie, zodat UcoWork ook organisch beter gevonden wordt.",
    improvements: [
      "Een duidelijke merkstructuur neergezet waarbij UcoWork als zelfstandig merk naast Ufinity kan bestaan",
      "Een gebruiksvriendelijke navigatie en heldere contentstructuur ontworpen",
      "SEO-zoekwoorden geïntegreerd om beter gevonden te worden in Google",
      "Call-to-actions en een reserveringsflow toegevoegd om het aantal aanvragen te verhogen",
      "Het verhuurproces vereenvoudigd door automatisering en een self-service reserveringssysteem"
    ],
    results: "Het resultaat is een helder en professioneel voorstel dat UcoWork als zelfstandig merk positioneert. Dankzij de aparte website kan het verhuren grotendeels geautomatiseerd verlopen, wordt UcoWork beter vindbaar in Google en wordt het voor klanten eenvoudiger om snel de juiste ruimte te vinden én te reserveren.",
  
  },

    3: {
    title: "Financiële trainingen Antwerpen",
    description: "Financiële Trainingen Antwerpen is een opleidingscentrum dat zich richt op het versterken van kennis en vaardigheden rond persoonlijke financiën en bedrijfsbeheer. Dankzij een nieuwe website zijn de verschillende trainingen nu overzichtelijk online terug te vinden, zodat cursisten eenvoudig kunnen ontdekken welke opleidingen het best bij hun behoeften aansluiten.",
    showcasedescription :'Geïnteresseerden wisten vaak niet welke trainingen er waren. Nu staan alle opleidingen staan overzichtelijk online met thema’s, data en inhoud, zodat bezoekers meteen een goed beeld krijgen van het aanbod.',
    showcasedescription2:'De website geeft het opleidingscentrum een moderne, betrouwbare en toegankelijke uitstraling die aansluit bij de kwaliteit van de trainingen.',
    headerShowcase : 'Duidelijk opleidingsaanbod',
    headerShowcase2 : 'Professionele uitstraling',
    image: iMacMock,
    mockups: [mockupFin, mockupTra],
    skills: ["WordPress","Figma","UI/UX Design","Responsive Design" ,"SEO"],
    buttonType: "live", // "live" or "code"
    liveUrl: "https://financieletrainingenantwerpen.be/", // Add your live application URL here
    projectTitle : "",
    challenge: "Veel geïnteresseerden wisten niet goed welke trainingen er beschikbaar waren of welke thema’s werden behandeld. Informatie was enkel te verkrijgen via telefoon of e-mail, wat onoverzichtelijk en tijdrovend was.",
    solution: "Met de nieuwe website zijn alle trainingen nu duidelijk gebundeld en eenvoudig terug te vinden. Bezoekers kunnen het aanbod ontdekken, meteen meer lezen over de inhoud en zich rechtstreeks inschrijven, wat het proces een stuk gebruiksvriendelijker maakt.",
    improvements: [
      "De toegankelijkheid van informatie",
      "Geïnteresseerden kunnen zelf snel vinden wat ze zoeken en meteen inschrijven.",
      "Het inschrijfproces – dit kan nu rechtstreeks online gebeuren in plaats van via omwegen."
    ],
    results: "",
  },

   4: {
    title: "Spotify Redesign",
    description: "Deze case study richt zich op het verbeteren van de Spotify-mobiele app door het herontwerpen van de interface en het toevoegen van functionaliteiten.",
    showcasedescription :'Gebruikers kunnen nu een nummer zoeken door het in te zingen of te neuriën. Zelfs als ze de titel of artiest niet precies weten, vinden ze zo snel het gewenste nummer. Dit zorgt voor een snellere, eenvoudigere en intuïtieve muziekervaring.',
    showcasedescription2: 'Wanneer je op je account klikt, opent zich je profiel met een dropdownmenu vol handige opties. Gebruikers kunnen snel navigeren naar instellingen, hun favoriete content bekijken of hun persoonlijke voorkeuren aanpassen. Deze functie zorgt voor een overzichtelijke en toegankelijke ervaring, waardoor alle belangrijke accountopties binnen handbereik zijn.',
    headerShowcase : 'Voice functie',
    headerShowcase2 : 'Account instellingen',
    image: projectUiDesign,
    mockups: [mockupVoice,mockupProfiel],
    skills: ["UI/UX Design", "Figma", "Prototyping", "Gebruikersonderzoek", "Wireframing"],
    buttonType: "live", // "live" or "code"
    liveUrl: "", // Add your live prototype URL here
    projectTitle : "",
    challenge: "De uitdaging is om de Spotify-app opnieuw vorm te geven met behulp van design thinking. Je bedenkt een nieuw concept om innovatieve functies te ontwikkelen die de conversie verhogen. Daarbij werk je een compact design system uit met enkel de noodzakelijke componenten",
    solution: "Met mijn redesign heb ik deze behoefte grotendeels opgelost door problemen aan te pakken zoals het niet onthouden van nummers, fouten in afspeellijsten, moeilijke deelopties en een ingewikkelde interface. Zo hoeven gebruikers geen andere apps meer te gebruiken",
    improvements: [
      "In-app Song Voice Search Function → maakt het zoeken makkelijker.",
      "Make Playlist of Favourite Songs → lost problemen met afspeellijsten op.",
      "Liked Songs Sharing → maakt het delen van favoriete nummers eenvoudiger.",
      "Artist Page Play Button → maakt de interface intuïtiever en sneller.",
    ],
    results: "",
  },

  5: {
    title: "Ufinity Instagram visual design",
    description: "Na de rebranding van Ufinity kreeg ik de opdracht om een reeks Instagram carousels te ontwerpen. Het doel was om de vernieuwde merkidentiteit door te trekken naar social media en te zorgen voor een consistente, professionele uitstraling.",
    showcasedescription :'Gebruikers kunnen nu een nummer zoeken door het in te zingen of te neuriën. Zelfs als ze de titel of artiest niet precies weten, vinden ze zo snel het gewenste nummer. Dit zorgt voor een snellere, eenvoudigere en intuïtieve muziekervaring.',
    showcasedescription2: 'Wanneer je op je account klikt, opent zich je profiel met een dropdownmenu vol handige opties. Gebruikers kunnen snel navigeren naar instellingen, hun favoriete content bekijken of hun persoonlijke voorkeuren aanpassen. Deze functie zorgt voor een overzichtelijke en toegankelijke ervaring, waardoor alle belangrijke accountopties binnen handbereik zijn.',
    headerShowcase : 'Voice functie',
    headerShowcase2 : 'Account instellingen',
    image: projectSocialInsta,
    mockups: [ufinityBlauw,ufinityGeel,ufinityGroen,ufinityPaars],
    skills: ["UI/UX Design", "Figma", "Social media" , "Merkstrategie", "Content Creatie"],
    buttonType: "live", // "live" or "code"
    liveUrl: "", // Add your live prototype URL here
    projectTitle : "Carousels in nieuwe huisstijl",
    challenge: "Na de rebranding van Ufinity moest de vernieuwde visuele identiteit consequent worden toegepast op social media. De uitdaging lag in het ontwikkelen van Instagram carousels die niet alleen esthetisch aantrekkelijk waren, maar ook de nieuwe merkwaarden en herkenbaarheid duidelijk communiceerden.",
    solution: "Ik ontwierp een reeks creatieve carousels waarin de nieuwe huisstijl centraal staat. Door het gebruik van consistente typografie, merk­kleuren en beeldmateriaal ontstond een herkenbare visuele lijn. Dit zorgde voor een feed die niet alleen professioneel oogt, maar ook bijdraagt aan de merkherkenning en storytelling van Ufinity.",
    improvements: [
      
    ],
    results: "",
  },

  6: {
    title: "POS Systeem Restaurant",
    description: "Voor mijn hogeschoolproject heb ik een POS-systeem (Point of Sale) ontwikkeld voor restaurants. Medewerkers kunnen inloggen met hun persoonlijke viercijferige code en op een duidelijke, gebruiksvriendelijke interface eenvoudig producten aanduiden en bestellingen invoeren. Het systeem is ontworpen om het bestelproces sneller en efficiënter te maken.",
    showcasedescription :'Gebruikers kunnen nu een nummer zoeken door het in te zingen of te neuriën. Zelfs als ze de titel of artiest niet precies weten, vinden ze zo snel het gewenste nummer. Dit zorgt voor een snellere, eenvoudigere en intuïtieve muziekervaring.',
    showcasedescription2: 'Wanneer je op je account klikt, opent zich je profiel met een dropdownmenu vol handige opties. Gebruikers kunnen snel navigeren naar instellingen, hun favoriete content bekijken of hun persoonlijke voorkeuren aanpassen. Deze functie zorgt voor een overzichtelijke en toegankelijke ervaring, waardoor alle belangrijke accountopties binnen handbereik zijn.',
    headerShowcase : 'Voice functie',
    headerShowcase2 : 'Account instellingen',
    image: posikIpad ,
    mockups: [ufinityBlauw,ufinityGeel,ufinityGroen,ufinityPaars],
    skills: ["UI/UX Design", "Figma", "Prototyping", "Gebruikersonderzoek", "Wireframing"],
    buttonType: "live", // "live" or "code"
    liveUrl: "", // Add your live prototype URL here
    projectTitle : "Mockups",
    challenge: "De grootste uitdaging was om het systeem eenvoudig en duidelijk te maken, zodat iedereen het snel kan leren gebruiken.",
    solution: "De oplossing was een gebruiksvriendelijke lay-out met grote knoppen, duidelijke teksten en foto’s van de producten. Zo kunnen werknemers sneller en met minder fouten werken. Alle gegevens worden veilig opgeslagen, zodat het systeem goed blijft functioneren.",
    improvements: [
      
    ],
    results: "",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[Number(id) as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Niet Gevonden</h1>
          <Link to="/">
            <Button>Terug naar Portfolio</Button>
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
            Terug naar Portfolio
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
                {project.buttonType === 'live' && project.liveUrl ? (
                  <Button 
                    className="bg-primary hover:bg-primary-hover" 
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Bekijk Live
                    </a>
                  </Button>
                ) : null}
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
            <div className={`grid gap-8 ${project.results ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
            <Card className="card-elegant animate-slide-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Uitdaging</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Oplossing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>
            
             {project.results && (
              <Card className="card-elegant animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Resultaten</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.results}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* What I Did */}
      {Number(id) !== 5 && Number(id) !== 6 &&(
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
              Wat Ik Veranderde & Verbeterde
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
      )}

      {/* Photo Carousel - Special treatment for Social Media project */}
      {Number(id) === 5 || Number(id) === 6 &&  project.mockups && project.mockups.length > 0 ? (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
                 {project.projectTitle}
            </h2>
            <Carousel 
              className="w-full animate-scale-in"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {project.mockups.map((mockup, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="card-elegant">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img 
                            src={mockup}
                            alt={`${project.title} foto ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-glow"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      ) : (
        /* Regular Mockups Showcase for other projects */
        project.mockups && project.mockups.length > 0 && (
          <>
            {/* First Mockup - Left Aligned */}
            <section className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
                  Project Showcase
                </h2>
                <Card className="card-elegant animate-slide-up">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="animate-scale-in lg:order-1">
                        <img 
                          src={project.mockups[0]}
                          alt={`${project.title} mockup 1`}
                          className="w-full rounded-2xl shadow-glow"
                        />
                      </div>
                      <div className="animate-fade-in lg:order-2">
                        <h3 className="text-2xl font-semibold mb-4 text-primary">{project.headerShowcase}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.showcasedescription} 
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Second Mockup - Right Aligned */}
            {project.mockups.length > 1 && (
              <section className="py-20 px-6 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                  <Card className="card-elegant animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                          <h3 className="text-2xl font-semibold mb-4 text-primary">{project.headerShowcase2}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {project.showcasedescription2} 
                          </p>
                        </div>
                        <div className="animate-scale-in">
                          <img 
                            src={project.mockups[1]}
                            alt={`${project.title} mockup 2`}
                            className="w-full rounded-2xl shadow-glow"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            )}
          </>
        )
      )}


       {/* Other Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Andere Projecten
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(projectsData)
              .filter(([projectId]) => Number(projectId) !== Number(id))
              .map(([projectId, projectInfo], index) => (
                <Link 
                  key={projectId}
                  to={`/project/${projectId}`}
                  className="group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="card-elegant border-0 overflow-hidden group-hover:shadow-glow transition-smooth h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={projectInfo.image}
                        alt={projectInfo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary-hover transition-smooth">
                        {projectInfo.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {projectInfo.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projectInfo.skills.slice(0, 3).map((skill) => (
                          <span 
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {projectInfo.skills.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                            +{projectInfo.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>


      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-on-scroll animate-fade-in">
            Laten We Samenwerken
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-on-scroll animate-slide-up">
            Klaar om jouw project tot leven te brengen? Ik hoor graag van je.
          </p>
          <div className="animate-on-scroll animate-scale-in flex flex-col sm:flex-row gap-4 justify-center">
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
              <a href="https://www.linkedin.com/in/bilal-lahssini-a17a31235//" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="mr-2" />
                LinkedIn
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
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
              <h3 className="text-2xl font-bold text-primary mb-4">Bilal Lahssini</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
               Junior UX/UI Designer & Web Developer.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/bilal-lahssini-a17a31235/"
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
                <li><a href="/#about" className="text-muted-foreground hover:text-primary transition-smooth">Over mij</a></li>
                <li><a href="/#projects" className="text-muted-foreground hover:text-primary transition-smooth">Projecten</a></li>
                <li><a href="/#skills" className="text-muted-foreground hover:text-primary transition-smooth">Skills</a></li>
                <li><a href="/#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
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

export default ProjectDetail;