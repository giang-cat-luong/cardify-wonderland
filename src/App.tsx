
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectManagement from "./pages/ProjectManagement";
import MyServices from "./pages/MyServices";
import AccountStats from "./pages/AccountStats";
import CreateService from "./pages/CreateService";
import ProfileInfo from "./pages/ProfileInfo";
import EditEducation from "./pages/EditEducation";
import EditExperience from "./pages/EditExperience";
import EditSkills from "./pages/EditSkills";
import EditLanguages from "./pages/EditLanguages";
import EditCertifications from "./pages/EditCertifications";
import AccountSettings from "./pages/AccountSettings";
import FreelancerInfoSection from "./components/account-settings/FreelancerInfoSection";
import ContactInfoSection from "./components/account-settings/ContactInfoSection";
import IdInfoSection from "./components/account-settings/IdInfoSection";
import TaxInfoSection from "./components/account-settings/TaxInfoSection";
import BankInfoSection from "./components/account-settings/BankInfoSection";
import EmployerInfoSection from "./components/account-settings/EmployerInfoSection";
import MyIncome from "./pages/MyIncome";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/my-services" element={<MyServices />} />
          <Route path="/account-stats" element={<AccountStats />} />
          <Route path="/create-service" element={<CreateService />} />
          <Route path="/profile" element={<ProfileInfo />} />
          <Route path="/profile/edit/education" element={<EditEducation />} />
          <Route path="/profile/edit/experience" element={<EditExperience />} />
          <Route path="/profile/edit/skills" element={<EditSkills />} />
          <Route path="/profile/edit/languages" element={<EditLanguages />} />
          <Route path="/profile/edit/certifications" element={<EditCertifications />} />
          <Route path="/my-income" element={<MyIncome />} />
          
          {/* Account Settings Routes */}
          <Route path="/account-settings" element={<AccountSettings />}>
            <Route index element={<FreelancerInfoSection handleSave={() => console.log("Saving")} />} />
            <Route path="freelancer-info" element={<FreelancerInfoSection handleSave={() => console.log("Saving")} />} />
            <Route path="contact-info" element={<ContactInfoSection handleSave={() => console.log("Saving")} />} />
            <Route path="id-info" element={<IdInfoSection handleSave={() => console.log("Saving")} handleUpload={() => console.log("Uploading")} />} />
            <Route path="tax-info" element={<TaxInfoSection handleSave={() => console.log("Saving")} />} />
            <Route path="bank-info" element={<BankInfoSection handleSave={() => console.log("Saving")} />} />
            <Route path="employer-info" element={<EmployerInfoSection handleSave={() => console.log("Saving")} />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
