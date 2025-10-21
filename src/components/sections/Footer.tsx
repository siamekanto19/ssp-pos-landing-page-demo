import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-orange-50/20 to-white border-gray-200 py-20 mt-[3px]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="text-3xl font-bold mb-6">
              <Image src="/logo_no_bg.png" width={75} height={75} alt="Logo" />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Modern restaurant management made simple.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-lg">
              Products
            </h4>
            <ul className="space-y-4 text-gray-600 text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  Scan, Split, Pay
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  SSP Manager
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  SSP Waiter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  SSP Kitchen
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-lg">
              Company
            </h4>
            <ul className="space-y-4 text-gray-600 text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-lg">
              Connect
            </h4>
            <ul className="space-y-4 text-gray-600 text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[rgb(255,138,5)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-16 pt-12 text-center text-gray-600 text-lg">
          <p>© 2024 SSPPOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
