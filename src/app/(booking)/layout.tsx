import Link from 'next/link'

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* White Navbar for Booking Pages */}
      <div className="w-full bg-white border-b border-gray-200 px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="w-[120px] h-[32px] bg-[url('/logo.png')] bg-contain bg-no-repeat bg-left cursor-pointer"></div>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/">
            <span className="text-black hover:text-yellow-600 transition-colors cursor-pointer font-normal text-base lg:text-lg">
              Home
            </span>
          </Link>
          <Link href="/activity">
            <span className="text-black hover:text-yellow-600 transition-colors cursor-pointer font-normal text-base lg:text-lg">
              Activity
            </span>
          </Link>
          <Link href="/profile">
            <span className="text-black hover:text-yellow-600 transition-colors cursor-pointer font-normal text-base lg:text-lg">
              Profile
            </span>
          </Link>
        </div>
      </div>
      
      {children}
    </>
  )
}
