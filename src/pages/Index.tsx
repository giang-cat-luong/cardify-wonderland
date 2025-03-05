import { Bell, Search, ArrowRight, Info, LineChart, Eye, User, Settings, LogOut } from "lucide-react";
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import SortDropdown from "../components/SortDropdown";
import NotificationDropdown from "../components/NotificationDropdown";
import useClickOutside from "../hooks/useClickOutside";

const Index = () => {
  // Sample chart data
  const chartData = [
    { name: "Th02 24", value: 0 },
    { name: "Th03 24", value: 0 },
    { name: "Th04 24", value: 0 },
    { name: "Th05 24", value: 0 },
    { name: "Th06 24", value: 0 },
    { name: "Th07 24", value: 0 },
    { name: "Th08 24", value: 0 },
    { name: "Th09 24", value: 0 },
    { name: "Th10 24", value: 0 },
    { name: "Th11 24", value: 0 },
    { name: "Th12 24", value: 0 },
    { name: "Th01 25", value: 0 },
    { name: "Th02 25", value: 0 },
  ];
  
  // Profile Menu State
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Use our custom hook for handling clicks outside the profile menu
  useClickOutside(profileMenuRef, () => setIsProfileMenuOpen(false), isProfileMenuOpen);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/7b9dbbbb-fd46-4bbc-ab15-6b26036d247f.png" alt="Logo" className="h-8" />
          </a>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
              Tổng quan
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              Quản lý dự án
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              Thông kê tài khoản
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              Dịch vụ của tôi
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              Rút tiền freelancer
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              Phần thưởng Fastlance
            </a>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            Gửi phản hồi
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
            Trung tâm hỗ trợ
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-xl">Xin chào, bth335yq</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                <span>Fastlance Rewards</span>
                <span className="ml-2 bg-blue-500 px-2 py-0.5 rounded text-xs">Tích điểm để đổi thưởng</span>
              </button>
              
              {/* Search button with Tailwind tooltip */}
              <div className="relative group">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
                <div className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                  Tìm kiếm
                </div>
              </div>
              
              {/* Replace Bell button with NotificationDropdown */}
              <NotificationDropdown />
              
              {/* Profile Menu */}
              <div className="relative" ref={profileMenuRef}>
                <button 
                  onClick={toggleProfileMenu}
                  className="w-8 h-8 bg-black rounded-full overflow-hidden"
                >
                  {/* Avatar image can be added here */}
                </button>
                
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
                    <div className="py-2">
                      <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <User className="w-4 h-4 mr-3 text-gray-500" />
                        <span>Hồ sơ freelancer</span>
                      </Link>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Settings className="w-4 h-4 mr-3 text-gray-500" />
                        <span>Cài đặt tài khoản</span>
                      </a>
                      <div className="border-t border-gray-100 my-1"></div>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <LogOut className="w-4 h-4 mr-3 text-gray-500" />
                        <span>Đăng xuất</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8">
          {/* Add Filter Button and SortDropdown in a flex container */}
          <div className="mb-6 flex items-center gap-3">
            <FilterButton />
            <SortDropdown />
          </div>

          {/* Member Status Card */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-2">
                  <h3 className="font-medium">Member</h3>
                  <p className="text-sm">Phí dịch vụ 0%</p>
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-blue-600 font-medium">đ0,00</span>
                  <span className="text-gray-400">/ 800.000,00</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-gray-500">Thu nhập tích lũy trong 3 tháng</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm">
                  Tích lũy thêm đ1.800.000,00
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                  Để nâng hạng thành viên
                </button>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-600 rounded text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Bắt đầu làm freelancer</h2>
              <span className="text-sm text-gray-500">3 bước để tạo thu nhập trên fastlance</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-green-100 rounded-lg bg-green-50">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Đăng ký làm freelancer: Freelance đã được xác minh</p>
                  </div>
                </div>
                <span className="text-green-500">Hoàn tất</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Đăng dịch vụ của bạn</p>
                    <p className="text-sm text-gray-500">Tạo các dịch vụ hấp dẫn để thu hút người thuê và tạo ra thu nhập trên fastlance</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline">Đăng dịch vụ</button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Giới thiệu bản thân</p>
                    <p className="text-sm text-gray-500">Thêm kinh nghiệm làm việc, trình độ học vấn và các kỹ năng của bạn</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline">Thêm thông tin</button>
              </div>
            </div>
          </div>

          {/* Projects In Progress Section */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-medium">Dự án đang thực hiện</h2>
                  <p className="text-sm text-gray-500">0 dự án</p>
                </div>
              </div>
              <a href="#" className="text-blue-600 hover:underline flex items-center text-sm">
                Xem thêm <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Project Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <span className="font-medium text-sm text-gray-700">Tên dự án</span>
                  <div className="relative group inline-block ml-1">
                    <Info className="w-4 h-4 text-gray-400" />
                    <div className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                      Thông tin dự án
                    </div>
                  </div>
                </div>
                <div className="font-medium text-sm text-gray-700">Mã dự án</div>
                <div className="flex items-center">
                  <span className="font-medium text-sm text-gray-700">Số tiền (VND)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-sm text-gray-700">Hạn chót</span>
                  <div className="relative group inline-block ml-1">
                    <Info className="w-4 h-4 text-gray-400" />
                    <div className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
                      Thời hạn hoàn thành
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-12 flex flex-col items-center justify-center text-gray-500">
                <svg className="w-10 h-10 mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm">Chưa có dự án</p>
              </div>
            </div>
          </div>

          {/* Detailed Statistics Section */}
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Dữ liệu chi tiết</h2>

          {/* Overview Chart */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded">
                <LineChart className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Tổng quan về việc thuê</h3>
                <p className="text-sm text-gray-500">Lưu ý: Dữ liệu sẽ được cập nhật trong vòng 24 giờ</p>
              </div>
            </div>

            <div className="flex items-center mb-2 gap-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-300 rounded-full"></span>
                <span className="text-sm text-gray-600">Thu nhập (đồng)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-800 rounded-full"></span>
                <span className="text-sm text-gray-600">Dự án đã hoàn thành (Dự án)</span>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tickSize={0} axisLine={false} tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="value" stroke="#82ca9d" dot={{ fill: '#82ca9d' }} activeDot={{ r: 8 }} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Access Rate Section */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded">
                <Eye className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Tỷ lệ truy cập và thuê <span className="text-blue-500">tháng 2</span></h3>
                <p className="text-sm text-gray-500">Lưu ý: Dữ liệu sẽ được cập nhật trong vòng 24 giờ</p>
              </div>
            </div>

            <div className="py-12 flex flex-col items-center justify-center text-gray-500">
              <svg className="w-10 h-10 mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm">Chưa có dữ liệu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
