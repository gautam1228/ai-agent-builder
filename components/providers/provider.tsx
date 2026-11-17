"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "../ui/tooltip";
import { QueryProvider } from "./query-provider";

export function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TooltipProvider>
                <QueryProvider>{children}</QueryProvider>
            </TooltipProvider>
        </ThemeProvider>
    );
}
