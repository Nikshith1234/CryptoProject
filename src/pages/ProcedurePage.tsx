import { Clipboard, ArrowRight, AlertCircle } from 'lucide-react';

const ProcedurePage = () => {
  const steps = [
    {
      title: 'Understanding the Setup',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      substeps: [
        'Open the Simulation page from the navigation menu',
        'Observe the interface with two parties: Sender (Alice) and Receiver (Bob)',
        'Note the key generation section and encryption/decryption areas'
      ]
    },
    {
      title: 'Generate Symmetric Key',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      substeps: [
        'Select the desired key size (128-bit, 192-bit, or 256-bit)',
        'Click the "Generate Random Key" button',
        'A cryptographically secure random key will be generated',
        'The same key will be automatically distributed to both Alice and Bob'
      ]
    },
    {
      title: 'Encrypt a Message',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
      substeps: [
        'In the Sender (Alice) section, enter your plaintext message',
        'Ensure the symmetric key is present in the key field',
        'Click the "Encrypt Message" button',
        'Observe the encrypted ciphertext displayed in hexadecimal format',
        'Note how the same message produces different ciphertext each time due to initialization vectors'
      ]
    },
    {
      title: 'Transmit Ciphertext',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      substeps: [
        'The encrypted ciphertext is shown in the transmission area',
        'This represents the data being sent over an insecure channel',
        'Notice that the ciphertext appears random and unreadable'
      ]
    },
    {
      title: 'Decrypt the Message',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      substeps: [
        'In the Receiver (Bob) section, the ciphertext is automatically received',
        'Verify that Bob has the same symmetric key as Alice',
        'Click the "Decrypt Message" button',
        'Observe the original plaintext message being recovered',
        'Compare the decrypted message with the original to verify correctness'
      ]
    },
    {
      title: 'Experiment with Wrong Key',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-50 to-orange-50',
      substeps: [
        'Modify Bob\'s key to a different value',
        'Attempt to decrypt the ciphertext again',
        'Observe that decryption fails or produces gibberish',
        'This demonstrates the importance of key secrecy and correct key distribution'
      ]
    },
    {
      title: 'Test Different Key Sizes',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
      substeps: [
        'Repeat the encryption process with 128-bit, 192-bit, and 256-bit keys',
        'Compare the encryption/decryption process for each key size',
        'Understand that larger keys provide stronger security but similar performance',
        'Document your observations about key size effects'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-12 slide-up">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          Experimental Procedure
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Follow these steps to conduct the AES symmetric key distribution experiment
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-8 shadow-xl slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-6">
              <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mr-4 text-white font-bold text-2xl`}>
                {index + 1}
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{step.title}</h2>
            </div>
            <div className="space-y-3 pl-4">
              {step.substeps.map((substep, subIndex) => (
                <div key={subIndex} className="flex items-start space-x-3 card-hover p-4 bg-white rounded-xl shadow-sm">
                  <ArrowRight className="text-gray-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-lg text-gray-700 leading-relaxed">{substep}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-2xl p-10 shadow-xl mb-8">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
            <AlertCircle className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Important Notes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-3">⚡ Key Security</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The symmetric key must be kept secret. Anyone with access to the key can decrypt all messages.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-red-600 mb-3">🔒 Key Distribution</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              In real systems, keys must be distributed through secure channels to prevent interception.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-purple-600 mb-3">🎲 Randomness</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Always use cryptographically secure random number generators for key generation.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-3">📝 Documentation</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Record your observations, including ciphertext formats and decryption results.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Expected Outcomes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center card-hover">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Successful Encryption</h3>
            <p className="text-lg text-gray-600">Plaintext converts to random-looking ciphertext</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center card-hover">
            <div className="text-5xl mb-4">🔓</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Successful Decryption</h3>
            <p className="text-lg text-gray-600">Original message recovered with correct key</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center card-hover">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Failed with Wrong Key</h3>
            <p className="text-lg text-gray-600">Decryption fails without the correct key</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedurePage;
