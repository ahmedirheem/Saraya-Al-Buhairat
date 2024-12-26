import Image from 'next/image';
import React from 'react'

interface MapControlBtnProps { 
  icon?: string; 
  title: string, 
  text?: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const MapControlBtn = ({ icon, title, text, onClick }: MapControlBtnProps) => {
  return (
    <div className="relative group mt-4">
      <button onClick={onClick} className="flex items-center justify-center rounded-md text-white bg-slate-500 hover:bg-slate-600 transition-all cursor-pointer w-[34px] h-[34px] text-xs font-semibold">
        {icon && <Image className="w-5" src={`/assets/icons/${icon}.svg`} alt={icon} width={63} height={95} />}
        {text}
      </button>
      <div className="absolute left-[0%] top-1/2 -translate-y-1/2 bg-gray-700 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-300 whitespace-nowrap">
        {title}
      </div>
    </div>
  )
}

export default MapControlBtn


// I have this svg icon, I create a file eye.svg and I put it on, I want to use it in my react file with ability to change it's color and width and height how??
// <svg width="25" height="25" viewBox="0 0 25 25" fill="#fff" xmlns="http://www.w3.org/2000/svg">
// <path d="M12.5 15.3608C13.8018 15.3608 14.8571 14.3114 14.8571 13.017C14.8571 11.7225 13.8018 10.6731 12.5 10.6731C11.1983 10.6731 10.143 11.7225 10.143 13.017C10.143 14.3114 11.1983 15.3608 12.5 15.3608Z" fill="#fff"></path>
// <path d="M22.5096 10.6732L21.6532 9.82164C19.2241 7.41041 15.9322 6.05615 12.5 6.05615C9.06781 6.05615 5.77587 7.41041 3.34682 9.82164L2.49043 10.6732C1.85616 11.3059 0.5 13.0562 0.5 13.0562C0.5 13.0562 1.85616 14.8064 2.49043 15.4391L3.34682 16.2907C5.77587 18.7019 9.06781 20.0562 12.5 20.0562C15.9322 20.0562 19.2241 18.7019 21.6532 16.2907L22.5096 15.4391C23.1438 14.8064 24.5 13.0562 24.5 13.0562C24.5 13.0562 23.1438 11.3059 22.5096 10.6732ZM12.5 16.9235C11.723 16.9235 10.9635 16.6944 10.3175 16.2652C9.67147 15.8359 9.16796 15.2258 8.87063 14.512C8.5733 13.7982 8.4955 13.0128 8.64708 12.255C8.79866 11.4972 9.1728 10.8012 9.7222 10.2548C10.2716 9.70852 10.9716 9.33647 11.7336 9.18574C12.4956 9.03501 13.2855 9.11237 14.0033 9.40803C14.7212 9.7037 15.3347 10.2044 15.7663 10.8468C16.198 11.4892 16.4284 12.2445 16.4284 13.0171C16.4284 14.0531 16.0145 15.0467 15.2778 15.7793C14.5411 16.5119 13.5419 16.9235 12.5 16.9235Z" fill="#fff"></path>
// </svg>