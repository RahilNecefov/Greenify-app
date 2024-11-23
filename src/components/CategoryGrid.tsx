import { Sun, Wind, Car, Leaf, DollarSign } from "lucide-react";

const categories = [
  { icon: Sun, label: "Solar Power", color: "bg-[#FEF7CD] text-[#8B5CF6]" },
  { icon: Wind, label: "Wind Energy", color: "bg-[#E5DEFF] text-[#7E69AB]" },
  { icon: Car, label: "Electric Vehicles", color: "bg-[#D3E4FD] text-[#6E59A5]" },
  { icon: Leaf, label: "Energy Efficiency", color: "bg-[#F2FCE2] text-[#8B5CF6]" },
  { icon: DollarSign, label: "Incentives", color: "bg-[#FDE1D3] text-[#7E69AB]" },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 animate-fade-up">
      {categories.map(({ icon: Icon, label, color }) => (
        <button
          key={label}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-[#D3E4FD] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <div className={`p-3 rounded-full ${color} mb-2`}>
            <Icon size={24} />
          </div>
          <span className="text-sm font-medium text-[#1A1F2C]">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;