
export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-500  ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-10">
        <h1 className="text-center text-2xl font-bold mb-5 text-gray-800">
          Register
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

