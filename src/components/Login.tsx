import React from 'react';
import { User, Lock, ChevronRight } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">TeleDiş Giriş</h1>
          
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Hekim Girişi" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
            
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Kullanıcı Adı" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="password" 
                placeholder="Şifre" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
            </div>
            
            <button 
              onClick={onLogin}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-red-200 mt-4"
            >
              Giriş Yap
            </button>
          </div>
        </div>

        {/* Right Side - Branding (Mobile Hidden or Bottom) */}
        <div className="bg-red-600 p-8 flex flex-col items-center justify-center text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3467/3467831.png" 
              alt="Tooth Icon" 
              className="w-12 h-12 invert"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-xl font-bold">Telekonsültan Hekim 1</h2>
          <p className="text-red-100 text-sm mt-2 opacity-80">Dijital Diş Hekimliği Çözümleri</p>
        </div>
      </div>
    </div>
  );
};
