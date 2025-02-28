
import { ArrowLeft, Bell, ChevronRight, FileText, Info, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const AccountStats = () => {
  // Days of the week for the activity chart
  const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/7b9dbbbb-fd46-4bbc-ab15-6b26036d247f.png" alt="Logo" className="h-8" />
            <span className="ml-2 text-blue-600 font-medium">fastlance</span>
            <span className="text-xs text-gray-500 ml-1">beta version</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Tổng quan
            </Link>
            <Link to="/project-management" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Quản lý dự án
            </Link>
            <Link to="/account-stats" className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Thống kê tài khoản
            </Link>
            <Link to="/my-services" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Dịch vụ của tôi
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Rút tiền freelancer
            </Link>
            <Link to="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              Phần thưởng Fastlance
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link to="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            <MessageSquare className="w-5 h-5 mr-2 text-gray-500" />
            Gửi phản hồi
          </Link>
          <Link to="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
            </svg>
            Trung tâm hỗ trợ
          </Link>
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
              <h1 className="text-xl font-medium">Thống kê tài khoản</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-blue-600 border border-blue-600 text-sm font-medium px-4 py-1.5 rounded-lg">
                Tìm kiếm freelancer
              </button>
              <button className="text-gray-700 text-sm font-medium px-4 py-1.5">
                Bảng công việc
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
                <img src="/lovable-uploads/7bc51eb8-645d-4a7f-98db-eded96e727b7.png" alt="Avatar" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Thống kê tài khoản</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* User Profile Card */}
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img src="/lovable-uploads/7bc51eb8-645d-4a7f-98db-eded96e727b7.png" alt="User Profile" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-medium mb-1">wgcnegyk</h3>
            </div>
            
            {/* Online Activity Card */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-base font-medium flex-grow">Hoạt động trực tuyến</h3>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
              
              {/* Activity Chart */}
              <div className="flex items-center justify-between mb-2">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-xs text-gray-500 mb-2">{day}</div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 5 ? 'bg-green-500' : 'bg-gray-100'}`}>
                      {index === 5 && <span className="text-white">✓</span>}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-sm text-gray-500 text-center mt-4">
                Hoạt động trực tuyến liên tục để tăng khả năng hiển thị
              </div>
              
              <div className="mt-6 flex justify-center">
                <button className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md">
                  Tìm công việc
                </button>
              </div>
            </div>
          </div>
          
          {/* Response Time Card */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <h3 className="text-base font-medium flex-grow">Thời gian phản hồi trung bình</h3>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-sm text-gray-500">Chưa có dữ liệu</div>
            
            <div className="mt-6 rounded-lg overflow-hidden border border-gray-200">
              <img 
                src="/lovable-uploads/7bc51eb8-645d-4a7f-98db-eded96e727b7.png" 
                alt="Response Time Banner" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Service Stats */}
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Thống Kê Dịch Vụ</h2>
            <div className="text-sm text-gray-500">Chỉ chú: Dữ liệu sẽ được cập nhật trong vòng 24 giờ</div>
            
            <div className="mt-6 bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <FileText className="w-12 h-12 text-gray-300 mb-4" />
              <div className="text-gray-500">Chưa có dữ liệu</div>
              <button className="mt-4 bg-blue-100 text-blue-700 text-sm font-medium py-2 px-4 rounded">
                Bắt Đầu Bán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStats;
