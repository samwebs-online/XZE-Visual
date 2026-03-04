import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  useEffect(() => {
    const handler = () => setCalendlyOpen(true);
    window.addEventListener("open-calendly", handler as EventListener);
    return () => window.removeEventListener("open-calendly", handler as EventListener);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {calendlyOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-6 bg-black/60">
            <div className="bg-white w-full max-w-3xl h-[80vh] rounded-lg overflow-hidden relative">
              <button
                onClick={() => setCalendlyOpen(false)}
                className="absolute top-3 right-3 px-3 py-1 bg-background border border-border rounded-md"
              >
                Close
              </button>
              <iframe
                title="Booking"
                src="https://calendly.com/your-link"
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
