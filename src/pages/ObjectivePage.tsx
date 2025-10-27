import { CheckSquare, TrendingUp, Award, Lightbulb } from 'lucide-react';

const ObjectivePage = () => {
  const objectives = [
    {
      category: 'Knowledge Objectives',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      items: [
        'Define symmetric key cryptography and explain its characteristics',
        'Describe the structure and operation of the AES algorithm',
        'Identify the different rounds and transformations in AES encryption',
        'Explain the importance of key size (128, 192, 256 bits) in security'
      ]
    },
    {
      category: 'Application Objectives',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      items: [
        'Encrypt plaintext messages using AES with different key sizes',
        'Decrypt ciphertext back to original plaintext using the correct key',
        'Demonstrate the key distribution process between two parties',
        'Analyze the effect of using incorrect keys during decryption'
      ]
    },
    {
      category: 'Analysis Objectives',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      items: [
        'Compare the security levels of different AES key sizes',
        'Evaluate the challenges in symmetric key distribution',
        'Assess the computational efficiency of AES encryption',
        'Examine real-world applications of AES in data protection'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-12 slide-up">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          Learning Objectives
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Clear, measurable outcomes you'll achieve through this experiment
        </p>
      </div>

      <div className="mb-12 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-10 shadow-xl slide-up">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
            <CheckSquare className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Primary Goal</h2>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed">
          To develop <strong className="text-green-600">comprehensive understanding and practical skills</strong> in
          implementing symmetric key distribution using AES encryption, enabling students to secure data communication
          in real-world scenarios while understanding the underlying cryptographic principles.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${objective.bgColor} rounded-2xl p-8 shadow-xl slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${objective.color} rounded-xl flex items-center justify-center mr-4 icon-float`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{objective.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {objective.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-md card-hover">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {itemIndex + 1}
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Success Criteria</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
          By completing this experiment successfully, you will be able to:
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Implement</h3>
            <p className="text-base text-gray-600">AES encryption in practice</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Secure</h3>
            <p className="text-base text-gray-600">Distribute keys safely</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-5xl mb-4">��</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Analyze</h3>
            <p className="text-base text-gray-600">Cryptographic security</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Apply</h3>
            <p className="text-base text-gray-600">Knowledge to real scenarios</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivePage;
