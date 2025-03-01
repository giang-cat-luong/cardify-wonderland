
import { Outlet } from "react-router-dom";
import AccountSettingsHeader from "../components/account-settings/AccountSettingsHeader";
import AccountSettingsSidebar from "../components/account-settings/AccountSettingsSidebar";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <AccountSettingsHeader />

      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left sidebar */}
        <div className="md:col-span-1">
          <AccountSettingsSidebar />
        </div>

        {/* Main content area - will be replaced by the nested route */}
        <div className="md:col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
