import React, { useState, useRef, useEffect, FC } from 'react';

interface SlideNumberProps {
  start?: number;
  end?: number;
  initialActive?: number;
  onSelect: (a: number) => void
}

const SlideNumber: FC<SlideNumberProps> = ({
  start = 1,
  end = 100,
  initialActive = 0,
  onSelect
}) => {
  const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const [active, setActive] = useState<number>(initialActive);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Scroll pas mount ke initialActive
  useEffect(() => {
    const container = containerRef.current;
    const item = itemRefs.current[initialActive];
    if (container && item) {
      const offset =
        item.offsetLeft - container.offsetLeft - container.clientWidth / 2 + item.clientWidth / 2;
      container.scrollTo({ left: offset, behavior: 'auto' });
    }
  }, [initialActive]);

  // Scroll setiap kali active berubah (misal klik nomor lain)
  useEffect(() => {
    const container = containerRef.current;
    const item = itemRefs.current[active];
    if (container && item) {
      const offset =
        item.offsetLeft - container.offsetLeft - container.clientWidth / 2 + item.clientWidth / 2;
      container.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto divide-gray-200 border border-gray-300 rounded-md"
    >
      <div className="flex w-full divide-x">
        {numbers.map((num, idx) => (
          <div
            key={num}
            ref={(el) => {
              itemRefs.current[num] = el;
            }}
            onClick={() => {
              setActive(num)
              if (num) {
                onSelect(num)
              }
            }}
            className={`relative flex-grow min-w-[50px] text-center py-2 px-4 text-sm font-medium cursor-pointer pt-2.5
      ${active === num
                ? 'border-2 border-sky-500 rounded-md'
                : 'text-gray-700 hover:bg-gray-50'
              }`}
            style={{ borderLeftWidth: idx === 0 ? 0 : undefined }}
          >
            {num}
            {/* Hapus slide indicator karena border kotak sudah ada */}
          </div>
        ))}

      </div>
    </div>
  );
};

export default SlideNumber;
