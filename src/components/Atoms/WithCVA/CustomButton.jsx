import React from 'react'
import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";



const Variants = cva(
    /* button base style */
    "box-border align-middle p-[9px] px-[30px] flex h-auto w-auto  transition-colors duration-150 text-[18px] md:text-[16px] lg:text-[19px] font-normal leading-[14px] md:leading-[29px]",
    {
        variants: {
            /* button colors */
            intent: {
                light: "bg-white text-[#191919]",
                dark: "bg-[#191919] text-white",
                dark_nobg: "bg-transparent text-black",
                accent_bg: "bg-[#ff6900] text-white",
                accent_nobg: "bg-transparent text-[#ff6900]",
            },
            border: {
                no: "border-none",
                always: "border border-[#191919]",
                custom: "border border-[#191919] md:border-none",
                

            },

            /* button hover */
            hover: {
                no: "hover:none",
                underline: "md:hover:underline",
                bg: "hover:bg-[#333]",
            },

            /* button roundness */
            rounded: {
                no: "rounded-none",
                yes: "rounded-lg",
            },
            order: {
                text_first: 'flex-row-reverse',
                icon_first: 'flex-row',
              },
        }
    }
);


const CustomButton = ({ to, text, intent, border, hover, rounded, icon, order }) => {
    const variants = { intent, border, hover, rounded, icon, order };
  
    return (
        <Link to={to}>
        <button className={Variants(variants)}>
          {order === 'iconFirst' && icon && <div>{icon}&nbsp;</div>}
          {text}
          {order === 'textFirst' && icon && <div>&nbsp;{icon}</div>}
        </button>
      </Link>
    );
  };

export default CustomButton