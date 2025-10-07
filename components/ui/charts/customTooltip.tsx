export default function CustomTooltip({
  active,
  payload,
  coordinate,
}: {
  active?: boolean;
  payload?: [{ value: number | string }] | null;
  coordinate?: { x: number; y: number };
}) {
  if (!active || !payload?.length || !coordinate) return null;

  return (
    <div
      className="bg-white border border-gray-200 shadow-md px-2 py-1 rounded text-xs text-center absolute"
      style={{
        left: coordinate.x,
        top: -20,
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
      }}
    >
      <p className="text-blue-600 font-medium">{payload[0].value}</p>
    </div>
  );
}
