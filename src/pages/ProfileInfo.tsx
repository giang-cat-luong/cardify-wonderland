
import { useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, ExternalLink } from "lucide-react";

const ProfileInfo = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-semibold mb-6">Hồ sơ cá nhân</h1>
        
        <div className="space-y-6">
          {/* Education Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-600 font-medium">Trình độ học vấn</h2>
              <Link to="/profile/edit/education" className="text-gray-500">
                <Pencil className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-gray-500 text-sm">
              Chưa cung cấp thông tin
            </div>
          </div>
          
          {/* Work Experience Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-600 font-medium">Kinh nghiệm làm việc</h2>
              <Link to="/profile/edit/experience" className="text-gray-500">
                <Pencil className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-gray-500 text-sm">
              Chưa cung cấp thông tin
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-600 font-medium">Kỹ năng</h2>
              <Link to="/profile/edit/skills" className="text-gray-500">
                <Pencil className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-gray-500 text-sm">
              Chưa cung cấp thông tin
            </div>
          </div>
          
          {/* Languages Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-600 font-medium">Ngôn ngữ</h2>
              <Link to="/profile/edit/languages" className="text-gray-500">
                <Pencil className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-gray-500 text-sm">
              Chưa cung cấp thông tin
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-blue-600 font-medium">Chứng chỉ và giải thưởng</h2>
              <Link to="/profile/edit/certifications" className="text-gray-500">
                <Pencil className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-gray-500 text-sm">
              Chưa cung cấp thông tin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
