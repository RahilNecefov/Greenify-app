import { Sun, Wind, Car, Leaf, DollarSign } from "lucide-react";

const categories = [
  { icon: Sun, label: "Solar Power", color: "bg-orange-400" },
  { icon: Wind, label: "Wind Energy", color: "bg-blue-400" },
  { icon: Car, label: "Electric Vehicles", color: "bg-purple-400" },
  { icon: Leaf, label: "Energy Efficiency", color: "bg-green-400" },
  { icon: DollarSign, label: "Incentives", color: "bg-yellow-400" },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 animate-fade-up">
      {categories.map(({ icon: Icon, label, color }) => (
        <button
          key={label}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`p-3 rounded-full ${color} text-white mb-2`}>
            <Icon size={24} />
          </div>
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;