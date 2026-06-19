export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-sm text-gray-400">
          <div>
            <h3 className="mb-4 font-semibold text-white">CineVerse</h3>
            <p className="mb-2">A movie streaming platform inspired by Netflix, Disney+, and Prime Video</p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800/50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>&copy; {new Date().getFullYear()} CineVerse. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">Help Center</a>
              <a href="#" className="hover:text-white">Jobs</a>
              <a href="#" className="hover:text-white">Cookies</a>
              <a href="#" className="hover:text-white">Legal Notices</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
