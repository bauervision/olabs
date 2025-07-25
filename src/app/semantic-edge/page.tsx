'use client';

import PageFade from '../components/PageFade';
import ProductHeaderBar from '../components/ProductHeaderBar';
import { ProductTitleRow } from '../components/ProductTitleRow';
import { useViewMode } from '../context/ViewModeContext';

// app/cx-edge/page.tsx
export default function SemanticEdgePage() {
  const { mode } = useViewMode();

  return (
    <PageFade>
      <ProductHeaderBar techDocUrl="/docs/cx-edge-tech.pdf" />
      <main className=" bg-zinc-900 text-white py-8  flex flex-col justify-center items-center text-center">
        <ProductTitleRow productName="Semantic Edge" />
        {mode === 'basic' && (
          <section className="mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Semantic Edge is a real-time customer experience platform designed to…
            </p>
          </section>
        )}
        {mode === 'advanced' && (
          <section>
            <p className="text-gray-700 dark:text-gray-300">
              Under the hood, Semantic Edge leverages edge compute nodes to run sentiment pipelines…
            </p>
          </section>
        )}
      </main>
    </PageFade>
  );
}
