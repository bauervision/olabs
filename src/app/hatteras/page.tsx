import PageFade from '../components/PageFade';

// app/cx-edge/page.tsx
export default function HatterasPage() {
  return (
    <PageFade>
      <main className=" bg-zinc-900 text-white p-8  flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Hatteras</h1>
        <img src="/images/hatteras.png" alt="CX-Edge" className="w-full max-w-xl mb-6 rounded" />
        <p className="text-gray-300 text-lg">
          Hatteras is a next-generation platform for optimizing customer experience across channels.
        </p>
      </main>
    </PageFade>
  );
}
