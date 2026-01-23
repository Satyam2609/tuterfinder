export default function Footer(){
    return(
       <section className="bg-black w-full px-10 py-14">
  {/* Heading */}
  <div className="text-center mb-12">
    <h1 className="text-white text-3xl font-bold">Tutor Finder</h1>
    <p className="text-gray-400 mt-2">
      Find the right tutor without confusion. Learn better, faster.
    </p>
  </div>

  {/* Footer Content */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400">
    
    {/* About */}
    <div>
      <h2 className="text-white text-xl font-semibold mb-4">
        About Tutor Finder
      </h2>
      <p className="text-sm leading-relaxed">
        Tutor Finder helps students connect with experienced and verified
        tutors for online and offline learning. Simple, reliable, and fast.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-white text-xl font-semibold mb-4">
        Quick Links
      </h2>
      <ul className="space-y-4">
        {["Home", "Career", "About Us", "Contact Us"].map((item) => (
          <li
            key={item}
            className="w-fit relative cursor-pointer
            hover:text-white transition-colors duration-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0 after:bg-white
            after:transition-all after:duration-300
            hover:after:w-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-white text-xl font-semibold mb-4">
        Contact
      </h2>
      <ul className="space-y-3 text-sm">
        <li>Email: support@tutorfinder.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>Location: India</li>
      </ul>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Tutor Finder. All rights reserved.
  </div>
</section>

    )
}