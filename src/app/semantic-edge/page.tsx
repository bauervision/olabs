import PageFade from '../components/PageFade';

// app/cx-edge/page.tsx
export default function SemanticEdgePage() {
  return (
    <PageFade>
      <main className=" bg-zinc-900 text-white p-8 pt-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Semantic-Edge</h1>
        <img
          src="/images/semanticedge.png"
          alt="CX-Edge"
          className="w-full max-w-xl mb-6 rounded"
        />
        <p className="text-gray-300 text-lg">
          Semantic-Edge is a next-generation platform for optimizing customer experience across
          channels.
        </p>
      </main>
    </PageFade>
  );
}
