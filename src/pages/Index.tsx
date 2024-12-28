import { ArrowRight, Users, TrendingUp, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Index = () => {
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Projets financés par an",
    },
    {
      icon: TrendingUp,
      value: "100M DA",
      label: "Investis dans l'innovation",
    },
    {
      icon: Rocket,
      value: "1000+",
      label: "Startups accompagnées",
    },
  ];

  const categories = [
    {
      title: "Technologie",
      description: "Solutions numériques innovantes",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "Artisanat",
      description: "Savoir-faire traditionnel",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      title: "Énergies Renouvelables",
      description: "Pour un futur durable",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Financez l'avenir de l'Algérie
            </h1>
            <p className="text-xl text-primary-light max-w-2xl mx-auto mb-8">
              Rejoignez la plus grande plateforme de financement participatif dédiée aux entrepreneurs algériens.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/submit-project" className="btn-secondary">
                Soumettre un projet
              </Link>
              <Link to="/projects" className="btn-primary">
                Explorer les projets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Catégories de projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/projects"
                className="group relative h-64 rounded-lg overflow-hidden card-hover"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-primary-light">
                    {category.description}
                    <ArrowRight className="inline ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;