import { Target, Zap, Users, BookCheck } from 'lucide-react';

const AimsPage = () => {
  const aims = [
    {
      icon: Target,
      title: 'Master AES Encryption',
      description: 'Develop a comprehensive understanding of the Advanced Encryption Standard (AES) algorithm, its structure, and its role in modern cryptography.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Zap,
      title: 'Symmetric Key Concepts',
      description: 'Learn the principles of symmetric key cryptography where the same key is used for both encryption and decryption of data.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Users,
      title: 'Key Distribution Methods',
      description: 'Explore various techniques for securely distributing symmetric keys between communicating parties in a network.',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50'
    },
    {
      icon: BookCheck,
      title: 'Practical Implementation',
      description: 'Apply theoretical knowledge through hands-on simulations to encrypt and decrypt messages using AES with different key sizes.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-12 slide-up">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Aims of the Experiment
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our primary goals in studying symmetric key distribution with AES encryption
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {aims.map((aim, index) => {
          const Icon = aim.icon;
          return (
            <div
              key={index}
              className={`card-hover bg-gradient-to-br ${aim.bgColor} p-8 rounded-2xl shadow-lg slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${aim.color} rounded-xl flex items-center justify-center mb-4 icon-float`}>
                <Icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{aim.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{aim.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Overall Mission</h2>
        <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-6">
          This experiment aims to provide a <strong className="text-purple-600">holistic understanding</strong> of
          symmetric key cryptography using AES, from theoretical foundations to practical applications.
          By the end of this lab, students will be able to:
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-3 text-center">🎯</div>
            <p className="text-lg text-gray-700 text-center font-semibold">
              Explain AES algorithm components
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-3 text-center">🔑</div>
            <p className="text-lg text-gray-700 text-center font-semibold">
              Implement key distribution securely
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-3 text-center">💡</div>
            <p className="text-lg text-gray-700 text-center font-semibold">
              Analyze cryptographic security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimsPage;
