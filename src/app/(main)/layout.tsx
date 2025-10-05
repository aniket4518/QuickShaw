import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      
    </>
  )
}
