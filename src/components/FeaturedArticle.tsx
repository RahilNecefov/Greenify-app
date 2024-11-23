import { ArrowRight } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white/90 backdrop-blur-sm border border-[#D3E4FD] shadow-lg p-6 mb-8 animate-fade-up hover:shadow-xl transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
        <div className="w-full h-full bg-[#FDE1D3] opacity-30 rounded-full" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-[#1A1F2C]">Sustainable Living Guide</h2>
      <p className="text-[#7E69AB] mb-4 leading-relaxed">Discover practical ways to create a more sustainable lifestyle while reducing your environmental impact.</p>
      <button className="inline-flex items-center text-sm font-semibold text-white bg-[#9b87f5] hover:bg-[#8B5CF6] transition-colors rounded-lg px-4 py-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
        Read More
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default FeaturedArticle;