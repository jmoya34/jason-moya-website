"use client"

import { ReactNode } from "react";
import SocialButton from "../socials";
import { useMediaQuery } from "@uidotdev/usehooks";

export function HomeContent(){
    const isMobile = useMediaQuery("only screen and (max-width : 640px)");
    return (
        <div className="sm:grid sm:grid-cols-2 gap-2 justify-items-center">
            {isMobile ? (
                <>
                    <SocialButton />
                    <AboutBlock />
                    <MissionBlock />
                </>
            ) : (
                <>
                <AboutBlock />
                <div>
                    <SocialButton />
                    <MissionBlock />
                </div>
                </>
            )}
        </div>
    );
}

export function AboutBlock(){
  return (
    <div className="grid grid-cols-2 pl-4 pr-4  sm:pt-4 gap-5 justify-items-center items-center">
      <img className="w-50 h-auto" src="/assets/headshot.png" alt="Headshot"/>
      <CardBlock>
        <h1 className="pb-4 sm:text-[24px] [@media(min-width:640px)_and_(max-width:934px)]:text-[16px] text-[14px]">Electrical and Computer Engineer</h1>
        <h1 className="sm:text-[24px] [@media(min-width:640px)_and_(max-width:934px)]:text-[16px] text-[14px]">Pursing masters in RF, Analog, and Mixed Signal Design.</h1>
      </CardBlock>
    </div>
  );
}


export function MissionBlock(){
  return (
    <div className="pl-4 pr-4 pb-4 pt-4 sm:pt-4 gap-5 justify-items-center items-center">
      <CardBlock>
        <h1 className="pb-4 sm:text-[24px] [@media(min-width:640px)_and_(max-width:934px)]:text-[16px] text-[14px]">My mission in life is to become a respected engineer in the industry, with the experience and wisdom to teach future generations of Electrical and Computer Engineers as a professor at a respected university.</h1>
      </CardBlock>
    </div>
  );
}



type cardProps = {
  className?: string;
  children: ReactNode;
};

export function CardBlock({className, children}: cardProps){
  return (
    <div className={`card_color p-5 w-fit h-fit rounded-lg shadow-lg shadow-emerald-700/50 ${className ?? ""}`}>
      {children}
    </div>
  );
}