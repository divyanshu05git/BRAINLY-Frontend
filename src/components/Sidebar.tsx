import { BrainIcon } from "../icons/BrainIcon";
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SidebarItems";

export function SideBar(){
    return <div className="h-screen w-72 bg-white border-r fixed left-0 top-0 pl-6">
        <div className="flex text-2xl text-black-400 items-center pt-8">
            <div className="pr-2 text-purple-600">
                <BrainIcon />
            </div>
            Brainly
        </div>
       <div className="pt-8 pl-4"> 
            <SideBarItem text="Twitter" icon={<XIcon/>}/>
            <SideBarItem text="YouTube" icon={<YoutubeIcon/>}/>
       </div> 

    </div>
}