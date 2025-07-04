import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CountdownTimerSection = (): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: timeLeft.days.toString().padStart(2, '0'), label: "DAYS" },
    { value: timeLeft.hours.toString().padStart(2, '0'), label: "HOURS" },
    { value: timeLeft.minutes.toString().padStart(2, '0'), label: "MINUTES" },
    { value: timeLeft.seconds.toString().padStart(2, '0'), label: "SECONDS" },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-normal mb-8 sm:mb-10 md:mb-12 tracking-normal leading-tight [font-family:'Orbitron',Helvetica] transition-all duration-300">
          Launch Countdown
        </h2>

        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 flex-wrap">
          {countdownItems.map((item, index) => (
            <Card
              key={index}
              className="w-[80px] sm:w-[90px] md:w-[100px] h-[80px] sm:h-[90px] md:h-[104px] rounded-xl opacity-90 bg-[linear-gradient(180deg,rgba(237,200,79,1)_0%,rgba(199,156,39,1)_100%)] border-0 hover:scale-105 hover:opacity-100 transition-all duration-300 group"
            >
              <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                <div className="[font-family:'Oxanium',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl text-center transition-all duration-300 group-hover:scale-110">
                  {item.value}
                </div>
                <div className="[font-family:'Oxanium',Helvetica] font-normal text-[#656565] text-xs sm:text-sm text-center mt-1 sm:mt-2 md:mt-3 transition-all duration-300">
                  {item.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-gray-400 text-sm sm:text-base text-center [font-family:'Oxanium',Helvetica] font-normal leading-6 transition-all duration-300">
          The adventure begins soon. Don&#39;t miss out!
        </p>
      </div>
    </section>
  );
};
