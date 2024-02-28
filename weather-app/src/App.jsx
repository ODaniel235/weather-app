import "./styles/output.css";
function App() {
  return (
    <>
      <main className=" h-screen bg-[#0B121E] flex flex-col gap-[10vh] pt-24 pb-12 blur-0 w-screen items-center">
        <img src="cloud.png" alt="cloud" height={220} width={220} />
        <p className="text-white text-2xl">Check Weather Conditions</p>
        <button
          type="button"
          className=" bg-[#0393FE] w-12 flex items-center justify-center h-12 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#47B8F4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="white"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
      </main>
    </>
  );
}
export default App;
