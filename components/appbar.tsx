"use client"
import "../src/app/globals.css";
import Link from 'next/link'


export default function AppBar() {
    return (
        <header className="grid grid-cols-1 gap-2">
            <h1 className="text-[2.5rem] pl-[40px] pt-10">
                Jason Moya
            </h1>
            <div className="grid grid-cols-3 divide-x-4 divide-white h-14 text-white card_text">
                <Link href="/projects" className="card_color flex items-center justify-center"> Projects </Link>
                <Link href="/" className="card_color flex items-center justify-center"> Home </Link>
                <Link href="/about" className="card_color flex items-center justify-center"> About </Link>
            </div>


        </header>
    );

}