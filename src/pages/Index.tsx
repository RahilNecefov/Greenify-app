import FeaturedArticle from "@/components/FeaturedArticle";
import CategoryGrid from "@/components/CategoryGrid";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 pb-20">
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 px-4 py-6 sticky top-0 z-10">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-green-800">Greenify</h1>
          <p className="text-green-600 mt-1">Empowering Your Green Journey</p>
        </div>
      </header>
      
      <main className="max-w-lg mx-auto px-4 py-6">
        <FeaturedArticle />
        
        <h2 className="text-xl font-semibold text-green-800 mb-4">Quick Categories</h2>
        <CategoryGrid />
      </main>
      
      <Navigation />
    </div>
  );
};

export default Index;