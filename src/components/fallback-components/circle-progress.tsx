const Circle = ({ colour, percentage }: { colour: string; percentage: number }) => {
  const r = 6;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.

  return (
    <circle
      r={r}
      cx={25}
      cy={25}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
      strokeWidth="2.2rem"
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    />
  );
};

function CircleProgress({ colour = 'blue', percentage }: { colour?: string; percentage: number }) {
  return (
    <svg width={50} height={50}>
      <g transform={`rotate(-90 ${'25 25'})`}>
        <Circle colour={colour} percentage={percentage} />
      </g>
    </svg>
  );
}

export default CircleProgress;
