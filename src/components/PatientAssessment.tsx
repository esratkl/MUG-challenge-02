import React from 'react';
import { Camera, FileText, Grid, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export const PatientAssessment: React.FC = () => {
  const upperTeeth = [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24];
  const lowerTeeth = [51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72];

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Hasta Değerlendirme</h2>
            <p className="text-sm text-gray-500">Hasta No: 780580</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Evaluation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-red-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-red-100 transition-transform active:scale-95">
            DENTAL DEĞERLENDİRME
          </button>
          <button className="bg-red-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-red-100 transition-transform active:scale-95">
            GENEL DEĞERLENDİRME
          </button>
        </div>

        {/* Photo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Alt Okluzal Fotoğraf</h3>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/dental1/800/450" 
                  alt="Dental View" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white/90 p-3 rounded-full shadow-lg">
                    <Camera className="w-6 h-6 text-red-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Teeth Grid */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Diş Şeması</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {upperTeeth.map(num => (
                    <div key={num} className="w-10 h-10 flex items-center justify-center border-2 border-gray-100 rounded-lg text-sm font-bold text-gray-600 hover:border-red-500 hover:text-red-500 cursor-pointer transition-all">
                      {num}
                    </div>
                  ))}
                </div>
                <div className="h-px bg-gray-100 w-full" />
                <div className="flex flex-wrap gap-2 justify-center">
                  {lowerTeeth.map(num => (
                    <div key={num} className="w-10 h-10 flex items-center justify-center border-2 border-gray-100 rounded-lg text-sm font-bold text-gray-600 hover:border-red-500 hover:text-red-500 cursor-pointer transition-all">
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Dental Muayene</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Çürük</label>
                  <select className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                    <option>Yok</option>
                    <option>Var</option>
                  </select>
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 text-sm hover:border-red-300 hover:text-red-500 transition-all">
                  <Plus className="w-4 h-4" /> Ekle
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Periodontal Muayene</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Kanama</label>
                  <select className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                    <option>Yok</option>
                    <option>Var</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Cep Derinliği</label>
                  <input type="text" className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="mm" />
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 text-sm hover:border-red-300 hover:text-red-500 transition-all">
                  <Plus className="w-4 h-4" /> Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
