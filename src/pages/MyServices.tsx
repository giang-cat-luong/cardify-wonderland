
import { ArrowLeft, Bell, ChevronDown, Eye, Info, MessageSquare, Pencil, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MEMBER_TIERS = [
  { id: 'member', name: 'Member', feePercent: 12, minIncome: 0, maxIncome: 1799999, color: 'bg-blue-400', icon: '🔹' },
  { id: 'bronze', name: 'Bronze', feePercent: 10, minIncome: 1800000, maxIncome: 8199999, color: 'bg-amber-500', icon: '🥉' },
  { id: 'silver', name: 'Silver', feePercent: 9, minIncome: 8200000, maxIncome: 24999999, color: 'bg-gray-300', icon: '🥈' },
  { id: 'gold', name: 'Gold', feePercent: 8, minIncome: 25000000, maxIncome: 109999999, color: 'bg-yellow-400', icon: '🥇' },
  { id: 'platinum', name: 'Platinum', feePercent: 7, minIncome: 110000000, maxIncome: 349999999, color: 'bg-gray-400', icon: '👑' },
  { id: 'diamond', name: 'Diamond', feePercent: 6, minIncome: 350000000, maxIncome: Infinity, color: 'bg-blue-300', icon: '💎' },
];

const MyServices = () => {
  const navigate = useNavigate();
  const [showCalculator, setShowCalculator] = useState(false);
  const [showFaqItem, setShowFaqItem] = useState(true);

  // Calculator state
  const [memberTier, setMemberTier] = useState(MEMBER_TIERS[0]);
  const [projectPrice, setProjectPrice] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const handleAddNewService = () => {
    navigate('/create-service');
  };

  const handleCalculatorToggle = () => {
    setShowCalculator(!showCalculator);
    window.scrollTo(0, 0);
  };

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat('vi-VN').format(number);
  };

  const calculateFee = (price: number, feePercent: number) => {
    return price * (feePercent / 100);
  };

  const calculateNetAmount = (price: number, feePercent: number) => {
    return price - calculateFee(price, feePercent);
  };

  const handleTierSelect = (tier: typeof MEMBER_TIERS[0]) => {
    setMemberTier(tier);
    setDropdownOpen(false);
  };

  const getActiveMemberTier = (income: number) => {
    return MEMBER_TIERS.find(tier => income >= tier.minIncome && income <= tier.maxIncome) || MEMBER_TIERS[0];
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
          {!showCalculator ? (
            <>
              {/* Service Pricing Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-lg font-medium mb-2">Tính phí dịch vụ</h2>
                  <p className="text-gray-600 text-sm">
                    Phí dịch vụ được tính 15% trên giá trị mà freelancer nhận được
                  </p>
                  <button 
                    className="mt-4 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded"
                    onClick={handleCalculatorToggle}
                  >
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
            </>
          ) : (
            <div className="relative">
              <button
                onClick={handleCalculatorToggle}
                className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Content */}
                <div className="w-full lg:w-2/3">
                  {/* Header Banner */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg mb-8 p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <h1 className="text-3xl font-bold mb-2">Phí dịch vụ dựa trên thu nhập tích lũy</h1>
                      <p className="text-lg opacity-90">Phí dịch vụ Fastlance theo cấp độ</p>
                    </div>
                    <img 
                      src="/lovable-uploads/6bf9a178-4de6-4334-b0a9-71a26b6b90f2.png"
                      alt="Calculator Background"
                      className="absolute right-0 top-0 h-full opacity-10"
                    />
                  </div>

                  {/* FAQ Section */}
                  <div className="mb-8">
                    <div 
                      className="border border-gray-200 rounded-lg bg-white overflow-hidden mb-6"
                      onClick={() => setShowFaqItem(!showFaqItem)}
                    >
                      <div className="flex justify-between items-center p-4 cursor-pointer">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">Tất cả nội dung</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${showFaqItem ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {showFaqItem && (
                        <div className="p-4 pt-0 border-t border-gray-200">
                          <ul className="space-y-4 text-sm text-gray-700">
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              <span>Phí dịch vụ dựa trên thu nhập tích lũy là gì?</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              <span>Phí dịch vụ được tính như thế nào?</span>
                              <ul className="mt-2 pl-5 space-y-2">
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Ví dụ 1: Không có dự án được phê duyệt trong tháng hiện tại</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Ví dụ 2: Có dự án được phê duyệt trong tháng này cho đến ngày hiện tại</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>Ví dụ 3: Đầu tháng mới</span>
                                </li>
                              </ul>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              <span>Phí dịch vụ Fastlance được sử dụng cho mục đích gì?</span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Membership Tiers Table */}
                  <div className="mb-8">
                    <h2 className="text-xl font-medium mb-6">Phí dịch vụ dựa trên thu nhập tích lũy là gì?</h2>
                    <p className="text-gray-700 mb-6">
                      Đây là phí dịch vụ được khấu trừ trên tổng tiền mỗi dự án của freelancer và sẽ được tính theo cấp bậc thành viên Fastlance. Trong đó, cấp bậc thành viên được xác định dựa vào thu nhập tích lũy trong 3 tháng gần nhất tính đến ngày freelancer tạo hoặc chỉnh sửa báo giá và chỉ bao gồm các dự án đã hoàn thành.
                    </p>

                    <div className="mt-4 mb-6">
                      <a href="#" className="text-blue-600 hover:underline text-sm">Kiểm tra cấp bậc thành viên của bạn</a>
                    </div>

                    <p className="text-gray-700 mb-6">Chi tiết cách tính phí dịch vụ như sau:</p>

                    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                      <div className="grid grid-cols-3 text-sm">
                        <div className="font-medium p-4 bg-gray-100">Cấp bậc thành viên</div>
                        <div className="font-medium p-4 bg-gray-100">Thu nhập tích lũy trong 3 tháng gần nhất tính đến hiện tại (VND)</div>
                        <div className="font-medium p-4 bg-gray-100">% Phí dịch vụ</div>
                      </div>

                      {MEMBER_TIERS.map((tier) => (
                        <div key={tier.id} className="grid grid-cols-3 border-t border-gray-200">
                          <div className={`p-4 flex items-center ${tier.id === 'member' ? 'bg-blue-50' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${tier.color} mr-3`}>
                              <span className="text-lg">{tier.icon}</span>
                            </div>
                            <span className="font-medium">{tier.name}</span>
                          </div>
                          <div className={`p-4 ${tier.id === 'member' ? 'bg-blue-50' : ''}`}>
                            {tier.maxIncome < Infinity 
                              ? `${formatNumber(tier.minIncome)} - ${formatNumber(tier.maxIncome)}`
                              : `${formatNumber(tier.minIncome)} trở lên`
                            }
                          </div>
                          <div className={`p-4 font-medium ${tier.id === 'member' ? 'bg-blue-50' : ''}`}>
                            {tier.feePercent}%
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs mt-2">*Thu nhập tích lũy trong vòng 3 tháng trở lại sẽ được tính toán dựa trên các dự án đã được phê duyệt.</p>
                  </div>

                  {/* How Fees Are Calculated */}
                  <div className="mb-8">
                    <h2 className="text-xl font-medium mb-6">Phí dịch vụ được tính như thế nào?</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Hệ thống sẽ tính phí dựa trên tổng thu nhập tích lũy trong 3 tháng gần nhất tính đến ngày hiện tại, chỉ bao gồm các dự án đã được phê duyệt.</li>
                      <li>Tỷ lệ phần trăm phí dịch vụ cho mỗi báo giá sẽ được tính toán ngay khi Freelancer tạo báo giá.</li>
                      <li>Nếu báo giá được chỉnh sửa, tỷ lệ phần trăm phí dịch vụ hệ thống sẽ được điều chỉnh và tính toán dựa trên ngày chỉnh sửa.</li>
                    </ul>

                    <p className="mt-6 text-gray-700">Freelancer có thể tham khảo thêm thông tin chi tiết thông qua các ví dụ sau đây.</p>
                    
                    {/* Table for Phí dịch vụ được tính như thế nào */}
                    <div className="mt-6 overflow-hidden border border-gray-200 rounded-lg">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="p-4 text-left font-medium text-sm text-gray-700">Bảng tính phí dịch vụ</th>
                            <th className="p-4 text-left font-medium text-sm text-gray-700">Cách tính</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-gray-200">
                            <td className="p-4">
                              <div className="flex items-center">
                                <span className="font-medium mr-2">1. Thu nhập tích lũy</span>
                              </div>
                            </td>
                            <td className="p-4">
                              Thu nhập của các dự án đã hoàn thành trong 3 tháng gần nhất, tính tới ngày tạo báo giá.
                            </td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-4">
                              <div className="flex items-center">
                                <span className="font-medium mr-2">2. Xác định cấp bậc</span>
                              </div>
                            </td>
                            <td className="p-4">
                              Dựa vào thu nhập tích lũy để xác định cấp bậc thành viên tương ứng.
                            </td>
                          </tr>
                          <tr className="border-t border-gray-200">
                            <td className="p-4">
                              <div className="flex items-center">
                                <span className="font-medium mr-2">3. Áp dụng % phí dịch vụ</span>
                              </div>
                            </td>
                            <td className="p-4">
                              Áp dụng % phí dịch vụ tương ứng với cấp bậc thành viên cho dự án.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Example 1 */}
                  <div className="mb-8 bg-blue-50 rounded-lg p-6">
                    <div className="bg-blue-100 rounded-lg px-4 py-2 inline-block mb-4">
                      <h3 className="text-blue-800 font-medium">Ví dụ 1</h3>
                      <span className="text-blue-700">Không có dự án được phê duyệt trong tháng hiện tại</span>
                    </div>

                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Hôm nay là ngày 10 tháng 6 năm 2024.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Trong tháng 6, không có dự án mới nào được phê duyệt.</span>
                      </li>
                    </ul>

                    <p className="mb-4">Do đó, % phí dịch vụ tính đến ngày 10 tháng 6 năm 2024 sẽ như sau:</p>

                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 3 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold">5.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 4 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold">2.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 5 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold">1.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 6 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập tính đến ngày 10 tháng 6</div>
                          <div className="font-bold">0 VND</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center py-4 mb-4">
                      <div className="h-1 w-full bg-gray-300 mb-4 relative">
                        <div className="absolute inset-0 bg-blue-600 w-3/4"></div>
                      </div>
                      <div className="text-gray-700">Thu nhập tích lũy 8.000.000 + 0 = <span className="font-bold">8.000.000 VND</span></div>
                      
                      <div className="mt-6 bg-amber-500 text-white px-6 py-2 rounded-full flex items-center">
                        <span className="mr-2">Bronze</span>
                        <span className="font-bold">Phí dịch vụ 10%</span>
                      </div>
                    </div>

                    <p>Nếu có dự án mà Freelancer "tạo báo giá" vào ngày 10 tháng 6 năm 2024, phí dịch vụ cho dự án đó sẽ là 10%.</p>
                    <p className="text-sm text-gray-500 mt-2 italic">Lưu ý: Nếu có chỉnh sửa báo giá, % phí dịch vụ sẽ được tính toán lại dựa trên ngày chỉnh sửa.</p>
                  </div>
                  
                  {/* Example 2 */}
                  <div className="mb-8 bg-blue-50 rounded-lg p-6">
                    <div className="bg-blue-100 rounded-lg px-4 py-2 inline-block mb-4">
                      <h3 className="text-blue-800 font-medium">Ví dụ 2</h3>
                      <span className="text-blue-700">Có dự án được phê duyệt trong tháng này cho đến ngày hiện tại</span>
                    </div>

                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Hôm nay là ngày 20 tháng 6 năm 2024.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Trong tháng 6, có 1 dự án đã được phê duyệt với thu nhập 7.000.000 VND.</span>
                      </li>
                    </ul>

                    <p className="mb-4">Do đó, % phí dịch vụ tính đến ngày 20 tháng 6 năm 2024 sẽ như sau:</p>

                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 3 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold">5.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 4 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold">2.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 5 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold">1.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 6 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập tính đến ngày 20 tháng 6</div>
                          <div className="font-bold">7.000.000 VND</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center py-4 mb-4">
                      <div className="h-1 w-full bg-gray-300 mb-4 relative">
                        <div className="absolute inset-0 bg-blue-600 w-5/6"></div>
                      </div>
                      <div className="text-gray-700">Thu nhập tích lũy 8.000.000 + 7.000.000 = <span className="font-bold">15.000.000 VND</span></div>
                      
                      <div className="mt-6 bg-gray-300 text-white px-6 py-2 rounded-full flex items-center">
                        <span className="mr-2">Silver</span>
                        <span className="font-bold">Phí dịch vụ 9%</span>
                      </div>
                    </div>

                    <p>Nếu có dự án mà Freelancer "tạo báo giá" vào ngày 20 tháng 6 năm 2024, phí dịch vụ cho dự án đó sẽ là 9%.</p>
                    <p className="text-sm text-gray-500 mt-2 italic">Lưu ý: Nếu có chỉnh sửa báo giá, % phí dịch vụ sẽ được tính toán lại dựa trên ngày chỉnh sửa.</p>
                  </div>
                  
                  {/* Example 3 */}
                  <div className="mb-8 bg-blue-50 rounded-lg p-6">
                    <div className="bg-blue-100 rounded-lg px-4 py-2 inline-block mb-4">
                      <h3 className="text-blue-800 font-medium">Ví dụ 3</h3>
                      <span className="text-blue-700">Đầu tháng mới</span>
                    </div>

                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Hôm nay là ngày 1 tháng 7 năm 2024.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Tháng 4 không còn được tính, thay vào đó là tháng 7.</span>
                      </li>
                    </ul>

                    <p className="mb-4">Do đó, % phí dịch vụ tính đến ngày 1 tháng 7 năm 2024 sẽ như sau:</p>

                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 4 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold text-gray-300 line-through">2.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 5 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold">1.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-400 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 6 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập</div>
                          <div className="font-bold">7.000.000 VND</div>
                        </div>
                      </div>
                      <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
                        <div className="font-medium">tháng 7 năm 2024</div>
                        <div className="mt-2">
                          <div>Thu nhập tính đến ngày 1 tháng 7</div>
                          <div className="font-bold">0 VND</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center py-4 mb-4">
                      <div className="h-1 w-full bg-gray-300 mb-4 relative">
                        <div className="absolute inset-0 bg-blue-600 w-1/2"></div>
                      </div>
                      <div className="text-gray-700">Thu nhập tích lũy 1.000.000 + 7.000.000 + 0 = <span className="font-bold">8.000.000 VND</span></div>
                      
                      <div className="mt-6 bg-amber-500 text-white px-6 py-2 rounded-full flex items-center">
                        <span className="mr-2">Bronze</span>
                        <span className="font-bold">Phí dịch vụ 10%</span>
                      </div>
                    </div>

                    <p>Nếu có dự án mà Freelancer "tạo báo giá" vào ngày 1 tháng 7 năm 2024, phí dịch vụ cho dự án đó sẽ là 10%.</p>
                    <p className="text-sm text-gray-500 mt-2 italic">Lưu ý: Nếu có chỉnh sửa báo giá, % phí dịch vụ sẽ được tính toán lại dựa trên ngày chỉnh sửa.</p>
                  </div>
                  
                  {/* Service Fee Purpose */}
                  <div className="mb-8">
                    <h2 className="text-xl font-medium mb-6">Phí dịch vụ Fastlance được sử dụng cho mục đích gì?</h2>
                    <p className="text-gray-700">
                      Phí dịch vụ trên hệ thống của chúng tôi sẽ được sử dụng để bảo trì, cải thiện nền tảng nhằm đáp ứng nhu cầu sử dụng của cả hai bên: freelancer và người thuê. Điều này bao gồm việc nâng cao trải nghiệm người dùng trên nền tảng, thúc đẩy doanh thu, quảng bá thương hiệu để thu hút thêm người dùng và tạo ra nhiều cơ hội việc làm hơn.
                    </p>
                  </div>
                </div>

                {/* Right Calculator Panel - Sticky */}
                <div className="w-full lg:w-1/3 relative">
                  <div className="sticky top-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-600 text-white p-4 text-center">
                      <h3 className="font-medium">Tính toán phí dịch vụ và giá dự án</h3>
                    </div>
                    <div className="p-4 space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cấp bậc thành viên
                        </label>
                        <div className="relative">
                          <button
                            className="w-full text-left flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                          >
                            <span className="text-gray-700">{memberTier.name} (Phí dịch vụ {memberTier.feePercent}%)</span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {dropdownOpen && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                              {MEMBER_TIERS.map((tier) => (
                                <div
                                  key={tier.id}
                                  className={`p-3 hover:bg-blue-50 cursor-pointer flex items-center ${tier.id === memberTier.id ? 'bg-blue-50' : ''}`}
                                  onClick={() => handleTierSelect(tier)}
                                >
                                  <span>{tier.name} (Phí dịch vụ {tier.feePercent}%)</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="mt-2">
                          <a href="#" className="text-blue-600 hover:underline text-xs">
                            Kiểm tra cấp bậc thành viên của bạn
                          </a>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Giá dự án
                        </label>
                        <div className="flex">
                          <input
                            type="text"
                            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="123213123213"
                            value={projectPrice}
                            onChange={(e) => {
                              // Allow only numbers and format with commas
                              const value = e.target.value.replace(/\D/g, '');
                              setProjectPrice(value);
                            }}
                          />
                          <div className="bg-gray-100 p-3 border border-l-0 border-gray-300 rounded-r-lg text-gray-700">
                            VND
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-gray-700">Phí dịch vụ</span>
                          <span className="text-blue-600 font-medium">
                            {projectPrice 
                              ? formatNumber(calculateFee(parseInt(projectPrice) || 0, memberTier.feePercent))
                              : '0'} VND
                          </span>
                        </div>

                        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                          <div>
                            <div className="text-gray-700">Số tiền nhận được từ nền tảng</div>
                          </div>
                          <div className="text-blue-600 font-bold">
                            {projectPrice 
                              ? formatNumber(calculateNetAmount(parseInt(projectPrice) || 0, memberTier.feePercent))
                              : '0'} VND
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
