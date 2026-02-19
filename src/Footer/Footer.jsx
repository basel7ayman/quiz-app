import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", to: "/features" },
        { name: "Quizzes", to: "/quizzes" },
        { name: "Pricing", to: "#" },
        { name: "FAQ", to: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", to: "#" },
        { name: "Blog", to: "#" },
        { name: "Careers", to: "#" },
        { name: "Contact", to: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "𝕏", name: "Twitter", url: "#" },
    { icon: "f", name: "Facebook", url: "#" },
    { icon: "in", name: "LinkedIn", url: "#" },
    { icon: "ig", name: "Instagram", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300 dark:text-gray-300 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-2">QuizMaster</h3>
            <p className="text-xs text-gray-400 mb-3">
              Empower your learning journey.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 text-xs"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-xs font-semibold text-white mb-2 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      className="text-xs text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-6">
          <p>&copy; {currentYear} QuizMaster. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
