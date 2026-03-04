import React from 'react';
import { Camera, Upload, Image as ImageIcon, Search, Trash2 } from 'lucide-react';

export const PhotoArchive: React.FC = () => {
  const photos = [
    { id: 1, title: 'Üst Okluzal', date: '04.03.2026', url: 'https://picsum.photos/seed/d1/400/300' },
    { id: 2, title: 'Alt Okluzal', date: '04.03.2026', url: 'https://picsum.photos/seed/d2/400/300' },
    { id: 3, title: 'Sağ Yan', date: '04.03.2026', url: 'https://picsum.photos/seed/d3/400/300' },
    { id: 4, title: 'Sol Yan', date: '04.03.2026', url: 'https://picsum.photos/seed/d4/400/300' },
    { id: 5, title: 'Ön Görünüm', date: '04.03.2026', url: 'https://picsum.photos/seed/d5/400/300' },
  ];

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Fotoğraf Arşivi</h2>
            <p className="text-sm text-gray-500">Hasta No: 780580</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
              <Camera className="w-4 h-4" /> Fotoğraf Çek
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              <Upload className="w-4 h-4" /> Dosya Seç
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="aspect-square relative">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white rounded-full text-red-600 hover:scale-110 transition-transform">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full text-gray-600 hover:scale-110 transition-transform">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800 text-sm">{photo.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{photo.date}</p>
              </div>
            </div>
          ))}
          
          <button className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-red-300 hover:text-red-500 transition-all bg-gray-50/50">
            <Plus className="w-8 h-8" />
            <span className="text-sm font-medium">Yeni Fotoğraf</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Plus = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
);
