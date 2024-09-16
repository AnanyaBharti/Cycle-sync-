// import Carousel from "@/components/carousel";

import Carousel from "@/components/ui/carousal";


export default function Home() {
  const slides = ["https://www.miracare.com/wp-content/uploads/2021/06/00-1.jpeg", "https://i.pinimg.com/564x/35/3e/51/353e51eb45328f1a828b4ee32868cbca.jpg"]
  return (
    <main>
      <div className="bg-[rgb(247,140,138)]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className=" inset-y-0 left-0  flex items-center justify-center sm:items-stretch sm:justify-start">
              {/* You can add your logo or brand name here */<a href="#" className="text-[rgb(146,58,57)] px-2 py-2 text-lg font-extrabold">Period Tracker</a>}
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:bg-[rgb(222,115,113)] hover:text-white rounded-md px-2 py-2 text-sm font-medium">Login</a>
                <a href="#" className="text-white bg-[rgb(197,90,88)] hover:bg-[rgb(222,115,113)] rounded-md px-2 py-2 text-sm font-medium">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between py-16 px-0 mx-0">
        <Carousel slides={slides} />
      </div>

      <div className="bg-[rgb(222,115,113)] h-16">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-center ">Contact Us</div>
          <div className=" flex items-center ">
            <span className="inline-block h-8 w-8">


              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />vishsinha@gmail.com</svg>


            </span>
            <div className=" text-white">vishsinha@gmail.com</div>

          </div>

        </div>
      </div>
    </main>
  );
}
