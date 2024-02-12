"use client";
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-full">
      <div className="flex items-center w-full">
        <div className="flex flex-col justify-center w-1/2 h-full p-12 space-y-3">
          <span className="text-[15px]">A good way in tough times</span>
          <span className="text-[40px] font-semibold">
            Unlock Opportunities with Employee Referrals
          </span>
          <span className="text-[22px]">
            Connect with top companies through employee referrals and boost your
            job search.
          </span>
          <button className="font-bold text-white bg-green-400 rounded-lg w-[130px] py-3 border-2 transition-all duration-300 border-white hover:text-green-400 hover:bg-white hover:border-2 hover:border-green-400">
            Find a job
          </button>
        </div>
        <div className="w-1/2 h-full">
          <img src="/refer.svg" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <span className="text-[32px] w-1/3 text-center font-medium">
          Unlock Opportunities with Employee Referrals
        </span>
        <div className="flex w-4/5 justify-evenly">
          <div className="flex flex-col rounded-lg w-1/3 p-5 m-5 h-[500px] shadow-lg bg-green-50">
            <img src="/sliderTwo.svg" className="h-2/3" />
            <div className="flex flex-col justify-between h-full">
              <span className="w-full mt-3 font-bold">Post a Referral</span>
              <span className="">
                Share job opportunities with ease by posting a referral. Quick
                and simple.
              </span>
              <button className="w-1/3 px-3 py-2 font-bold text-white transition-all duration-300 bg-green-500 border-2 rounded-lg border-green-50 hover:border-2 hover:border-green-500 hover:text-green-500 hover:bg-green-50">
                Post
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-lg w-1/3 p-5 m-5 h-[500px] shadow-lg bg-green-50">
            <img src="/sliderOne.svg" className="h-2/3" />
            <div className="flex flex-col justify-between h-full">
              <span className="w-full mt-3 font-bold">Apply for Referrals</span>
              <span className="">
                Discover new career paths by applying for referrals. Browse and
                apply confidently.
              </span>
              <button className="w-1/3 px-3 py-2 font-bold text-white transition-all duration-300 bg-green-500 border-2 rounded-lg border-green-50 hover:border-2 hover:border-green-500 hover:text-green-500 hover:bg-green-50">
                Apply
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-lg w-1/3 p-5 m-5 h-[500px] shadow-lg bg-green-50">
            <img src="/sliderThree.svg" className="h-2/3" />
            <div className="flex flex-col justify-between h-full">
              <span className="w-full mt-3 font-bold">Help a Homie</span>
              <span className="">
                Make a difference in someone's career journey by offering a
                referral. Direct impact, meaningful change.
              </span>
              <button className="w-1/3 px-3 py-2 font-bold text-white transition-all duration-300 bg-green-500 border-2 rounded-lg border-green-50 hover:border-2 hover:border-green-500 hover:text-green-500 hover:bg-green-50">
                Refer
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
