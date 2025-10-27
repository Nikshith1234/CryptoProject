import { Home, Target, BookOpen, CheckSquare, Clipboard, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, color: 'from-blue-500 to-cyan-500' },
    { id: 'aims', label: 'Aims', icon: Target, color: 'from-green-500 to-emerald-500' },
    { id: 'theory', label: 'Theory', icon: BookOpen, color: 'from-orange-500 to-amber-500' },
    { id: 'objective', label: 'Objective', icon: CheckSquare, color: 'from-pink-500 to-rose-500' },
    { id: 'procedure', label: 'Procedure', icon: Clipboard, color: 'from-violet-500 to-purple-500' },
    { id: 'simulation', label: 'Simulation', icon: Sparkles, color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 nav-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center rotate-animation">
              <Sparkles className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AES Crypto Lab
            </span>
          </div>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="md:hidden">
            <select
              value={currentPage}
              onChange={(e) => onNavigate(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-blue-500 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
