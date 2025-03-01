
import { useState } from "react";
import AccountSettingsHeader from "../components/account-settings/AccountSettingsHeader";
import AccountSettingsSidebar from "../components/account-settings/AccountSettingsSidebar";
import FreelancerInfoSection from "../components/account-settings/FreelancerInfoSection";
import ContactInfoSection from "../components/account-settings/ContactInfoSection";
import IdInfoSection from "../components/account-settings/IdInfoSection";
import TaxInfoSection from "../components/account-settings/TaxInfoSection";
import BankInfoSection from "../components/account-settings/BankInfoSection";
import EmployerInfoSection from "../components/account-settings/EmployerInfoSection";

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
      <AccountSettingsHeader />

      <div className="max-w-7xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left sidebar */}
        <div className="md:col-span-1">
          <AccountSettingsSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
        </div>

        {/* Main content area */}
        <div className="md:col-span-3">
          {/* Freelancer Account Information */}
          {activeSection === "freelancer-info" && (
            <FreelancerInfoSection
              username={username}
              setUsername={setUsername}
              displayName={displayName}
              setDisplayName={setDisplayName}
              userType={userType}
              setUserType={setUserType}
              aboutText={aboutText}
              setAboutText={setAboutText}
              handleSave={handleSave}
            />
          )}

          {/* Contact Information */}
          {activeSection === "contact-info" && (
            <ContactInfoSection
              email={email}
              address={address}
              setAddress={setAddress}
              handleSave={handleSave}
            />
          )}

          {/* ID Information */}
          {activeSection === "id-info" && (
            <IdInfoSection
              idNumber={idNumber}
              setIdNumber={setIdNumber}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              birthDay={birthDay}
              setBirthDay={setBirthDay}
              handleSave={handleSave}
              handleUpload={handleUpload}
            />
          )}

          {/* Tax Information */}
          {activeSection === "tax-info" && (
            <TaxInfoSection handleSave={handleSave} />
          )}

          {/* Bank Information */}
          {activeSection === "bank-info" && (
            <BankInfoSection handleSave={handleSave} />
          )}

          {/* Employer Information */}
          {activeSection === "employer-info" && (
            <EmployerInfoSection handleSave={handleSave} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
