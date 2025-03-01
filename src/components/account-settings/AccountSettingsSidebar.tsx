
import { User, Mail, FileText, CreditCard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  title: string;
  icon: React.ComponentType<any>;
  to: string;
  alert?: boolean;
}

const SidebarItem = ({ title, icon: Icon, to, alert }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === `/account-settings/${to}` || 
                  (to === "freelancer-info" && location.pathname === "/account-settings");
  
  return (
    <li>
      <Link 
        to={`/account-settings/${to}`}
        className={`flex items-center w-full px-4 py-3 text-left ${isActive ? "bg-blue-50 border-l-4 border-blue-500 text-blue-600" : "text-gray-700"}`}
      >
        <Icon className="w-5 h-5 mr-3 text-gray-500" />
        {title}
        {alert && <span className="ml-2 w-2 h-2 bg-red-500 rounded-full"></span>}
      </Link>
    </li>
  );
};

const AccountSettingsSidebar = () => {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-800">Tài khoản freelancer của bạn</h3>
      </div>
      <nav>
        <ul>
          <SidebarItem 
            title="Thông tin tài khoản freelancer"
            icon={User}
            to="freelancer-info"
          />
          <SidebarItem 
            title="Thông tin liên lạc"
            icon={Mail}
            to="contact-info"
          />
          <SidebarItem 
            title="Thông tin CMND/CCCD"
            icon={FileText}
            to="id-info"
            alert={true}
          />
          <SidebarItem 
            title="Thông tin khai báo thuế"
            icon={FileText}
            to="tax-info"
          />
          <SidebarItem 
            title="Thông tin ngân hàng"
            icon={CreditCard}
            to="bank-info"
          />
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <h3 className="font-medium text-gray-800 mb-2">Thông tin tài liệu của người thuê</h3>
        <ul>
          <SidebarItem 
            title="Thông tin tài liệu của người thuê (cá nhân)"
            icon={FileText}
            to="employer-info"
          />
        </ul>
      </div>
    </div>
  );
};

export default AccountSettingsSidebar;
