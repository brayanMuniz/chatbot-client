import { SidebarButton } from "@/components/Sidebar/SidebarButton";
import { IconFileExport, IconSettings } from "@tabler/icons-react";

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

          <div className="flex flex-col items-center space-y-1 border-t pt-1 text-sm">
            <SidebarButton text="Export Data" icon={<IconFileExport size={18} />} />
            <SidebarButton text="Account" icon={<IconSettings size={18} />} />
            <SidebarButton text="Open AI Key" icon={<IconSettings size={18} />} />
          </div>
        </div>
      </div>
    </main>
  );
}
