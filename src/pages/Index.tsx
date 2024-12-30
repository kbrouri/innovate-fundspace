import { ArrowRight, Users, TrendingUp, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

// Données mockées pour l'exemple
const featuredProjects = [
  {
    id: "1",
    title: "Akoma Earth",
    description: "Une startup algérienne qui propose des solutions durables et écologiques pour un mode de vie plus responsable.",
    category: "Développement Durable",
    image: "https://akoma.earth/wp-content/uploads/2023/09/Akoma-Earth-Logo-1.png",
    progress: 65,
    currentAmount: 3250000,
    goalAmount: 5000000,
  },
  {
    id: "2",
    title: "City Locker",
    description: "Service de consignes intelligentes pour le stockage temporaire de colis et bagages en Algérie.",
    category: "Services Logistiques",
    image: "https://citylocker-algerie.com/wp-content/uploads/2022/12/logo-city-locker.png",
    progress: 80,
    currentAmount: 4000000,
    goalAmount: 5000000,
  },
  {
    id: "3",
    title: "RightNow",
    description: "Plateforme de livraison express innovante développée par Brenco Algérie.",
    category: "E-commerce & Logistique",
    image: "https://rightnow-by-brenco.com/wp-content/uploads/2023/05/logo-rightnow.png",
    progress: 70,
    currentAmount: 3500000,
    goalAmount: 5000000,
  }
];

const Index = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: t('stats.projects'),
    },
    {
      icon: TrendingUp,
      value: "100M DA",
      label: t('stats.invested'),
    },
    {
      icon: Rocket,
      value: "1000+",
      label: t('stats.startups'),
    },
  ];

  const categories = [
    {
      title: t('categories.tech.title'),
      description: t('categories.tech.description'),
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: t('categories.craft.title'),
      description: t('categories.craft.description'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      title: t('categories.energy.title'),
      description: t('categories.energy.description'),
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    },
  ];

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-primary-light max-w-2xl mx-auto mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/submit-project" className="btn-secondary">
                {t('hero.cta.submit')}
              </Link>
              <Link to="/projects" className="btn-primary">
                {t('hero.cta.explore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('featured.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 w-full relative bg-white p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">
                        {project.currentAmount.toLocaleString()} {t('featured.amount')}
                      </span>
                      <span className="text-gray-500">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
          <h2 className="text-3xl font-bold text-center mb-12">{t('categories.title')}</h2>
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