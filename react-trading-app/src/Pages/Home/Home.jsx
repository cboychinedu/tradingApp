// Importing the necessary modules
import "./Home.css"; 
import React, { Fragment, useEffect } from 'react'; // Added useEffect
import { createAppKit } from '@reown/appkit'; // Imported AppKitProvider
import { mantle } from '@reown/appkit/networks';
import PartnerCard from "../../Components/PartnerCard";
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import binanceLogo from "../../Images/binance.png";
import bybitLogo from "../../Images/bybit.png"; 
import coingeckoLogo from "../../Images/coingecko.svg"; 
import coinmarketcapLogo from "../../Images/coinmarketcap.svg"; 
import foliusLogo from "../../Images/folius.webp";

// Get the project id value
const projectId = "d38b047025ef5a3928c79ab92f7122c3";

// Setting the network 
const networks = [mantle];

// Setting the wagmi adapter 
const wagmiAdapter = new WagmiAdapter({
    projectId,
    networks,
});

// Configure the metadata
const metadata = {
    name: 'AppKit',
    description: 'AppKit Example',
    url: 'https://example.com',
    icons: ['https://avatars.githubusercontent.com/u/179229932']
};

// Create the AppKit instance (renamed from 'modal' for clarity)
const appKitInstance = createAppKit({
    adapters: [wagmiAdapter],
    networks: [mantle],
    metadata,
    projectId,
    features: {
        analytics: true
    }
});

// Define the partners data outside the component or fetch it from an API
const partnersData = [
    { img: binanceLogo, name: 'Binance', desc: 'Partners' },
    { img: bybitLogo, name: 'Bybit', desc: 'Smart trading' },
    { img: coingeckoLogo, name: 'Coin Gecko', desc: 'Investors' },
    { img: coinmarketcapLogo, name: 'Coin Market', desc: 'Partners' },
    { img: foliusLogo, name: 'Folius Market', desc: 'Investors' },
];


// Helper function to handle static paths (adjust as needed for your React setup)
const getStaticPath = (filename) => {
    // In a CRA or Vite app, this often becomes a simple relative path
    return filename;
};

// Extracted marquee content logic for clarity
const MarqueeContent = ({ partnersData  }) => (
    <>
        {/* Marquee content 1 */}
        <div className="flex items-center space-x-8 px-8 marquee-content">
            {partnersData.map((partner, index) => (
                <PartnerCard
                    key={`partner-1-${index}`}
                    partner={partner}
                    getImagePath={(img) => img }
                />
            ))}
        </div>

        {/* Marquee content 2 (Duplicate for seamless effect) */}
        <div className="flex items-center space-x-8 px-8 marquee-content">
            {partnersData.map((partner, index) => (
                <PartnerCard
                    key={`partner-2-${index}`}
                    partner={partner}
                    getImagePath={(img) => img }
                />
            ))}
        </div>
    </>
);


// Create the functional component (renamed from Home to WelcomePortal, assuming that was the intent, 
// but keeping the export as Home if that's required for file structure)
const Home = () => {
    
    // The original useEffect logic, moved inside the component
    useEffect(() => {
        // --- Web3 Logic Migration Placeholder ---
        console.log("Web3 scripts loaded (or should be imported via npm and managed in React state).");
    }, []);

    // Wrap the component logic in the AppKitProvider to make context available
    // for custom elements like <appkit-button>
    return (
            <div className="font-[Comfortaa]">
                
                {/* Header */}
                <header className="flex items-center justify-center mt-2 text-[20px] font-bold">
                    <h3 className="headerFont">PARTNERS</h3>
                </header>

                {/* Partners Marquee */}
                <div className="w-full h-[7em] mt-[7px] bg-[#093967] overflow-hidden relative">
                    <div className="marquee-animation absolute top-0 left-0 bg-[#093967] h-full flex items-center whitespace-nowrap text-white text-2xl font-bold">
                        <MarqueeContent partnersData={partnersData}/>
                    </div>
                </div>

                {/* --- */}

                {/* First Section */}
                <section className="firstSection mt-10 mx-auto w-4/5 h-[7em]">
                    <div>
                        <h1 className="header-text text-[#142a49] text-[20px] font-bold leading-snug">
                            FIZNEN WALLET CONNECT <br /> PORTAL
                        </h1>
                        <p className="text-[#142a49] text-[12px] mt-1">
                            The #1 Multi-Chain Launchpad.
                        </p>
                    </div>
                </section>

                {/* --- */}

                {/* Second Section */}
                <section className="secondSection shadow-[2px_2px_51px_-33px] mt-[5px] mx-auto w-[85%] lg:w-[70%] h-[30em] border border-[rgb(198,207,215)] p-[1rem] rounded-[6px] mb-[100px]">
                    <main className="sectionSectionInnerMain">
                        <div>
                            <div className="dot"></div>
                        </div>
                        <div>
                            <div>
                                <h1> <b> FIZEN </b> </h1>
                            </div>
                            <div>
                                <p className="bg-[green] text-white text-[11px] w-[100%] p-[7px] rounded-[11px]"> Airdrop ongoing </p>
                            </div>
                        </div>
                    </main>
                    
                    {/* Replaced 'Connect Wallet' button with the AppKit component */}
                    {/* Connect Wallet Button */}
                    <main>
                        {/* FIX: Ensure w-full is used on the custom element for full width */}
                        <appkit-button 
                            className="w-[100%] mt-[15px] ml-[15px] text-white"
                        >
                            Connect Wallet
                        </appkit-button>
                    </main>

                    {/* Adding the text div */}
                    <main>
                        <div>
                            <p className="mt-[23px] text-[20px] bg-gradient-to-r from-[#0bbdda] via-[#7d58f2] to-[#fb71ae] bg-clip-text text-transparent"> Connect Wallet and Stand a Chance for Massive Airdrops </p>
                        </div>
                        <div className="mt-[25px] flex justify-between">
                            <p className="text-[13px]"> Airdrop Ended!</p>
                            <p className="text-[12px] text-[orange]"> 50.0% </p>
                        </div>
                        <div>
                            <div className="w-full bg-[#525252] rounded-[6px] h-[8px] overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-[6px]" style={{ width: '50%' }}></div>
                            </div>
                            <div className="mt-[7px]">
                                <p className="text-[12px] text-[#b5b5b5]"> Total airdrop pool: 4.279 billion PORTAL </p>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[28px] text-[13px]">
                                <p>
                                    💰 Host  FIZNEN
                                </p>
                            </div>
                            <div className="flex justify-start">
                                <div>
                                    <p className="text-[12px]">
                                        {/* Removed the unnecessary 'main' tag wrapping content */}
                                        <span className="inline-flex items-center gap-1">
                                            <div> 🏃‍♂ </div>
                                            <div className="text-[12px]"> Rule </div>
                                        </span>
                                    </p>
                                </div>
                                <div className="ml-[10px] text-[12px] mt-[4px]">
                                    <p>
                                        Strictly for eligible active wallets (new wallets or empty wallets are excluded). Wallets from exchanges are not eligible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>


                {/* Adding the footer */}
                <footer className="h-[19vh] bg-[#0a3967] text-[#999999] p-[28px]">
                    <main className="mx-auto lg:w-[85%]">
                        <div className="text-[10px] text-center mt-[27px]">
                            <p> © Copyright FIZNEN 2024. All rights reserved. </p>
                        </div>
                        <div className="text-[10px] mt-[19px] text-justify lg:text-center">
                            <p>
                                Participants/Citizens from the following countries are strictly
                                excluded/not allowed to participate in the IDOs: Bolivia, Cambodia,
                                Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea.
                            </p>
                        </div>
                    </main>
                </footer>
            </div>
    );
};

// Exporting the component (using the assumed intended name)
export default Home;
