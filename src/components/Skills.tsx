
import React from 'react';

type Skill = {
  id: number;
  name: string;
  percentage: number;
};

type SkillCategory = {
  id: number;
  title: string;
  skills: Skill[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Programming Languages",
      skills: [
        { id: 1, name: "JavaScript", percentage: 85 },
        { id: 2, name: "HTML & CSS", percentage: 90 },
        { id: 3, name: "Python", percentage: 75 },
        { id: 4, name: "Java", percentage: 65 },
      ]
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      skills: [
        { id: 5, name: "React", percentage: 80 },
        { id: 6, name: "Node.js", percentage: 70 },
        { id: 7, name: "Express", percentage: 65 },
        { id: 8, name: "Tailwind CSS", percentage: 85 },
      ]
    },
    {
      id: 3,
      title: "Tools & Technologies",
      skills: [
        { id: 9, name: "Git & GitHub", percentage: 85 },
        { id: 10, name: "VS Code", percentage: 90 },
        { id: 11, name: "MongoDB", percentage: 70 },
        { id: 12, name: "MySQL", percentage: 75 },
      ]
    },
    {
      id: 4,
      title: "Soft Skills",
      skills: [
        { id: 13, name: "Problem Solving", percentage: 85 },
        { id: 14, name: "Communication", percentage: 80 },
        { id: 15, name: "Teamwork", percentage: 90 },
        { id: 16, name: "Time Management", percentage: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {skillCategories.map((category) => (
              <div key={category.id}>
                <h3 className="text-xl font-bold mb-6 text-gray-800">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
