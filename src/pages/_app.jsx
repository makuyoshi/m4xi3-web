import '@/styles/globals.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { NextUIProvider } from '@nextui-org/react';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    );
}
