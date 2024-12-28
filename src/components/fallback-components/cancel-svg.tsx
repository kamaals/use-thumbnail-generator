import { SVGProps as ReactEVGPROPS } from 'react';

export type SVGAttributes = Partial<ReactEVGPROPS<SVGSVGElement>>;
export type SVGProps = SVGAttributes & {
  size?: number | string;
  strokeWidth?: number | string;
};
function CancelSvg({ size = 16, strokeWidth = 1, ...props }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default CancelSvg;
