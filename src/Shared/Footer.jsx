import Section from "../Components/Section";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-8 mt-10">
      <div className="uppercase flex justify-center mb-8">
        <h2 className="text-white font-semibold text-2xl">ClothMart</h2>
      </div>
      <Section className="px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* About Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Shop</h3>
            <p className="text-sm mb-4">
              Lorem Is Dolor Sit Amet, Consectetur Adipisicing Elit. Read More
            </p>
            <p className="text-sm">E. Hello@ClothMart.com</p>
            <p className="text-sm">T. 1234567890</p>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Store Locator
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Size Guide
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Help & FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Return My Order
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Refer A Friend
                </a>
              </li>
            </ul>
          </div>
          {/* Terms & Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Terms & Policies</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Duties & Taxes
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Shipping Info
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Threads
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024{" "}
            <a
              className="hover:underline"
              href="https://najim-dev.vercel.app"
              target="_blank"
            >
              Najim
            </a>{" "}
            . All Right Reserved
          </p>
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <img
              src="https://img.icons8.com/?size=256&id=13608&format=png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://img.icons8.com/?size=256&id=d3FdjviJ7gNe&format=png"
              alt="Google Pay"
              className="h-6"
            />
            <img
              src="https://img.icons8.com/?size=256&id=21295&format=png"
              alt="Amazon Pay"
              className="h-6"
            />
            <img
              src="https://img.icons8.com/?size=256&id=13611&format=png"
              alt="PayPal"
              className="h-6"
            />
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span>English</span>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
