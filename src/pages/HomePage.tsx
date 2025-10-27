import { Lock, Key, Shield, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-12 slide-up">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Symmetric Key Distribution
        </h1>
        <h2 className="text-4xl font-semibold text-gray-700 mb-4">
          with AES Encryption
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore the fascinating world of cryptography and learn how Advanced Encryption Standard (AES)
          secures data communication through symmetric key distribution
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="card-hover bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 icon-float">
            <Lock className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Secure Communication</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Learn how AES ensures confidential data transmission between parties using symmetric encryption
          </p>
        </div>

        <div className="card-hover bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 icon-float delay-1">
            <Key className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Key Distribution</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Understand the mechanisms for safely distributing symmetric keys between communicating parties
          </p>
        </div>

        <div className="card-hover bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 icon-float delay-2">
            <Shield className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Strong Protection</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience industry-standard encryption that protects sensitive information worldwide
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 rounded-2xl p-10 shadow-xl slide-up">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">What You'll Learn</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <ArrowRight className="text-orange-500 flex-shrink-0 mt-1" size={24} />
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>AES Algorithm:</strong> Understand the structure and working of Advanced Encryption Standard
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <ArrowRight className="text-pink-500 flex-shrink-0 mt-1" size={24} />
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Symmetric Keys:</strong> Master the concept of shared secret keys for encryption/decryption
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <ArrowRight className="text-purple-500 flex-shrink-0 mt-1" size={24} />
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Key Distribution:</strong> Learn secure methods for exchanging cryptographic keys
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <ArrowRight className="text-blue-500 flex-shrink-0 mt-1" size={24} />
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Practical Application:</strong> Run interactive simulations to encrypt and decrypt messages
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="inline-block animate-bounce">
          <p className="text-xl text-gray-600 font-semibold">
            🔐 Ready to explore cryptography? Use the navigation above to begin! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
