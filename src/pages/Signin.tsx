import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signin(){
    return <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            
            <div className="flex justify-center pt-4 ">
                <Button loading={true} variant="primary" text="Signin" size="md" fullwidth={true}/>
            </div>
        </div>
    </div>
}