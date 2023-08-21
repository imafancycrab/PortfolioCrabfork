import React from "react";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Rates = () => {
    return (
        <section className={`${inter.className} flex items-center justify-center h-screen bg-gradient-to-br from-cerulean to-indigo-600`}>
            <div className="fader w-[60vw] h-[480px] bg-SpaceC border-2 border-funkyRed rounded-2xl shadow-2xl p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl font-semibold text-funkyRed mb-2">My Payment Rates</h2>
                    <p className="text-lg text-white">
                        Get high-quality service at competitive rates:
                        <br />
                        150 Robux per String
                        <br />
                        0.35 EUR per String
                    </p>
                </div>
            </div>
            <Sidebar />
        </section>
    );
}

export default Rates;
