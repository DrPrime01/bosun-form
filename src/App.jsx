import FormPage from "./pages/FormPage";

function App() {
  return (
    <main className="flex h-screen max-h-screen w-screen fixed inset-0">
      <div className="h-full basis-2/5 hidden md:flex bg-black"></div>
      <div className="h-full w-full md:basis-3/5 flex flex-col items-center overflow-y-auto p-10 md:p-20">
        <FormPage />
      </div>
    </main>
  );
}

export default App;
