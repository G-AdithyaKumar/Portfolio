import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Task Scheduling App",
      description:
        "An efficient task scheduler with reminders, priority tagging, and real-time syncing across devices.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Firebase", "Tailwind CSS", "MySQL"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      id: 2,
      title: "Source Code Plagiarism Detection",
      description:
        "A web-based tool to detect plagiarism in source code using AST, lexical, and structural similarity techniques.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Python", "Flask", "MySQL", "AST"],
      githubLink:
        "https://github.com/G-AdithyaKumar/Source-Code-Plagiarism-Detector",
      demoLink: "http://192.168.1.5:8501",
    },
    {
      id: 3,
      title: "Intelligent Fault Detection in Wireless Sensor Networks",
      description:
        "A machine learning-based system for detecting faults and anomalies in WSN using environmental metrics.",
      image: "https://images.unsplash.com/photo-1531973968078-9bb02785f13d",
      technologies: ["Python", "Machine Learning", "WSN", "Scikit-learn"],
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden portfolio-card">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary-foreground text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 mt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex items-center gap-1">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
