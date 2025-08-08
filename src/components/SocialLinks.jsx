import React from "react";
import {
    Linkedin,
    Github,
    Instagram,
    Youtube,
    ExternalLink,
    Film,
    Phone,
    Mail,
    MessageCircle,
    Code
} from "lucide-react";

const socialLinks = [

    {
        name: "LinkedIn",
        displayName: "Connect with Me",
        subText: "@bheemareddy2910", // Update handle
        icon: Linkedin,
        url: "https://www.linkedin.com/in/bheema-subramanyeswar-reddy-tatiparthi-541104344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/", // Update link
        color: "#0077B5",
        gradient: "from-[#0077B5] via-[#0A66C2] to-[#004182]",
        isPrimary: true
    },
    {
        name: "Leetcode",
        displayName: "Leetcode Profile",
        subText: "check my profile",
        icon: Code,
        url: "https://leetcode.com/bheemareddy29/",
        color: "#FCA121",
        gradient: "from-[#FCA121] to-[#FCA121]",

    },
    {
        name: "GitHub",
        displayName: "Explore My Work",
        subText: "@Bheemareddy07", // Update handle
        icon: Github,
        url: "https://github.com/Bheemareddy07", // Update with real link
        color: "#181717",
        gradient: "from-[#181717] to-[#0D1117]"
    },
    {
        name: "Whatsapp",
        displayName: "Connect on WhatsApp",
        subText: "@whatsapp", // Update username
        icon: MessageCircle,
        url: "https://wa.me/917799447698", // Update link
        color: "#34A853",
        gradient: "from-[#34A853] to-[#0F9D58]"
    },
    {
        name: "Phone",
        displayName: "Let’s Talk",
        subText: "Direct call",
        icon: Phone,
        url: "tel:+917799447698", // Update with Niranjan's number
        color: "#34A853",
        gradient: "from-[#34A853] to-[#0F9D58]",
        isPrimary: true
    }
];

const SocialLinks = () => {
    const primary = socialLinks.find(link => link.isPrimary);
    const others = socialLinks.filter(link => !link.isPrimary);
    const [instagram, youtube, github] = others;

    return (
        <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB] mb-6 flex items-center gap-2 ">
                <span className="inline-block w-8 h-1 bg-blue-400 rounded-full"></span>
                Connect with Me
            </h3>
            <div className="flex flex-col gap-4">
                {/* Primary CTA: LinkedIn / Phone */}
                <a
                    href={primary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-4 rounded-lg 
                    bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${primary.gradient}`} />

                    <div className="relative flex items-center gap-4">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" style={{ backgroundColor: primary.color }} />
                            <div className="relative p-2 rounded-md">
                                <primary.icon className="w-6 h-6 transition-all duration-500 group-hover:scale-105" style={{ color: primary.color }} />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                {primary.displayName}
                            </span>
                            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {primary.subText}
                            </span>
                        </div>
                    </div>

                    <ExternalLink className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                </a>

                {/* Instagram & YouTube */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[instagram, youtube].map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-3 p-4 rounded-xl 
                            bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />

                            <div className="relative flex items-center justify-center">
                                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30" style={{ backgroundColor: link.color }} />
                                <div className="relative p-2 rounded-lg">
                                    <link.icon className="w-5 h-5 transition-all duration-500 group-hover:scale-110" style={{ color: link.color }} />
                                </div>
                            </div>

                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {link.displayName}
                                </span>
                                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                                    {link.subText}
                                </span>
                            </div>

                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* GitHub & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[github, socialLinks.find(l => l.name === "Phone")].map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-3 p-4 rounded-xl 
              bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />

                            <div className="relative flex items-center justify-center">
                                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30" style={{ backgroundColor: link.color }} />
                                <div className="relative p-2 rounded-lg">
                                    <link.icon className="w-5 h-5 transition-all duration-500 group-hover:scale-110" style={{ color: link.color }} />
                                </div>
                            </div>

                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {link.displayName}
                                </span>
                                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                                    {link.subText}
                                </span>
                            </div>

                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;
