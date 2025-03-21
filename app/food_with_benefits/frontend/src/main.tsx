import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CuisineCard from './Components/CuisineItems.tsx'
import CuisineList from './Pages/CuisineList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CuisineList></CuisineList>
  </StrictMode>,
)
