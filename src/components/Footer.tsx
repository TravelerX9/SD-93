
import Logo3D from "./magicui/logo3D";

const Footer = () => {
  return (
    <footer className="mt-6 w-full transition-colors duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-20 space-y-4 md:space-y-0 text-gray-500 dark:text-gray-400">

          {/* Left Section: Logo & Developer */}
          <div className="flex items-center space-x-3">
            <div className="flex relative left-4 flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                SDN Belitung Selatan 2 '93
              </span>
            </div>
          </div>

          {/* Center Section: Logo & Developer */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <a
              href="https://rza.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 active:scale-95"
            >
              <Logo3D
                src="/images/logo.webp"
                alt="Logo SMP Rajawali"
                width={40}
                height={36}
              />
            </a>
            <span className="text-xs">
              Web Developed by{" "}
              <a
                href="https://wa.me/6289698009000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-700 hover:text-orange-800 transition-colors px-2 py-1 rounded-md"
              >
                Rza - 0896.9800.9000
              </a>
            </span>
          </div>

          {/* Right Section: Privacy Policy */}
          <div className="flex items-center space-x-6">
            <a
              className="text-xs hover:text-orange-700 transition-colors duration-200 px-2 py-1 rounded-md cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-xs text-gray-800 dark:text-gray-700">
              © 2026
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
