
import { Link } from "react-router-dom";

const AccountSettingsHeader = () => {
  return (
    <div className="p-4 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center text-blue-600">
          <Link to="/" className="text-blue-600 font-medium">Seller center</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Cài đặt tài khoản</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsHeader;
