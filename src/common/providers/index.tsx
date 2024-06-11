import { ReactNode } from "react"
import { SafeAreaProvider } from "./Safe-area"
import { SplashScreenProvider } from "./splash-screen"

type ProvidersProps = { children: ReactNode }

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <SplashScreenProvider>
            <SafeAreaProvider>
                {children}
            </SafeAreaProvider>
        </SplashScreenProvider>
    )
}