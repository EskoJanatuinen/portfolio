import React from "react";

const Footer = () => {
    return (
        <div className="sm:py-10 lg:mt-4 lg:pt-4">
            <div className="max-w-6xl mx-12 md:mx-auto pt-8">
                <div className="pb-4 mb-2 border-t-2"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center mb-8 md:mb-0 text-sm">
                    <p >Built from scratch with Next.js, Tailwind & Vercel</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
