import * as React from 'react';
import Icon, { IconProps } from 'components/icons/Icon';

const LogoIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon width={36} height={36} viewBox="0 0 36 36" {...props}>
      <g clipPath="url(#clip0_508_1509)">
        <path
          d="M17.8586 0.506165C27.521 0.506165 35.3521 8.33833 35.3521 18C35.3521 27.6628 27.521 35.4938 17.8586 35.4938C8.19691 35.4938 0.364746 27.6628 0.364746 18C0.364746 8.33833 8.19691 0.506165 17.8586 0.506165Z"
          fill="white"
        />
        <path
          d="M17.7688 33.4343C26.4389 33.4343 33.4674 26.4058 33.4674 17.7358C33.4674 9.0657 26.4389 2.03723 17.7688 2.03723C9.09878 2.03723 2.07031 9.0657 2.07031 17.7358C2.07031 26.4058 9.09878 33.4343 17.7688 33.4343Z"
          fill="url(#paint0_linear_508_1509)"
        />
        <path
          d="M18.1897 30.3613C16.3901 28.1578 15.4422 27.0086 15.3479 26.915C14.9918 26.4884 14.3878 25.8966 13.5356 25.1388C13.9144 23.1008 14.4119 21.5143 15.0282 20.3767C15.2647 19.9739 16.2479 18.6473 17.9773 16.3969C18.9252 18.3629 20.2046 19.6895 21.8149 20.3767C22.1695 20.5189 23.6977 20.839 26.3974 21.3368C28.3882 21.7382 29.9876 22.4852 31.1947 23.5753C32.9004 25.114 34.3804 27.6728 35.6357 31.2494C30.5431 28.3831 26.9068 27.3769 24.7284 28.2294C23.7092 28.8457 22.8326 29.331 22.099 29.6863C20.9858 30.2544 19.6826 30.4798 18.1897 30.3613Z"
          fill="white"
        />
        <path
          d="M18.7586 12.5953C18.5452 13.9457 18.084 15.0477 17.373 15.8998C16.9698 16.3973 16.1882 17.0845 15.0276 17.9608C12.7056 19.6657 11.0244 21.8689 9.98219 24.5693C8.96375 27.1278 8.70311 29.722 9.20099 32.3518L8.45507 32.4216C7.88591 29.7699 8.12351 27.1516 9.16535 24.5697C10.2313 21.8218 12.0317 19.5232 14.5661 17.6767C15.964 16.6342 16.8762 15.2485 17.3024 13.5198C17.634 12.0989 17.598 10.5466 17.1955 8.86466C16.8881 7.41962 16.378 6.34178 15.6684 5.6315C14.9808 4.94462 14.2939 4.69622 13.6067 4.88558C11.996 5.31182 11.3797 7.34942 11.7595 10.9969C12.1148 14.4555 12.7783 16.6349 13.7489 17.5345C12.778 17.6062 11.9374 16.2796 11.2264 13.5551C10.5391 10.8547 10.4441 8.50934 10.9416 6.51998C11.1551 5.5253 11.617 4.77902 12.3272 4.2815C13.417 3.52334 14.6845 3.61838 16.1299 4.56554C17.0771 5.18186 17.7758 6.1409 18.2251 7.44374C18.7705 8.86466 18.9491 10.5822 18.7586 12.5953ZM11.8657 32.6041C10.5157 26.532 11.4276 22.149 14.6021 19.4523C12.4464 24.1395 11.878 28.5473 12.8964 32.6769L11.8657 32.6041Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_508_1509"
          x1="15.0424"
          y1="2.27336"
          x2="20.4954"
          y2="33.1986"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B5460F" />
          <stop offset="1" stopColor="#B5460F" />
        </linearGradient>
        <clipPath id="clip0_508_1509">
          <rect width={36} height={36} fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default LogoIcon;