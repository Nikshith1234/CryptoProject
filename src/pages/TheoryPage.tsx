import { Lock, Key, Shield, Repeat, Grid3x3, Layers } from 'lucide-react';

const TheoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-12 slide-up">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          Theoretical Foundation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Understanding the science behind AES and symmetric key cryptography
        </p>
      </div>

      <div className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-10 shadow-xl slide-up">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
            <Lock className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">What is AES?</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          <strong className="text-blue-600">Advanced Encryption Standard (AES)</strong> is a symmetric block cipher
          chosen by the U.S. government to protect classified information. It was established by NIST in 2001 and
          has become the encryption standard for securing sensitive data worldwide.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          AES operates on <strong>128-bit blocks</strong> of data and supports key sizes of <strong>128, 192, or 256 bits</strong>.
          The algorithm consists of multiple rounds of substitution, permutation, and mixing operations to transform
          plaintext into ciphertext.
        </p>
      </div>

      <div className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 shadow-xl slide-up">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
            <Key className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Symmetric Key Cryptography</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In symmetric key cryptography, the <strong className="text-green-600">same secret key</strong> is used for
          both encryption and decryption. This approach is faster than asymmetric cryptography but requires secure
          key distribution between parties.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-3">✅ Advantages</h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• High-speed encryption/decryption</li>
              <li>• Efficient for large data volumes</li>
              <li>• Lower computational overhead</li>
              <li>• Simple implementation</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-3">⚠️ Challenges</h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• Key distribution problem</li>
              <li>• Key management complexity</li>
              <li>• No non-repudiation</li>
              <li>• Scalability issues in large networks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">AES Algorithm Structure</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-hover bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 icon-float">
              <Grid3x3 className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">SubBytes</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Non-linear substitution step where each byte is replaced with another using an S-box lookup table
            </p>
          </div>

          <div className="card-hover bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 icon-float delay-1">
              <Repeat className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">ShiftRows</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transposition step that shifts the rows of the state array by different offsets
            </p>
          </div>

          <div className="card-hover bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 icon-float delay-2">
              <Layers className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">MixColumns</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mixing operation that combines the four bytes in each column using matrix multiplication
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 via-orange-50 to-amber-50 rounded-2xl p-10 shadow-xl">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
            <Shield className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Key Distribution Methods</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The main challenge in symmetric cryptography is securely distributing the secret key. Common methods include:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-pink-600 mb-3">🔐 Key Distribution Center (KDC)</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A trusted third party that generates and distributes keys to communicating parties
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-3">🤝 Diffie-Hellman Exchange</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A method for two parties to establish a shared secret over an insecure channel
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-purple-600 mb-3">📦 Pre-shared Keys</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Keys distributed through secure out-of-band channels before communication begins
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-3">🔑 Public Key Infrastructure</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Using asymmetric cryptography to securely exchange symmetric keys
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryPage;
