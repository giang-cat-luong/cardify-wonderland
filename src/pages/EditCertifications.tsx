
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, X, ExternalLink } from "lucide-react";

type CertificationItem = {
  id: string;
  name: string;
};

const EditCertifications = () => {
  const [certificationItems, setCertificationItems] = useState<CertificationItem[]>([
    { id: "1", name: "" }
  ]);
  
  const addCertificationItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: ""
    };
    setCertificationItems([...certificationItems, newItem]);
  };
  
  const removeCertificationItem = (id: string) => {
    if (certificationItems.length > 1) {
      setCertificationItems(certificationItems.filter(item => item.id !== id));
    }
  };
  
  const handleChange = (id: string, field: keyof CertificationItem, value: string) => {
    setCertificationItems(
      certificationItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };
  
  const handleSave = () => {
    // Logic to save data would go here
    console.log("Saving certifications data:", certificationItems);
    // Then redirect back to profile
    window.location.href = "/profile";
  };
  
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex">
      {/* Left sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="py-4 px-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">Chứng chỉ và giải thưởng</h3>
        </div>
        <nav className="py-2">
          <ul>
            <li>
              <Link to="/profile/edit/education" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                Trình độ học vấn
              </Link>
            </li>
            <li>
              <Link to="/profile/edit/experience" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                Kinh nghiệm làm việc
              </Link>
            </li>
            <li>
              <Link to="/profile/edit/skills" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                Kỹ năng
              </Link>
            </li>
            <li>
              <Link to="/profile/edit/languages" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                Ngôn ngữ
              </Link>
            </li>
            <li>
              <Link to="/profile/edit/certifications" className="flex items-center px-4 py-2 bg-blue-50 border-l-4 border-blue-500 text-blue-600">
                Chứng chỉ và giải thưởng
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="px-4 py-4 mt-4">
          <Link to="/profile" className="text-blue-600 flex items-center">
            <ExternalLink className="w-4 h-4 mr-2" />
            Xem hồ sơ của bạn
          </Link>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold text-blue-600 mb-8">Chứng chỉ và giải thưởng</h1>
          
          {certificationItems.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div>
                <label className="block text-gray-700 mb-2">Tên giải thưởng</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập tên giải thưởng"
                  value={item.name}
                  onChange={(e) => handleChange(item.id, "name", e.target.value)}
                />
                <p className="text-red-500 text-xs mt-1">Vui lòng nhập thông tin</p>
              </div>
              
              {certificationItems.length > 1 && (
                <button 
                  onClick={() => removeCertificationItem(item.id)}
                  className="mt-4 flex items-center text-red-500 text-sm"
                >
                  <X className="w-4 h-4 mr-1" /> Xóa thông tin
                </button>
              )}
            </div>
          ))}
          
          <button 
            onClick={addCertificationItem}
            className="flex items-center justify-center text-blue-600 w-full py-3 border border-dashed border-blue-300 rounded-lg mb-8 hover:bg-blue-50"
          >
            <Plus className="w-5 h-5 mr-2" /> Thêm thông tin
          </button>
          
          <div className="flex justify-end">
            <button 
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Lưu thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCertifications;
