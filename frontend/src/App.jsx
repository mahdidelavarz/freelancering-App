import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./ui/AppLayout";
import FreeLancerPage from "./pages/FreeLancerPage";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { Navigate } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvider>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <div className="container">
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/complete-profile" element={<CompleteProfile />} />
              <Route path="/owner" element={<OwnerLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<OwnerDashboard />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<Project />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </NextUIProvider>
    </DarkModeProvider>
  );
}

export default App;
