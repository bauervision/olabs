'use client';

import FeatureRow from '../components/FeatureRow';
import MaskedImage from '../components/MaskedImage';
import MaskedSection from '../components/MaskedSection';
import PageFade from '../components/PageFade';
import ProductHeaderBar from '../components/ProductHeaderBar';
import { ProductTitleRow } from '../components/ProductTitleRow';
import QuoteBubble from '../components/QuoteBubble';
import { useViewMode } from '../context/ViewModeContext';

// app/cx-edge/page.tsx
export default function SentinelPage() {
  const { mode } = useViewMode();
  return (
    <PageFade>
      {/* <ProductHeaderBar techDocUrl="/docs/cx-edge-tech.pdf" /> */}
      <main className=" bg-zinc-900 text-white py-8  flex flex-col justify-center items-center text-center">
        <ProductTitleRow productName="Sentinel" />
        {mode === 'basic' && (
          <>
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-zinc-900/60 via-zinc-400/30 to-zinc-700/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                ML-driven Reconnaissance Platform on the Edge
              </h2>
              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/sentinelDrone.png"
                    alt="Sentinel Drone"
                    zoom={1.25}
                    positionX="40%"
                    positionY="60%"
                    width={320}
                    shadow={true}
                  />
                }
                bodySegments={[
                  'The military and other agencies rely on machine learning (ML) platforms for reconnaissance missions in demanding conditions. A dependable and trusted digital sentinel not only yields tactical advantages on the ground. Increasingly, enhanced video reconnaissance technologies are a means of amplifying pressure on adversaries. ',
                  'IBM has the solution for teams requiring advanced AI capabilities for identifying and monitoring entities of  interest, even in challenging environments. ',
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
                Cutting-edge Situational Awareness
              </h2>

              <FeatureRow
                reverse
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Deployable Video Reconnaissance
                    </h2>
                    <p className="pb-4">
                      With its ability to operate across a range of sensor modalities—short and
                      long-wave infrared, red, green, blue (RGB) signals, and more—Sentinel’s
                      powerful computer vision algorithms convert multiple video data feeds from one
                      format to another.
                    </p>
                  </div>
                }
                quoteText="Deployable Video Reconnaissance"
                bodySegments={[
                  'Sentinel is a highly adaptable and quickly deployable video reconnaissance ML solution.',
                  'The output is a ML-optimized situational awareness capability. Individuals, vehicles, vessels and buildings of interest can be detected and monitored in various complex terrains in real time, securely, with limited active operator involvement. ',
                  'Sentinel is also outfitted with an entity labeling tool, taking  an additional burden off operators in the field.',
                ]}
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
                Interoperability Across the Tactical Tech Stack
              </h2>
              <FeatureRow
                image={
                  <MaskedImage
                    src="/images/tech stack.png"
                    alt="Sentinel Drone"
                    zoom={1.4}
                    positionX="50%"
                    positionY="40%"
                    width={320}
                    shadow={true}
                  />
                }
                bodySegments={[
                  'Beyond its core capabilities as a computer vision ML pipeline, a key Sentinel feature is that its a containerized edge solution.',
                  'What’s more, Sentinel is built on the latest open-source, state-of-the-art ML frameworks. The pipeline can be installed on clusters such as OpenShift or MicroShift edge. Plus, IBM’s Sentinel ML pipeline is primed for new models for new sensors.',
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
                Transformational AI tools for Warfighters
              </h2>
              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/soldier.png"
                    alt="Sentinel Drone"
                    zoom={1.1}
                    positionX="50%"
                    positionY="52%"
                    width={320}
                    shadow={true}
                    circle
                  />
                }
                bodySegments={[
                  'Sentinel is compatible with a multitude of end-user devices, including the Team Awareness Kit (TAK), the Integrated Visual Augmentation System (IVAS), and Enhanced Night Vision Goggles-B (ENVG-B). Additionally, it is compatible with IBM’s CXEdge sensor and data integration platform and the Hatteras ML Operations platform ',
                  'Sentinel was developed by a team of data scientists, ML engineers, academics, and special operations Veterans focused on operationalizing mission-specific AI and emerging technology solutions for the US Government.',
                ]}
              />
            </MaskedSection>
          </>
        )}
        {mode === 'advanced' && (
          <section>
            <p className="text-gray-700 dark:text-gray-300">
              Under the hood, Sentinel leverages edge compute nodes to run sentiment pipelines…
            </p>
          </section>
        )}
      </main>
    </PageFade>
  );
}
