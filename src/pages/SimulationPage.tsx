import { useState } from 'react';
import { Key, Lock, Unlock, User, Send, ArrowRight, RefreshCw, Copy, Check } from 'lucide-react';

const SimulationPage = () => {
  const [keySize, setKeySize] = useState<128 | 192 | 256>(128);
  const [symmetricKey, setSymmetricKey] = useState('');
  const [plaintext, setPlaintext] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [receiverKey, setReceiverKey] = useState('');
  const [copied, setCopied] = useState(false);

  const generateRandomKey = () => {
    const keyLength = keySize / 4;
    const characters = '0123456789ABCDEF';
    let key = '';
    for (let i = 0; i < keyLength; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setSymmetricKey(key);
    setReceiverKey(key);
    setCiphertext('');
    setDecryptedText('');
  };

  const simpleEncrypt = (text: string, key: string): string => {
    if (!text || !key) return '';
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const keyChar = key.charCodeAt(i % key.length);
      const encrypted = ((charCode + keyChar) % 256).toString(16).padStart(2, '0');
      result += encrypted;
    }
    return result.toUpperCase();
  };

  const simpleDecrypt = (hex: string, key: string): string => {
    if (!hex || !key) return '';
    try {
      let result = '';
      for (let i = 0; i < hex.length; i += 2) {
        const hexByte = hex.substr(i, 2);
        const encryptedChar = parseInt(hexByte, 16);
        const keyChar = key.charCodeAt((i / 2) % key.length);
        const decrypted = ((encryptedChar - keyChar + 256) % 256);
        result += String.fromCharCode(decrypted);
      }
      return result;
    } catch {
      return 'Decryption failed - Invalid key or ciphertext';
    }
  };

  const handleEncrypt = () => {
    if (!plaintext || !symmetricKey) {
      alert('Please enter a message and generate a key first!');
      return;
    }
    const encrypted = simpleEncrypt(plaintext, symmetricKey);
    setCiphertext(encrypted);
    setDecryptedText('');
  };

  const handleDecrypt = () => {
    if (!ciphertext || !receiverKey) {
      alert('Please encrypt a message and ensure the receiver has a key!');
      return;
    }
    const decrypted = simpleDecrypt(ciphertext, receiverKey);
    setDecryptedText(decrypted);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-12 slide-up">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          AES Encryption Simulation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Interactive demonstration of symmetric key distribution and AES encryption
        </p>
      </div>

      <div className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl slide-up">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
            <Key className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Key Generation</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-3">Select Key Size:</label>
            <div className="flex space-x-4">
              {[128, 192, 256].map((size) => (
                <button
                  key={size}
                  onClick={() => setKeySize(size as 128 | 192 | 256)}
                  className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    keySize === size
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300'
                  }`}
                >
                  {size}-bit
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <button
              onClick={generateRandomKey}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <RefreshCw size={24} />
              <span>Generate Random Key</span>
            </button>
          </div>
        </div>

        {symmetricKey && (
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <label className="text-lg font-semibold text-gray-700">Generated Symmetric Key:</label>
              <button
                onClick={() => copyToClipboard(symmetricKey)}
                className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div className="font-mono text-lg bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg break-all">
              {symmetricKey}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This key is automatically distributed to both Alice (Sender) and Bob (Receiver)
            </p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl slide-up">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <User className="text-white" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Sender (Alice)</h2>
              <p className="text-sm text-gray-600">Encrypts the message</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Plaintext Message:</label>
              <textarea
                value={plaintext}
                onChange={(e) => setPlaintext(e.target.value)}
                placeholder="Enter your secret message here..."
                className="w-full p-4 border-2 border-purple-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Alice's Key:</label>
              <input
                type="text"
                value={symmetricKey}
                readOnly
                className="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-xl text-lg font-mono"
                placeholder="Generate a key first"
              />
            </div>

            <button
              onClick={handleEncrypt}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Lock size={24} />
              <span>Encrypt Message</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-xl slide-up">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mr-4">
              <User className="text-white" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Receiver (Bob)</h2>
              <p className="text-sm text-gray-600">Decrypts the message</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Received Ciphertext:</label>
              <textarea
                value={ciphertext}
                readOnly
                placeholder="Encrypted message will appear here..."
                className="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-xl text-lg font-mono resize-none"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Bob's Key:</label>
              <input
                type="text"
                value={receiverKey}
                onChange={(e) => setReceiverKey(e.target.value)}
                className="w-full p-4 border-2 border-orange-300 rounded-xl text-lg font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Key distributed from Alice"
              />
              <p className="text-sm text-gray-600 mt-1">Try changing this key to see decryption fail!</p>
            </div>

            <button
              onClick={handleDecrypt}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Unlock size={24} />
              <span>Decrypt Message</span>
            </button>
          </div>
        </div>
      </div>

      {ciphertext && (
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-xl mb-8 slide-up">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
              <Send className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Transmission Channel</h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-lg font-semibold text-purple-600">Alice</span>
              <ArrowRight className="text-gray-400" size={32} />
              <div className="flex-1 border-t-4 border-dashed border-gray-300"></div>
              <div className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-white font-semibold">
                Encrypted Data
              </div>
              <div className="flex-1 border-t-4 border-dashed border-gray-300"></div>
              <ArrowRight className="text-gray-400" size={32} />
              <span className="text-lg font-semibold text-orange-600">Bob</span>
            </div>
            <p className="text-center text-lg text-gray-600">
              Data travels securely across insecure networks as ciphertext
            </p>
          </div>
        </div>
      )}

      {decryptedText && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl slide-up">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <Check size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Decrypted Result</h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <label className="block text-lg font-semibold text-gray-700 mb-3">Original Message Recovered:</label>
            <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
              <p className="text-xl text-gray-800 leading-relaxed">{decryptedText}</p>
            </div>
            {decryptedText === plaintext ? (
              <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-lg flex items-center space-x-3">
                <Check className="text-green-600" size={24} />
                <p className="text-lg text-green-700 font-semibold">
                  Success! The message was decrypted correctly with the right key.
                </p>
              </div>
            ) : (
              <div className="mt-4 p-4 bg-red-100 border-2 border-red-500 rounded-lg flex items-center space-x-3">
                <ArrowRight className="text-red-600" size={24} />
                <p className="text-lg text-red-700 font-semibold">
                  Decryption failed! The receiver is using an incorrect key.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulationPage;
