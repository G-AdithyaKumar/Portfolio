
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Book, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg mx-auto text-center mb-10">
            <p className="text-gray-600">
              I am a recent computer science graduate passionate about creating impactful digital experiences. 
              With a strong foundation in both theoretical concepts and practical applications, 
              I'm eager to apply my skills to solve real-world problems through innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary-foreground flex items-center justify-center mb-4">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Career Objective</h3>
                <p className="text-gray-600">
                  Seeking entry-level opportunities to apply my technical skills and contribute to innovative projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary-foreground flex items-center justify-center mb-4">
                  <Book className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education Journey</h3>
                <p className="text-gray-600">
                  Completed my computer science degree with a focus on web development and software engineering.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary-foreground flex items-center justify-center mb-4">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Skills</h3>
                <p className="text-gray-600">
                  Proficient in multiple programming languages and frameworks, with a passion for learning new technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
