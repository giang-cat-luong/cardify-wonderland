
import { useState } from "react";
import { User, Mail, FileText, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

type SectionType = 
  | "freelancer-info" 
  | "contact-info" 
  | "id-info" 
  | "tax-info" 
  | "bank-info" 
  | "employer-info";

interface SidebarItemProps {
  title: string;
  icon: React.ComponentType<any>;
  section: SectionType;
  activeSection: string;
  onClick: (section: SectionType) => void;
  alert?: boolean;
}

const SidebarItem = ({ title, icon: Icon, section, activeSection, onClick, alert }: SidebarItemProps) => (
  <li>
    <button 
      onClick={() => onClick(section)}
      className={`flex items-center w-full px-4 py-3 text-left ${activeSection === section ? "bg-blue-50 border-l-4 border-blue-500 text-blue-600" : "text-gray-700"}`}
    >
      <Icon className="w-5 h-5 mr-3 text-gray-500" />
      {title}
      {alert && <span className="ml-2 w-2 h-2 bg-red-500 rounded-full"></span>}
    </button>
  </li>
);

interface AccountSettingsSidebarProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const AccountSettingsSidebar = ({ activeSection, setActiveSection }: AccountSettingsSidebarProps) => {
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
            section="freelancer-info"
            activeSection={activeSection}
            onClick={setActiveSection}
          />
          <SidebarItem 
            title="Thông tin liên lạc"
            icon={Mail}
            section="contact-info"
            activeSection={activeSection}
            onClick={setActiveSection}
          />
          <SidebarItem 
            title="Thông tin CMND/CCCD"
            icon={FileText}
            section="id-info"
            activeSection={activeSection}
            onClick={setActiveSection}
            alert={true}
          />
          <SidebarItem 
            title="Thông tin khai báo thuế"
            icon={FileText}
            section="tax-info"
            activeSection={activeSection}
            onClick={setActiveSection}
          />
          <SidebarItem 
            title="Thông tin ngân hàng"
            icon={CreditCard}
            section="bank-info"
            activeSection={activeSection}
            onClick={setActiveSection}
          />
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <h3 className="font-medium text-gray-800 mb-2">Thông tin tài liệu của người thuê</h3>
        <ul>
          <SidebarItem 
            title="Thông tin tài liệu của người thuê (cá nhân)"
            icon={FileText}
            section="employer-info"
            activeSection={activeSection}
            onClick={setActiveSection}
          />
        </ul>
      </div>
    </div>
  );
};

export default AccountSettingsSidebar;
