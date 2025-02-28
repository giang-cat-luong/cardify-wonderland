
import { ArrowLeft, Bell, Eye, Info, MessageSquare, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyServices = () => {
  const navigate = useNavigate();
  
  const handleAddNewService = () => {
    navigate('/create-service');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/7b9dbbbb-fd46-4bbc-ab15-6b26036d247f.png" alt="Logo" className="h-8" />
            <span className="ml-2 text-blue-600 font-medium">fastlance</span>
            <span className="text-xs text-gray-500 ml-1">beta version</span>
          </a>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <a href="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Tổng quan
            </a>
            <a href="/project-management" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Quản lý dự án
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Thông kê tài khoản
            </a>
            <a href="/my-services" className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Dịch vụ của tôi
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Rút tiền freelancer
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              Phần thưởng Fastlance
            </a>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            <MessageSquare className="w-5 h-5 mr-2 text-gray-500" />
            Gửi phản hồi
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
            </svg>
            Trung tâm hỗ trợ
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center">
              <button className="mr-4 text-gray-500">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-medium">Dịch vụ của tôi</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
                <img src="/placeholder.svg" alt="Avatar" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8">
          {/* Service Pricing Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 flex justify-between items-center">
            <div className="flex-1">
              <h2 className="text-lg font-medium mb-2">Tính phí dịch vụ</h2>
              <p className="text-gray-600 text-sm">
                Phí dịch vụ được tính 15% trên giá trị mà freelancer nhận được
              </p>
              <button className="mt-4 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded">
                Nhập đề tính toán
              </button>
            </div>
            <div className="w-1/4">
              <img 
                src="/lovable-uploads/6bf9a178-4de6-4334-b0a9-71a26b6b90f2.png" 
                alt="Calculator" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* My Services Section */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-medium">Dịch vụ của tôi (1/5)</h2>
            <button 
              onClick={handleAddNewService}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Thêm dịch vụ mới
            </button>
          </div>

          {/* Notification Banner */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-start">
            <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <span className="text-gray-700">Đối với hồ sơ dịch vụ đang ở trạng thái </span>
              <span className="text-yellow-600 font-medium">Đang chờ duyệt</span>
              <span className="text-gray-700">, chúng tôi sẽ xem xét trong vòng 2 ngày làm việc (sau khi tài khoản người dùng được phê duyệt)</span>
            </div>
          </div>

          {/* Services Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 border-b border-gray-200 bg-gray-50">
              <div className="p-4 font-medium text-sm text-gray-700">Dịch vụ</div>
              <div className="p-4 font-medium text-sm text-gray-700">Phí dịch vụ (%)</div>
              <div className="p-4 font-medium text-sm text-gray-700">Trạng thái dịch vụ</div>
              <div className="p-4 font-medium text-sm text-gray-700">Hiển thị dịch vụ</div>
              <div className="p-4 font-medium text-sm text-gray-700">Quản lý</div>
            </div>

            {/* Table Row */}
            <div className="grid grid-cols-5 border-b border-gray-200">
              <div className="p-4 flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden mr-3 flex-shrink-0">
                  <img src="/placeholder.svg" alt="Service" className="w-full h-full object-cover" />
                </div>
                <div className="font-medium">đwdwdd</div>
              </div>
              <div className="p-4 flex items-center">0%</div>
              <div className="p-4 flex items-center">
                <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs">
                  Chờ phê duyệt
                </span>
              </div>
              <div className="p-4 flex items-center">
                <Eye className="w-5 h-5 text-gray-400" />
              </div>
              <div className="p-4 flex items-center space-x-2">
                <button className="p-1 text-gray-500 hover:text-gray-700">
                  <Pencil className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-500 hover:text-gray-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
