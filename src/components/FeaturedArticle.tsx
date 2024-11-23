import { ArrowRight } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary text-white p-6 mb-8 animate-fade-up">
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
        <div className="w-full h-full bg-white opacity-10 rounded-full" />
      </div>
      <h2 className="text-2xl font-bold mb-2">The Future of Solar Energy</h2>
      <p className="text-white/90 mb-4">Discover how solar technology is revolutionizing clean energy production and making it more accessible than ever.</p>
      <button className="inline-flex items-center text-sm font-semibold bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-4 py-2">
        Read More
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default FeaturedArticle;