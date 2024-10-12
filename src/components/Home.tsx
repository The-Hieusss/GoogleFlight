import SearchBar from "./SearchBar";
import TopNav from "./Topnav";

function Home() {
  return (
    <div className="flex flex-col h-screen w-[100vw] overflow-scroll	 ">
      <TopNav />
      {/* Main Content Area */}

      <div className="w-full h-full flex flex-col justify-center items-center bg-[url('/cover.gif')]">
        <div className="flex flex-col justify-center items-center ">
          <div className="pb-20 font-semibold  text-6xl  ">Flights</div>
          <SearchBar />
         
        </div>
      </div>
    </div>
  );
}

export default Home;
