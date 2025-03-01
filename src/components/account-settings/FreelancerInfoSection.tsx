
import { useState, useRef } from "react";
import { Pencil } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface FreelancerInfoSectionProps {
  username?: string;
  setUsername?: (username: string) => void;
  displayName?: string;
  setDisplayName?: (displayName: string) => void;
  userType?: string;
  setUserType?: (userType: string) => void;
  aboutText?: string;
  setAboutText?: (aboutText: string) => void;
  handleSave: () => void;
}

const FreelancerInfoSection = ({
  username = "",
  setUsername = () => {},
  displayName = "",
  setDisplayName = () => {},
  userType = "part-time",
  setUserType = () => {},
  aboutText = "",
  setAboutText = () => {},
  handleSave
}: FreelancerInfoSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string>("/lovable-uploads/30d1fb74-6384-4994-8a19-23c53cdfd724.png");

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileImage(result);
        toast({
          title: "Ảnh đại diện đã được cập nhật",
          description: "Nhấn nút Lưu để lưu lại thay đổi.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageEditClick = () => {
    fileInputRef.current?.click();
  };

  return (
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
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={handleImageEditClick} 
                className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                aria-label="Edit Profile Picture"
              >
                <Pencil className="h-4 w-4 text-gray-600" />
              </button>
              <input 
                type="file"
                ref={fileInputRef}
                onChange={handleProfileImageChange}
                accept="image/*"
                className="hidden"
              />
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
  );
};

export default FreelancerInfoSection;
