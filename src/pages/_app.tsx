import '@/styles/globals.css';
import './components/Sidebar/index.css';
import './components/Home/index.css';
import './components/AboutMe/index.css';
import './components/Technologie/index.css';
import './components/Midias/index.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
