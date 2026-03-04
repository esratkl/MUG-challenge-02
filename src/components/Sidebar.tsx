import React from 'react';
import { Users, UserCircle, MessageSquare, LogOut, Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onLogout, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'patients', label: 'Hasta Listesi', icon: Users },
    { id: 'profile', label: 'Kullanıcı Profili', icon: UserCircle },
    { id: 'feedback', label: 'Geri Bildirim', icon: MessageSquare },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-red-600 text-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3467/3467831.png" 
                  alt="Logo" 
                  className="w-6 h-6 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">TeleDiş</span>
            </div>
            <button onClick={onClose} className="lg:hidden p-1 hover:bg-white/10 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center mb-10">
             <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <UserCircle className="w-12 h-12" />
             </div>
             <h3 className="font-semibold">Telekonsültan Hekim 1</h3>
             <p className="text-red-200 text-xs">Aktif Oturum</p>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  onClose();
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-white text-red-600 shadow-lg' : 'hover:bg-white/10'}`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <button 
            onClick={onLogout}
            className="mt-auto flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-all text-red-100"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Oturum Kapat</span>
          </button>
        </div>
      </div>
    </>
  );
};
