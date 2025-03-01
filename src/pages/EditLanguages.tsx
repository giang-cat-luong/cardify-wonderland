
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, X, ExternalLink } from "lucide-react";

type LanguageItem = {
  id: string;
  language: string;
  level: string;
};

const languageLevels = ["Cơ bản", "Trung bình", "Khá", "Tốt", "Chuyên môn cao"];

const EditLanguages = () => {
  const [languageItems, setLanguageItems] = useState<LanguageItem[]>([
    { id: "1", language: "", level: "Chuyên môn cao" }
  ]);
  
  const addLanguageItem = () => {
    const newItem = {
      id: Date.now().toString(),
      language: "",
      level: "Chuyên môn cao"
    };
    setLanguageItems([...languageItems, newItem]);
  };
  
  const removeLanguageItem = (id: string) => {
    if (languageItems.length > 1) {
      setLanguageItems(languageItems.filter(item => item.id !== id));
    }
  };
  
  const handleChange = (id: string, field: keyof LanguageItem, value: string) => {
    setLanguageItems(
      languageItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };
  
  const handleSave = () => {
    // Logic to save data would go here
    console.log("Saving languages data:", languageItems);
    // Then redirect back to profile
    window.location.href = "/profile";
  };
  
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex">
      {/* Left sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="py-4 px-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">Ngôn ngữ</h3>
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
              <Link to="/profile/edit/languages" className="flex items-center px-4 py-2 bg-blue-50 border-l-4 border-blue-500 text-blue-600">
                Ngôn ngữ
              </Link>
            </li>
            <li>
              <Link to="/profile/edit/certifications" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
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
          <h1 className="text-2xl font-semibold text-blue-600 mb-8">Ngôn ngữ</h1>
          
          {languageItems.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Ngôn ngữ</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ví dụ: Tiếng Thái, Tiếng Anh"
                    value={item.language}
                    onChange={(e) => handleChange(item.id, "language", e.target.value)}
                  />
                  <p className="text-red-500 text-xs mt-1">Vui lòng nhập thông tin</p>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Cấp độ</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white bg-no-repeat bg-right"
                    style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg width=\"12\" height=\"7\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1l5 5 5-5\" stroke=\"%23999\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>')", backgroundPosition: "right 1rem center" }}
                    value={item.level}
                    onChange={(e) => handleChange(item.id, "level", e.target.value)}
                  >
                    {languageLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {languageItems.length > 1 && (
                <button 
                  onClick={() => removeLanguageItem(item.id)}
                  className="mt-4 flex items-center text-red-500 text-sm"
                >
                  <X className="w-4 h-4 mr-1" /> Xóa thông tin
                </button>
              )}
            </div>
          ))}
          
          <button 
            onClick={addLanguageItem}
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

export default EditLanguages;
