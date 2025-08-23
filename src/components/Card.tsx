import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/shareIcon";
import { TrashIcon } from "../icons/trashIcon";

interface CardProps{
    title:string;
    link:string;
    type:"twitter" | "youtube"
}

export function Card({ title, link, type}:CardProps){
    return  <div className="p-4 bg-white rounded-md shadow-md border border-gray-200 max-w-72 ">
        <div className="flex justify-between">
                <div className="flex justify-between items-center text-md">
                    <div className="pr-2 text-gray-500">
                      <DocumentIcon/>
                    </div>
                    {title}
                </div>
                <div className="flex justify-between text-gray-500 items-center">
                    <div className="pr-4">
                        <a href={link} target="_blank">
                        <ShareIcon/>
                        </a>
                    </div>
                    <TrashIcon/>
                </div>
        </div>
        <div className="pt-6">
         {type==="youtube" && <iframe className="w-full" src="https://www.youtube.com/embed/P1SJ-g6JBZo?si=a9ZW8aUeqgC7xR15" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        </div>
    </div>
}