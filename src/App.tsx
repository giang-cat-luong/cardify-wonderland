
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
          <Route path="/account-settings" element={<AccountSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
