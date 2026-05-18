import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Interior = lazy(() => import("./pages/Interior"));
const Exterior = lazy(() => import("./pages/Exterior"));
const About = lazy(() => import("./pages/About"));
const RoofPainting = lazy(() => import("./pages/RoofPainting"));
const Commercial = lazy(() => import("./pages/Commercial"));
const HousePreparation = lazy(() => import("./pages/HousePreparation"));
const SuburbPage = lazy(() => import("./pages/SuburbPage"));
const CostGuide = lazy(() => import("./pages/CostGuide"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
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
            <Route path="/painting-cost-guide" element={<CostGuide />} />
            <Route path="/painters/:slug" element={<SuburbPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
