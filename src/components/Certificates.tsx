import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialLink: string;
  skills: string[];
};

const Certificates = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "PCAP Programming essentials in Python",
      issuer: "Cisco",
      date: "March 2022",
      credentialLink: "/certificates/PCAP.pdf",
      skills: ["Python", "OOP", "Programming Basics", "Control Flow"],
    },
    {
      id: 2,
      title: "Automation Explorer",
      issuer: "UiPath",
      date: "January 2024",
      credentialLink: "/certificates/UiPath.pdf",
      skills: [
        "RPA",
        "UiPath Studio",
        "Automation Design",
        "Workflow Debugging",
      ],
    },
    {
      id: 3,
      title: "Learn Database with MySQL",
      issuer: "E-Box",
      date: "April 2024",
      credentialLink: "/certificates/SQL.pdf",
      skills: ["MySQL", "SQL Queries", "Database Design", "ER Diagrams"],
    },
    {
      id: 4,
      title: "Salesforce Developer Virtual Internship",
      issuer: "Salesforce",
      date: "June 2024",
      credentialLink: "/certificates/SalesForce.PDF",
      skills: ["Salesforce Platform", "Apex", "SOQL", "Lightning Components"],
    },
  ];

  return (
    <section id="certificates" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certificates</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary-foreground text-primary flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">{certificate.issuer}</span>{" "}
                      • {certificate.date}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <a
                        href={certificate.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        <span>View Credential</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
