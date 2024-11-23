import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Learn = () => {
  const [progress, setProgress] = useState(30);

  const articles = [
    {
      id: 1,
      title: "Introduction to Solar Panels",
      category: "solar",
      content: "Solar panels are devices that convert sunlight into electricity. They are made up of many solar cells made of silicon that transform sunlight directly into electrical energy.",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Green Energy Basics",
      category: "basics",
      content: "Green energy comes from natural sources such as sunlight, wind, rain, tides, plants, algae and geothermal heat. These energy resources are renewable, meaning they're naturally replenished.",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Solar Panel Installation Guide",
      category: "solar",
      content: "Before installing solar panels, consider factors like roof condition, sunlight exposure, and local regulations. Professional installation is recommended for optimal performance.",
      readTime: "8 min",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 pb-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Learn Green Energy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <h3 className="font-semibold text-green-700 mb-2">Your Progress</h3>
            <Progress value={progress} className="mb-2" />
            <p className="text-sm text-gray-600">{progress}% Complete</p>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <h3 className="font-semibold text-green-700 mb-2">Articles Read</h3>
            <p className="text-2xl font-bold text-green-600">3/10</p>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <h3 className="font-semibold text-green-700 mb-2">Time Spent</h3>
            <p className="text-2xl font-bold text-green-600">45 mins</p>
          </Card>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-white/80">
            <TabsTrigger value="all">All Topics</TabsTrigger>
            <TabsTrigger value="solar">Solar Energy</TabsTrigger>
            <TabsTrigger value="basics">Basics</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.content}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-600">{article.readTime} read</span>
                    <button className="text-green-700 hover:text-green-800 font-medium">Read More →</button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="solar" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.filter(a => a.category === "solar").map((article) => (
                <Card key={article.id} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.content}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-600">{article.readTime} read</span>
                    <button className="text-green-700 hover:text-green-800 font-medium">Read More →</button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="basics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.filter(a => a.category === "basics").map((article) => (
                <Card key={article.id} className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.content}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-600">{article.readTime} read</span>
                    <button className="text-green-700 hover:text-green-800 font-medium">Read More →</button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Navigation />
    </div>
  );
};

export default Learn;