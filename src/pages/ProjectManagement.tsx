
import { ArrowLeft, Bell, Info, MessageSquare } from "lucide-react";

const ProjectManagement = () => {
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
            <a href="/project-management" className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <h1 className="text-xl font-medium">Quản lý dự án</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-blue-600 text-sm font-medium">Tìm kiếm freelancer</button>
              <button className="text-blue-600 text-sm font-medium">Bảng công việc</button>
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
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex">
              <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium">
                Đang thực hiện (0)
              </button>
              <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
                Chờ phê duyệt (0)
              </button>
            </div>
          </div>

          {/* First Image - Projects in progress */}
          <div className="mb-10">
            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-4 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">Dự án đang thực hiện</div>
                <div className="text-sm text-gray-500">0 dự án</div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg bg-white">
              <div className="grid grid-cols-5 p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center">
                  <span className="font-medium text-sm">Tên dự án</span>
                  <Info className="w-4 h-4 ml-1 text-gray-400" />
                </div>
                <div className="font-medium text-sm">Mã dự án</div>
                <div className="font-medium text-sm flex items-center">
                  <span>Số tiền (VND)</span>
                </div>
                <div className="font-medium text-sm flex items-center">
                  <span>Hạn chót</span>
                  <Info className="w-4 h-4 ml-1 text-gray-400" />
                </div>
                <div className="font-medium text-sm">Bắt đầu trò chuyện</div>
              </div>
              <div className="p-12 flex flex-col items-center justify-center">
                <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="text-gray-500 text-center">Chưa có dự án</div>
              </div>
            </div>
          </div>

          {/* Second Image - Projects awaiting approval */}
          <div>
            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-4 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">Dự án đang chờ phê duyệt</div>
                <div className="text-sm text-gray-500">0 dự án</div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg bg-white">
              <div className="grid grid-cols-5 p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center">
                  <span className="font-medium text-sm">Tên dự án</span>
                  <Info className="w-4 h-4 ml-1 text-gray-400" />
                </div>
                <div className="font-medium text-sm">Mã dự án</div>
                <div className="font-medium text-sm flex items-center">
                  <span>Số tiền (VND)</span>
                </div>
                <div className="font-medium text-sm flex items-center">
                  <span>Bắt đầu trò chuyện</span>
                </div>
              </div>
              <div className="p-12 flex flex-col items-center justify-center">
                <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="text-gray-500 text-center">Chưa có dự án</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
