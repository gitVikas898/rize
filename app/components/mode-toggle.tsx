"use client"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"


export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Button variant={"outline"} className="hover:cursor-pointer"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <Sun fill="yellow" className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
        </Button>
    )
}

