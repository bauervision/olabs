'use client';

import FeatureRow from '../components/FeatureRow';
import MaskedImage from '../components/MaskedImage';
import MaskedSection from '../components/MaskedSection';
import PageFade from '../components/PageFade';
import ProductHeaderBar from '../components/ProductHeaderBar';
import { ProductTitleRow } from '../components/ProductTitleRow';
import { useViewMode } from '../context/ViewModeContext';

// app/cx-edge/page.tsx
export default function MixedRealityPage() {
  const { mode } = useViewMode();

  return (
    <PageFade>
      {/* <ProductHeaderBar techDocUrl="/docs/cx-edge-tech.pdf" /> */}
      <main className=" bg-zinc-900 text-white py-8   flex flex-col justify-center items-center text-center">
        <ProductTitleRow productName="Mixed Reality" />

        {mode === 'basic' && (
          <>
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-zinc-900/60 via-zinc-400/30 to-zinc-700/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                Mixed Reality
              </h2>
              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/mixedreality.png"
                    alt="Sentinel Drone"
                    zoom={1.25}
                    positionX="60%"
                    positionY="40%"
                    width={320}
                    shadow={true}
                  />
                }
                bodySegments={[
                  'Mixed reality applications can be served on and off the edge to meet mission and training demands',
                  'Oculus, Hololens, HTC VIVE, are just some of the mixed reality headsets that can deploy our applications ',
                ]}
              />
            </MaskedSection>

            {/* Cutting-edge situational awareness  */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-blue-500/60 via-blue-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-6 animate-glitch">
                Cutting-Edge Mission Planning
              </h2>

              <FeatureRow
                image={
                  <MaskedImage
                    src="/images/mixed2.png"
                    alt="Sentinel Drone"
                    zoom={1.9}
                    positionX="60%"
                    positionY="62%"
                    width={320}
                    shadow={true}
                    circle
                  />
                }
                // quotePopupContent={
                //   <div>
                //     <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                //       Deployable Video Reconnaissance
                //     </h2>
                //     <p className="pb-4">
                //       With its ability to operate across a range of sensor modalities—short and
                //       long-wave infrared, red, green, blue (RGB) signals, and more—Sentinel’s
                //       powerful computer vision algorithms convert multiple video data feeds from one
                //       format to another.
                //     </p>
                //   </div>
                // }
                // quoteText="Deployable Video Reconnaissance"
                bodySegments={['Cutting edge mission planning...']}
              />
            </MaskedSection>

            {/* Interoperability across the tactical tech stack */}
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-700"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                Tactical Tech Stack Interoperability
              </h2>
              <FeatureRow
                image={
                  <MaskedImage
                    src="/images/tech stack.png"
                    alt="Sentinel Drone"
                    zoom={1.3}
                    positionX="50%"
                    positionY="40%"
                    width={320}
                    shadow={true}
                  />
                }
                bodySegments={[
                  'Easily implemented into all of our Edge products, mixed reality can take applications to the next level of immersion',
                ]}
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Containerized Edge Solution
                    </h2>
                    <p className="pb-4">
                      Its ML models can be installed on virtually any small compute infrastructure,
                      making it deployable on small, lightweight and low-power technologies carried
                      by soldiers.
                    </p>
                  </div>
                }
                quoteText="Containerized Edge Solution"
              />
            </MaskedSection>

            {/* Transformational AI tools for warfighters */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor=" bg-zinc-600"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                Web and Mobile App Design
              </h2>
              <FeatureRow reverse bodySegments={['Mixed Reality is compatible with ... ']} />
            </MaskedSection>
          </>
        )}
        {mode === 'advanced' && (
          <section>
            <p className="text-gray-700 dark:text-gray-300">
              Under the hood, our Mixed Reality leverages edge compute nodes to run sentiment
              pipelines…
            </p>
          </section>
        )}
      </main>
    </PageFade>
  );
}
