import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initPhoneCallTracking } from './lib/adsTracking'

initPhoneCallTracking();

createRoot(document.getElementById("root")!).render(<App />);
