import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
    return (
        <nav className="flex justify-between p-4 border-b">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Rizze ✨  
                </h1>
            </div>
            <div className="flex gap-2 items-center">
                <Button variant="outline">Sign in</Button>
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar