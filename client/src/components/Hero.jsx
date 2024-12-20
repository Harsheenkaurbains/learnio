import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);


  return (
    <div className="relative flex h-full items-center justify-center bg-cover bg-center
    " style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative z-10 w-full max-w-[860px] text-center text-white">
        <h1 className="text-4xl md:text-5xl">LEARNIO</h1>
        <p className="mt-5 text-sm font-light md:text-xl ">
        Welcome to Learnio – your ultimate platform for organizing, accessing, and sharing PDF notes effortlessly. Transform the way you manage your study materials with our streamlined solutions. Say farewell to disorganized notebooks and embrace a new level of academic excellence. Simplify your study routine, make your notes work for you, and step into a new era of innovation. Start your journey with Learnio today!
        </p>
        <div className="mt-5">
          <div
            className="flex items-center justify-center gap-5
          "
          >
            {isAuthenticated ? (
              <Link to="/search" className="rounded-xl bg-[#FAF7F0] px-6 py-3 text-lg text-black hover:bg-[#D8D2C2]">Get Started</Link>
            ) : (
              <>
                <Link to="/login">
                  <button className="rounded-xl bg-[#FAF7F0] px-7 py-4  text-black hover:bg-[#D8D2C2]">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-xl bg-[#FAF7F0] px-7 py-4  text-black hover:bg-[#D8D2C2]">
                    Signup
                  </button>
                </Link>

              </>
            )}

          </div>
        </div >
      </div >
    </div >
  );
};

export default Hero;
