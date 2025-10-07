import { ReactNode } from 'react';

export default function Card({
  children,
  otherClasses,
}: {
  children: ReactNode;
  otherClasses?: string;
}) {
  return (
    <div
      className={`bg-white border border-solid border-[#eff0f6] p-3 rounded-2xl flex flex-col min-h-0 ${otherClasses}`}
    >
      {children}
    </div>
  );
}
