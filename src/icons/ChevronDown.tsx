import { IconProps } from "../types";

const ChevronDown = ({ height, width, fill='#000', stroke='#000', className }: IconProps) => {
  return (
    <svg 
      fill={fill}
      height={`${height}px`}
      stroke={stroke}
      width={`${width}px`}
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
	    viewBox="0 0 407.437 407.437">
      <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
    </svg>
  );
};

export default ChevronDown;