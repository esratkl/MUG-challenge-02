import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { PatientAssessment } from './components/PatientAssessment';
import { PhotoArchive } from './components/PhotoArchive';

type Screen = 'login' | 'patients' | 'profile' | 'feedback' | 'archive';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('patients');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'patients':
        return <PatientAssessment />;
      case 'archive':
        return <PhotoArchive />;
      case 'profile':
        return (
          <div className="p-8 flex items-center justify-center h-[80vh]">
            <div className="text-center">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="w-16 h-16" referrerPolicy="no-referrer" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Telekonsültan Hekim 1</h2>
              <p className="text-gray-500">Kıdemli Diş Hekimi</p>
              <div className="mt-6 space-y-2">
                <p className="text-sm"><strong>E-posta:</strong> hekim1@teledis.com</p>
                <p className="text-sm"><strong>Uzmanlık:</strong> Periodontoloji</p>
              </div>
            </div>
          </div>
        );
      case 'feedback':
        return (
          <div className="p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Geri Bildirim</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <p className="text-sm text-gray-600">Uygulama hakkındaki görüşlerinizi bizimle paylaşın.</p>
              <textarea 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Mesajınız..."
              />
              <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold">Gönder</button>
            </div>
          </div>
        );
      default:
        return <PatientAssessment />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onLogout={() => setIsLoggedIn(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 lg:ml-72 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-100 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3467/3467831.png" 
              alt="Logo" 
              className="w-8 h-8"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-red-600">TeleDiş</span>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </header>

        <main className="flex-1">
          {/* Quick Navigation for Demo */}
          <div className="px-4 pt-4 lg:px-8 lg:pt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
             <button 
               onClick={() => setActiveTab('patients')}
               className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeTab === 'patients' ? 'bg-red-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
             >
               DEĞERLENDİRME
             </button>
             <button 
               onClick={() => setActiveTab('archive')}
               className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeTab === 'archive' ? 'bg-red-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
             >
               FOTOĞRAF ARŞİVİ
             </button>
          </div>
          
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
