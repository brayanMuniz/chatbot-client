export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen bg-gray-100">
        <div className="w-1/6 bg-white p-4">
          <h1 className="text-xl">Left Sidebar</h1>
          {/* Your left column content goes here */}
        </div>
        <div className="w-4/6 bg-gray-200 p-4">
          <h1 className="text-xl">Main Content</h1>
          {/* Your main column content goes here */}
        </div>
        <div className="w-1/6 bg-white p-4">
          <h1 className="text-xl">Right Sidebar</h1>
          {/* Your right column content goes here */}
        </div>
      </div>
    </main>
  );
}
