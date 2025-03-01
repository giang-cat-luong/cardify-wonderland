
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, CreditCard, Upload, FileText, Calendar } from "lucide-react";

const AccountSettings = () => {
  const [activeSection, setActiveSection] = useState("freelancer-info");
  const [username, setUsername] = useState("bth335yq");
  const [displayName, setDisplayName] = useState("bth335yq");
  const [userType, setUserType] = useState("part-time");
  const [aboutText, setAboutText] = useState("dawdawdawdawdawdawdawd");
  const [email, setEmail] = useState("vutruongqiang452002@gmail.com");
  const [address, setAddress] = useState({
    country: "vietnam",
    addressDetail: "Chi tiết địa chỉ theo CMND/CCCD",
    postalCode: "100000",
    district: "Nhập quận/huyện",
    ward: "dwdwdd",
    city: "Thành phố Hồ Chí Minh"
  });
  const [idNumber, setIdNumber] = useState("168100040910");
  const [firstName, setFirstName] = useState("Vu");
  const [lastName, setLastName] = useState("Giang");
  const [birthDay, setBirthDay] = useState({ day: "16", month: "10", year: "1996" });

  const handleSave = () => {
    console.log("Saving account settings");
    // Logic to save data would go here
  };

  const handleUpload = (type: string) => {
    console.log(`Uploading ${type}`);
    // Logic to handle file upload would go here
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Header */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center text-blue-600">
            <Link to="/" className="text-blue-600 font-medium">Seller center</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Cài đặt tài khoản</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-md shadow-sm">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-800">Tài khoản freelancer của bạn</h3>
            </div>
            <nav>
              <ul>
                <li>
                  <button 
                    onClick={() => setActiveSection("freelancer-info")}
                    className={`flex items-center w-full px-4 py-3 text-left ${activeSection === "freelancer-info" ? "bg-blue-50 border-l-4 border-blue-500 text-blue-600" : "text-gray-700"}`}
                  >
                    <User className="w-5 h-5 mr-3 text-gray-500" />
                    Thông tin tài khoản freelancer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection("contact-info")}
                    className={`flex items-center w-full px-4 py-3 text-left ${activeSection === "contact-info" ? "bg-blue-50 border-l-4 border-blue-500 text-blue-600" : "text-gray-700"}`}
                  >
                    <Mail className="w-5 h-5 mr-3 text-gray-500" />
                    Thông tin liên lạc
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection("id-info")}
                    className={`flex items-center w-full px-4 py-3 text-left ${activeSection === "id-info" ? "bg-blue-50 border-l-4 border-blue-500 text-blue-600" : "text-gray-700"}`}
                  >
                    <FileText className="w-5 h-5 mr-3 text-gray-500" />
                    Thông tin CMND/CCCD
                    <span className="ml-2 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection("tax-info")}
                    className={`flex items-center w-full px-4 py-3 text-left ${activeSection === "tax-info" ? "bg-blue-50 border-l-4 border-blue-500 text-blue-600" : "text-gray-700"}`}
                  >
                    <FileText className="w-5 h-5 mr-3 text-gray-500" />
                    Thông tin khai báo thuế
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveSection("bank-info")}
                    className={`flex items-center w-full px-4 py-3 text-left ${activeSection === "bank-info" ? "bg-blue-50 border-l-4 border-blue-500 text-blue-600" : "text-gray-700"}`}
                  >
                    <CreditCard className="w-5 h-5 mr-3 text-gray-500" />
                    Thông tin ngân hàng
                  </button>
                </li>
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Thông tin tài liệu của người thuê</h3>
              <ul>
                <li>
                  <button 
                    onClick={() => setActiveSection("employer-info")}
                    className={`flex items-center w-full px-4 py-3 text-left ${activeSection === "employer-info" ? "bg-blue-50 border-l-4 border-blue-500 text-blue-600" : "text-gray-700"}`}
                  >
                    <FileText className="w-5 h-5 mr-3 text-gray-500" />
                    Thông tin tài liệu của người thuê (cá nhân)
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="md:col-span-3">
          {/* Freelancer Account Information */}
          {activeSection === "freelancer-info" && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 p-5">
                <h2 className="text-lg font-medium text-gray-800">Thông tin tài khoản freelancer</h2>
                <p className="text-sm text-gray-500">Thiết lập thông tin cơ bản của bạn</p>
              </div>

              <div className="p-6 grid grid-cols-1 gap-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                  <div className="md:w-2/3">
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                      <p className="text-xs text-gray-500 mb-2">Username sẽ hiển thị trong URL, chỉnh sửa username có thể ảnh hưởng đến kết quả tìm kiếm trên Google</p>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          Fastlance.vn/user/
                        </span>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tên hiển thị trên hệ thống</label>
                      <p className="text-xs text-gray-500 mb-2">Nên sử dụng tên thật để tăng độ uy tín</p>
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Loại freelancer</label>
                      <p className="text-xs text-gray-500 mb-2">Chỉ sử dụng để cài thiện hệ thống, nếu bạn còn là sinh viên, vui lòng chọn Bán thời gian</p>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            className="form-radio h-4 w-4 text-blue-600"
                            name="userType"
                            value="part-time"
                            checked={userType === "part-time"}
                            onChange={() => setUserType("part-time")}
                          />
                          <span className="ml-2 text-sm text-gray-700">Bán thời gian</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            className="form-radio h-4 w-4 text-blue-600"
                            name="userType"
                            value="full-time"
                            checked={userType === "full-time"}
                            onChange={() => setUserType("full-time")}
                          />
                          <span className="ml-2 text-sm text-gray-700">Toàn thời gian</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <img 
                        src="/lovable-uploads/30d1fb74-6384-4994-8a19-23c53cdfd724.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        onClick={() => {}} 
                        className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      >
                        <span className="sr-only">Edit Profile</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Về freelancer</label>
                  <textarea
                    value={aboutText}
                    onChange={(e) => setAboutText(e.target.value)}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          {activeSection === "contact-info" && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 p-5">
                <h2 className="text-lg font-medium text-gray-800">Thông tin liên lạc</h2>
                <p className="text-sm text-gray-500">Để chúng tôi và khách hàng có thể liên hệ bạn</p>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700">Email liên hệ</label>
                    <button className="text-sm text-blue-600 hover:text-blue-700">Thay đổi</button>
                  </div>
                  <input
                    type="email"
                    value={email}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                  />
                </div>

                <div className="mt-8 border-t border-gray-200 pt-5">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Thông tin địa chỉ</h3>
                  <p className="text-sm text-gray-500 mb-4">Để chúng tôi có thể gửi hàng và tài liệu cho bạn</p>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ hiện tại</label>
                    <div className="flex space-x-4 mb-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          name="country"
                          value="vietnam"
                          checked={address.country === "vietnam"}
                          onChange={() => setAddress({...address, country: "vietnam"})}
                        />
                        <span className="ml-2 text-sm text-gray-700">Việt Nam</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-blue-600"
                          name="country"
                          value="foreign"
                          checked={address.country === "foreign"}
                          onChange={() => setAddress({...address, country: "foreign"})}
                        />
                        <span className="ml-2 text-sm text-gray-700">Nước ngoài</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Chi tiết địa chỉ</label>
                    <input
                      type="text"
                      value={address.addressDetail}
                      onChange={(e) => setAddress({...address, addressDetail: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mã bưu điện</label>
                      <input
                        type="text"
                        value={address.postalCode}
                        onChange={(e) => setAddress({...address, postalCode: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Mã bưu điện"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Xã/Phường</label>
                      <input
                        type="text"
                        value={address.ward}
                        onChange={(e) => setAddress({...address, ward: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập xã/phường"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quận/Huyện</label>
                      <input
                        type="text"
                        value={address.district}
                        onChange={(e) => setAddress({...address, district: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập quận/huyện"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tỉnh/Thành phố</label>
                      <input
                        type="text"
                        value={address.city}
                        onChange={(e) => setAddress({...address, city: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ID Information */}
          {activeSection === "id-info" && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 p-5">
                <h2 className="text-lg font-medium text-gray-800">Thông tin CMND/CCCD</h2>
                <p className="text-sm text-gray-500">Dùng để xác nhận danh tính</p>
              </div>

              {/* Error alert */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 m-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Không được chấp nhận do</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Nhập địa chỉ theo thẻ CMND/CCCD</li>
                        <li>Hãy tải lên ảnh CMND/CCCD hai mặt và một ảnh bạn cầm CMND/CCCD mặt trước</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                    <h4 className="text-sm font-medium mb-1">Ảnh chụp chung với CMND/CCCD</h4>
                    <p className="text-xs text-gray-500 mb-3">Ảnh cần rõ nét và chính chủ</p>
                    <div className="relative border border-gray-200 rounded-lg overflow-hidden mb-3">
                      <img 
                        src="/lovable-uploads/805a53be-9f23-40a2-ad71-f2dbdbd09018.png" 
                        alt="ID with face" 
                        className="w-full h-40 object-cover"
                      />
                      <button className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 rounded-full p-1 text-white hover:bg-opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <button 
                      onClick={() => handleUpload('id-with-face')}
                      className="w-full py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Thay đổi ảnh
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                    <h4 className="text-sm font-medium mb-1">Ảnh CMND/CCCD</h4>
                    <p className="text-xs text-gray-500 mb-3">Ảnh cần rõ nét</p>
                    <div className="relative border border-gray-200 rounded-lg overflow-hidden mb-3">
                      <img 
                        src="/lovable-uploads/805a53be-9f23-40a2-ad71-f2dbdbd09018.png" 
                        alt="ID front" 
                        className="w-full h-40 object-cover"
                      />
                      <button className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 rounded-full p-1 text-white hover:bg-opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <button 
                      onClick={() => handleUpload('id-front')}
                      className="w-full py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Thay đổi ảnh
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                    <h4 className="text-sm font-medium mb-1">Ảnh CMND/CCCD mặt sau</h4>
                    <p className="text-xs text-gray-500 mb-3">Ảnh cần rõ nét</p>
                    <div className="relative border border-gray-200 rounded-lg overflow-hidden mb-3">
                      <img 
                        src="/lovable-uploads/4e214565-2372-45e9-bc94-cd2f154badf3.png" 
                        alt="ID back" 
                        className="w-full h-40 object-cover"
                      />
                      <button className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 rounded-full p-1 text-white hover:bg-opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <button 
                      onClick={() => handleUpload('id-back')}
                      className="w-full py-2 text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Thay đổi ảnh
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tên đệm và tên</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số CMND/CCCD</label>
                  <input
                    type="text"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ngày sinh</label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <select
                        value={birthDay.day}
                        onChange={(e) => setBirthDay({...birthDay, day: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        value={birthDay.month}
                        onChange={(e) => setBirthDay({...birthDay, month: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                          <option key={month} value={month}>tháng {month}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        value={birthDay.year}
                        onChange={(e) => setBirthDay({...birthDay, year: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        {Array.from({ length: 100 }, (_, i) => 2023 - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Địa chỉ theo CMND/CCCD</h3>
                  <p className="text-sm text-gray-500 mb-2">Vui lòng nhập thông tin trùng với CMND/CCCD của bạn</p>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Chi tiết địa chỉ</label>
                    <input
                      type="text"
                      value="ewedawdawdawdawd"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mã bưu điện</label>
                      <input
                        type="text"
                        value="100000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Xã/Phường</label>
                      <input
                        type="text"
                        value="dwdwdd"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quận/Huyện</label>
                      <input
                        type="text"
                        value="wdwdwd"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tỉnh/Thành phố</label>
                      <input
                        type="text"
                        value="Thành phố Hồ Chí Minh"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tax Information */}
          {activeSection === "tax-info" && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 p-5">
                <h2 className="text-lg font-medium text-gray-800">Thông tin khai báo thuế</h2>
                <p className="text-sm text-gray-500">Để nhận thanh toán thông qua hệ thống Fastlance</p>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-700 mb-6">
                  Để nhận thanh toán thông qua hệ thống Fastlance, freelancer phải xác nhận và đồng ý tự cung cấp thông tin thu nhập của mình để cơ quan thuế xem xét tuân thủ các yêu cầu pháp lý.
                </p>

                <ol className="mb-8 space-y-8">
                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                      1
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-gray-800">Nhập mã số thuế</h3>
                      <p className="text-sm text-gray-500 mb-2">Sau khi được xác minh, thông tin này không thể thay đổi (vui lòng liên hệ đội ngũ hỗ trợ)</p>
                      <input
                        type="text"
                        placeholder="Vui lòng nhập thông tin"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                      2
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-gray-800">Tải xuống bản cam kết</h3>
                      <p className="text-sm text-gray-500 mb-2">Bạn có thể tải xuống tài liệu tại đây <a href="#" className="text-blue-600 font-medium">Bản cam kết</a></p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                      3
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-gray-800">Đọc ký và ký tài liệu</h3>
                      <p className="text-sm text-gray-500 mb-2">Chữ ký số không được chấp nhận; tài liệu phải được ký bằng chữ ký viết tay</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                      4
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-medium text-gray-800">Chụp hình tài liệu và tải lên thông qua Fastlance</h3>
                      <p className="text-sm text-gray-500 mb-2">Bạn có thể tải lên các tệp có định dạng .pdf, .png hoặc .jpg với dung lượng tối đa 10MB</p>
                      <button
                        className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        Tải lên tài liệu
                      </button>
                    </div>
                  </li>
                </ol>

                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bank Information */}
          {activeSection === "bank-info" && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 p-5">
                <h2 className="text-lg font-medium text-gray-800">Thông tin ngân hàng</h2>
                <p className="text-sm text-gray-500">Để nhận tiền khi có việc được thuê</p>
              </div>

              <div className="p-6">
                <div className="mb-8">
                  <h3 className="text-base font-medium text-gray-800 mb-4">Ảnh mã QR ngân hàng của bạn (Tên tài khoản phải trùng với CMND/CCCD)</h3>
                  <p className="text-sm text-gray-500 mb-4">Vui lòng tải lên mã QR từ ứng dụng ngân hàng trực tuyến có hiển thị tên của bạn</p>
                  
                  <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg mb-4">
                    <img 
                      src="/lovable-uploads/48265f16-fe13-43a1-9d7e-9b24975b0217.png" 
                      alt="QR Code" 
                      className="max-h-60"
                    />
                  </div>
                  
                  <button
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Tải ảnh lên
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tên ngân hàng</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option selected disabled>Chọn ngân hàng</option>
                    <option>VietComBank</option>
                    <option>BIDV</option>
                    <option>Techcombank</option>
                    <option>VPBank</option>
                    <option>MB Bank</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số tài khoản ngân hàng</label>
                  <input
                    type="text"
                    placeholder="Nhập số tài khoản"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Employer Information */}
          {activeSection === "employer-info" && (
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 p-5">
                <h2 className="text-lg font-medium text-gray-800">Thông tin tài liệu của người thuê (cá nhân)</h2>
                <p className="text-sm text-gray-500">Dành cho cá nhân</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tên đệm và tên</label>
                    <input
                      type="text"
                      placeholder="Nhập tên đệm và tên"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ</label>
                    <input
                      type="text"
                      placeholder="Nhập họ"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
