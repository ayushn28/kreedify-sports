// src/Pages/SportsPage.jsx
import '../styles/sports.css'

import Cursor from '../components/layout/Cursor'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SportsGrid from '../components/sports/SportsGrid'

export default function SportsPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <SportsGrid />
      <Footer />
    </>
  )
}