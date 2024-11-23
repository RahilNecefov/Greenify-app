import { Sun, Wind, Car, Leaf, DollarSign } from "lucide-react";

const categories = [
  { icon: Sun, label: "Solar Power", color: "bg-green-100 text-green-600" },
  { icon: Wind, label: "Wind Energy", color: "bg-green-100 text-green-600" },
  { icon: Car, label: "Electric Vehicles", color: "bg-green-100 text-green-600" },
  { icon: Leaf, label: "Energy Efficiency", color: "bg-green-100 text-green-600" },
  { icon: DollarSign, label: "Incentives", color: "bg-green-100 text-green-600" },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 animate-fade-up">
      {categories.map(({ icon: Icon, label, color }) => (
        <button
          key={label}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-green-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`p-3 rounded-full ${color} mb-2`}>
            <Icon size={24} />
          </div>
          <span className="text-sm font-medium text-green-800">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;