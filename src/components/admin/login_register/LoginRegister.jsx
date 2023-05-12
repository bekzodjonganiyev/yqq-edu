import { useNavigate } from "react-router-dom";
import { userActions } from "../../../context";

const LoginRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      password: e.target.password.value,
      email: e.target.email.value,
    };

    userActions.loginUser(user, "auth/login");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="px-4 text-white bg-[#F06D06] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Yangiyer flour trading</a>
          </div>
          <p className="mt-6 font-normal text-center text-white md:mt-0">
            LLP Yangiyer Flour Trading is an independent, family owned company.
            Operating since 1991. Based in the heart of central Asia.
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Login the Admin panel
          </h3>
          <form
            action="#"
            className="flex flex-col space-y-5 py-20"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-500"
              >
                Name
              </label>
              <input
                required
                name="name"
                type="text"
                id="name"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                required
                name="password"
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email
                </label>
              </div>
              <input
                required
                name="email"
                type="email"
                id="email"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#F06D06] rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Kirish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
