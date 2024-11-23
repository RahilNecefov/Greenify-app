import FeaturedArticle from "@/components/FeaturedArticle";
import CategoryGrid from "@/components/CategoryGrid";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white border-b border-gray-100 px-4 py-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Greenify</h1>
          <p className="text-gray-600 mt-1">Empowering Your Green Journey</p>
        </div>
      </header>
      
      <main className="max-w-lg mx-auto px-4 py-6">
        <FeaturedArticle />
        
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Categories</h2>
        <CategoryGrid />
      </main>
      
      <Navigation />
    </div>
  );
};

export default Index;