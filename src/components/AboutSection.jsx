import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring web developer crafting modern digital experiences.
            </h3>

            <p className="text-muted-foreground">
             I’m growing my skills in web development and enjoy creating simple, functional, and responsive web projects..
            </p>

            <p className="text-muted-foreground">
             I’m committed to growing as a developer by learning new techniques and building better solutions with each project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

             
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                  <p className="text-muted-foreground"> Designing and implementing complete application systems, 
                    combining robust server-side logic with dynamic, 
                    responsive user interfaces for seamless end-to-end functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database & Server Architecture</h4>
                  <p className="text-muted-foreground">
                    Developing efficient backend systems while integrating them seamlessly with frontend features, 
                    ensuring secure, scalable data management and smooth end-to-end application performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Authentication & API Security</h4>
                  <p className="text-muted-foreground">
                     Building secure authentication flows and protecting APIs across both frontend and backend layers, 
                     applying best security practices to safeguard user data and application integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};