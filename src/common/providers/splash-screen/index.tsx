import { ReactNode, createContext, useEffect, useState } from "react";
import { SplashScreenView } from "../../../components/splash-screen/splash-screen-view";

type SplashScreenProviderProps = {
    children: ReactNode;
}

type SplashScreenContextProps = {
    hideSplashScreen: () => void;
}

export const SplashScreenContext = createContext<SplashScreenContextProps | undefined>(undefined);

export const SplashScreenProvider = ({ children }: SplashScreenProviderProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const hideSplashScreen = () => {
        setIsVisible(false);
    };
    useEffect(() => {
        const timer = setTimeout(hideSplashScreen, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <SplashScreenContext.Provider value={{ hideSplashScreen }}>
            {isVisible ? <SplashScreenView />
                : children}
        </SplashScreenContext.Provider>
    )
}