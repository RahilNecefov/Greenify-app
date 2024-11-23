import { ArrowRight } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white border border-green-100 shadow-sm p-6 mb-8 animate-fade-up">
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
        <div className="w-full h-full bg-green-50 opacity-50 rounded-full" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-green-800">Eco-Friendly Living Tips</h2>
      <p className="text-green-700/90 mb-4">Learn practical ways to reduce your carbon footprint and make sustainable choices in your daily life.</p>
      <button className="inline-flex items-center text-sm font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors rounded-lg px-4 py-2">
        Read More
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default FeaturedArticle;