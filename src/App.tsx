import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const Interior = lazy(() => import("./pages/Interior"));
const Exterior = lazy(() => import("./pages/Exterior"));
const About = lazy(() => import("./pages/About"));
const RoofPainting = lazy(() => import("./pages/RoofPainting"));
const Commercial = lazy(() => import("./pages/Commercial"));
const HousePreparation = lazy(() => import("./pages/HousePreparation"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/exterior" element={<Exterior />} />
            <Route path="/about" element={<About />} />
            <Route path="/roof-painting" element={<RoofPainting />} />
            <Route path="/house-preparation" element={<HousePreparation />} />
            <Route path="/commercial" element={<Commercial />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
