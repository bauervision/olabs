'use client';

import { FileText, Info, Brain } from 'lucide-react';
import Link from 'next/link';
import { useViewMode } from '../context/ViewModeContext';

type Props = {
  techDocUrl: string;
};

export default function ProductHeaderBar({ techDocUrl }: Props) {
  const { mode, setMode } = useViewMode();

  return (
    <div className="w-full flex justify-center items-center bg-gray-900 text-white px-4 py-2 shadow-md">
      <div className="flex gap-2">
        <button
          onClick={() => setMode('basic')}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium transition ${
            mode === 'basic' ? 'bg-cyan-500 text-black' : 'hover:bg-gray-700'
          }`}
        >
          <Info size={16} />
          Basic Detail
        </button>
        <button
          onClick={() => setMode('advanced')}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium transition ${
            mode === 'advanced' ? 'bg-orange-500 text-black' : 'hover:bg-gray-700'
          }`}
        >
          <Brain size={16} />
          Advanced Detail
        </button>
      </div>
      <Link href={techDocUrl} target="_blank" rel="noopener noreferrer">
        <button
          className="p-2 rounded-md hover:bg-gray-700 transition"
          aria-label="Open Technical Document"
        >
          <FileText size={20} />
        </button>
      </Link>
    </div>
  );
}
