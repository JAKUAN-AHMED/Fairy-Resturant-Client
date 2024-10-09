import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=" bg-[#1F2937] text-gray-300 p-6">
            <h2 className="text-center text-xl mt-6">Contact Us</h2>
            <div className="text-center mt-4">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          <div className="bg-[#111827] text-gray-300 pt-4 pr-3">
            <h2 className="text-center text-xl mt-6">Follow US</h2>
            <div className="text-center">
              <p>Join us on social media</p>
              <ul className="flex items-center justify-center gap-4  text-2xl">
                <li className="mb-4">
                  <a href="#">
                    <FaFacebookF></FaFacebookF>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#">
                    <FaInstagram></FaInstagram>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter></FaTwitter>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black p-4">
          <p className="text-center text-gray-400 text-sm">
            Copyright &copy; CulinaryCloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
