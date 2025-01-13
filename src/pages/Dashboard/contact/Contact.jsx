function Contact() {
  return (
    <div className="min-h-screen bg-black-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section: Contact Information */}
        <div className="md:w-1/2 p-6 bg-orange-400 text-white rounded-t-lg md:rounded-l-lg md:rounded-t-none">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            We’d love to hear from you! Please fill out the form on the right or
            get in touch with us through the details below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons text-xl mr-2">location_on</span>
              <span>Panthopath,Dhanmondi 32,Dhaka</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-xl mr-2">email</span>
              <span>smaranshaha@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-xl mr-2">phone</span>
              <span>01770889987</span>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:w-1/2 p-6 bg-orange-400">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
