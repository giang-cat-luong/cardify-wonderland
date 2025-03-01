
import { Upload } from "lucide-react";

interface BirthDay {
  day: string;
  month: string;
  year: string;
}

interface IdInfoSectionProps {
  idNumber?: string;
  setIdNumber?: (idNumber: string) => void;
  firstName?: string;
  setFirstName?: (firstName: string) => void;
  lastName?: string;
  setLastName?: (lastName: string) => void;
  birthDay?: BirthDay;
  setBirthDay?: (birthDay: BirthDay) => void;
  handleSave: () => void;
  handleUpload: (type: string) => void;
}

const defaultBirthday: BirthDay = {
  day: "1",
  month: "1",
  year: "1990"
};

const IdInfoSection = ({
  idNumber = "",
  setIdNumber = () => {},
  firstName = "",
  setFirstName = () => {},
  lastName = "",
  setLastName = () => {},
  birthDay = defaultBirthday,
  setBirthDay = () => {},
  handleSave,
  handleUpload
}: IdInfoSectionProps) => {
  return (
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
  );
};

export default IdInfoSection;
