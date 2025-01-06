function ClockSvg({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={'lucide lucide-circle-check ' + className ? className : ''}
    >
      <path d="M13.228 21.925A10 10 0 1 1 21.994 12.338" />
      <path d="M12 6v6l1.562.781" />
      <path d="m14 18 4-4 4 4" />
      <path d="M18 22v-8" />
    </svg>
  );
}

export default ClockSvg;
