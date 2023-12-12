import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import {Toaster} from "react-hot-toast"
import CompleteProfile from "./pages/CompleteProfile";
import {NextUIProvider} from "@nextui-org/react";
function App() {
  const queryClient = new QueryClient();
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
      <Toaster/>
      <div className="container xl:max-w-screen-xl">
        <Routes>
          <Route path="auth" element={<AuthPage />} />
          <Route path="complete-profile" element={<CompleteProfile />} />
        </Routes>
      </div>
    </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;
