import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import BackProjectModal from "@/components/BackProjectModal";
import ProjectProgress from "@/components/ProjectProgress";

// Données mockées pour l'exemple
const mockProject = {
  id: "1",
  title: "Projet Innovation Durable",
  description: "Une solution innovante pour un avenir durable en Algérie.",
  category: "Énergies Renouvelables",
  story: `Notre projet vise à développer une solution innovante dans le domaine des énergies renouvelables.
          Nous croyons en un avenir où l'énergie propre est accessible à tous.
          
          Notre équipe passionnée travaille depuis des mois sur cette technologie unique qui permettra de réduire significativement l'empreinte carbone tout en créant des emplois locaux.`,
  risks: "Comme tout projet innovant, nous faisons face à des défis techniques et réglementaires. Notre équipe expérimentée est préparée à les surmonter.",
  creator: "Équipe Innovation Verte",
  currentAmount: 2500000,
  goalAmount: 5000000,
  backersCount: 125,
  daysLeft: 45,
  images: ["https://images.unsplash.com/photo-1501854140801-50d01698950b"],
};

const ProjectDetails = () => {
  const [isBackingModalOpen, setIsBackingModalOpen] = useState(false);
  const { id } = useParams();

  // Plus tard, nous ajouterons la logique pour récupérer les données du projet depuis l'API
  const project = mockProject;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image du projet */}
          <div>
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Informations du projet */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
              <p className="text-gray-600">{project.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ProjectProgress
                current={project.currentAmount}
                goal={project.goalAmount}
                daysLeft={project.daysLeft}
                backersCount={project.backersCount}
              />
              <Button
                className="w-full mt-4"
                size="lg"
                onClick={() => setIsBackingModalOpen(true)}
              >
                Soutenir ce projet
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Par {project.creator}</h3>
              <div className="text-sm text-gray-500">
                Catégorie : {project.category}
              </div>
            </div>
          </div>
        </div>

        {/* Histoire du projet et risques */}
        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">À propos du projet</h2>
            <div className="prose max-w-none">
              {project.story.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Risques et défis</h2>
            <div className="prose max-w-none">
              <p>{project.risks}</p>
            </div>
          </section>
        </div>

        <BackProjectModal
          isOpen={isBackingModalOpen}
          onClose={() => setIsBackingModalOpen(false)}
          projectTitle={project.title}
        />
      </main>
    </div>
  );
};

export default ProjectDetails;