export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen dark:bg-[#343541]">
        <div className="w-1/6 dark:bg-[#202123] p-4">
          <h1 className="text-xl">Grammar Questions</h1>
          <h1 className="text-xl">Mock Test</h1>
          <h1 className="text-xl">Vocab</h1>
        </div>

        <div className="w-4/6 dark:bg-[#343541] p-4">
          <h1 className="text-xl">Main Content</h1>
        </div>

        <div className="w-1/6 dark:bg-[#202123] p-4 flex flex-col justify-between">
          <div>
            <div> Scenarios</div>
            <div>Anki Generation</div>
          </div>

          <div>
            <div>Export</div>
            <div>Account</div>
            <div>Open AI Key</div>
          </div>
        </div>
      </div>
    </main>
  );
}
