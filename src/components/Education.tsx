import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "ACE Engineering College",
      location: "Hyderabad, Telangana",
      duration: "2021 - 2025",
      description:
        "Graduated with honors. Coursework included Data Structures, Algorithms, Web Development, Database Management, and Software Engineering.",
      gpa: "8.6/10",
    },
    {
      id: 2,
      degree: "Secondary Education",
      institution: "Narayana Junior College",
      location: "Hyderabad, Telangana",
      duration: "2019 - 2021",
      description:
        "Completed with distinction in Computer Science, Mathematics, and Physics.",
      gpa: "88%",
    },
    {
      id: 3,
      degree: "Primary Education",
      institution: "St.Peter's Model School",
      location: "Hyderabad, Telangana",
      duration: "2015 - 2019",
      description: "Graduated with excellence in all subjects.",
      gpa: "83%",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item) => (
            <Card
              key={item.id}
              className="border-l-4 border-l-primary hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.degree}
                      </h3>
                      <p className="text-gray-600">
                        {item.institution}, {item.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-sm font-medium text-primary px-3 py-1 bg-primary-foreground rounded-full">
                        {item.duration}
                      </span>
                      <span className="mt-2 font-semibold text-gray-700">
                        GPA: {item.gpa}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
