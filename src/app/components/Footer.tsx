// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-gray-300 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        {/* Two-column grid for links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 p-4">
          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cxedge" className="hover:text-white transition">
                  CXEdge
                </Link>
              </li>
              <li>
                <Link href="/hatteras" className="hover:text-white transition">
                  Hatteras
                </Link>
              </li>
              <li>
                <Link href="/semantic-edge" className="hover:text-white transition">
                  Semantic Edge
                </Link>
              </li>
              <li>
                <Link href="/sentinel" className="hover:text-white transition">
                  Sentinel
                </Link>
              </li>
              <li>
                <Link href="/echonet" className="hover:text-white transition">
                  Echonet
                </Link>
              </li>
              <li>
                <Link href="/mixed-reality" className="hover:text-white transition">
                  Mixed Reality
                </Link>
              </li>
            </ul>
          </div>

          {/* oLabs Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">oLabs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ibm.com/consulting/olabs"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  IBM oLabs
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.ibm.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  IBM.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="text-sm text-center sm:text-right">
          <p className="mb-2">&copy; {year} oLabs. All rights reserved.</p>
          <p className="opacity-70">An IBM Innovation Initiative</p>
        </div>
      </div>
    </footer>
  );
}
