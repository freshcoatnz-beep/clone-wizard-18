import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from '@/lib/head';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
const Interior = lazy(() => import("./pages/Interior"));
const Exterior = lazy(() => import("./pages/Exterior"));
const About = lazy(() => import("./pages/About"));
const RoofPainting = lazy(() => import("./pages/RoofPainting"));
const Commercial = lazy(() => import("./pages/Commercial"));
const HousePreparation = lazy(() => import("./pages/HousePreparation"));
const SuburbPage = lazy(() => import("./pages/SuburbPage"));
const CostGuide = lazy(() => import("./pages/CostGuide"));
const HousePainters = lazy(() => import("./pages/HousePainters"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
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
            <Route path="/house-painters-christchurch" element={<HousePainters />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/painters/:slug" element={<SuburbPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
