'use client';
import FeatureRow from '../components/FeatureRow';
import MaskedImage from '../components/MaskedImage';
import MaskedSection from '../components/MaskedSection';
import PageFade from '../components/PageFade';
import ProductHeaderBar from '../components/ProductHeaderBar';
import { ProductTitleRow } from '../components/ProductTitleRow';
import { useViewMode } from '../context/ViewModeContext';

// app/cx-edge/page.tsx
export default function EchonetPage() {
  const { mode } = useViewMode();
  return (
    <PageFade>
      {/* <ProductHeaderBar techDocUrl="/docs/cx-edge-tech.pdf" /> */}
      <main className=" bg-zinc-900 text-white py-8  flex flex-col justify-center items-center text-center">
        <ProductTitleRow productName="Echonet" />

        {mode === 'basic' && (
          <>
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-zinc-900/60 via-zinc-400/30 to-zinc-700/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                AI-powered Sonic Awareness
              </h2>
              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/echonet.png"
                    alt="Sentinel Drone"
                    zoom={1.2}
                    positionX="60%"
                    positionY="60%"
                    width={320}
                    shadow={true}
                  />
                }
                bodySegments={[
                  'Designed by US special operations veterans, EchoNet collects sound waves throughout an environment, detects and identifies sound sources, locates sound-emitting objects of interest, and tracks the direction and movement of those objects in real time.',
                  'With EchoNet, military teams gain significant situational awareness advantages',
                ]}
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Preemptive Threat Detection
                    </h2>
                    <p className="pb-4">
                      Respond to potential threats faster with an acoustic AI sensor that is always
                      listening and provides warfighters with reactive monitoring insights.
                    </p>
                  </div>
                }
                quoteText="Preemptive Threat Detection"
              />
            </MaskedSection>

            {/* Enhanced decision-making  */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-blue-500/60 via-blue-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-6 animate-glitch">
                Enhanced Decision-Making
              </h2>

              <FeatureRow
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Dependable in Harsh Conditions
                    </h2>
                    <p className="pb-4">
                      Rely on the solution to maintain full functionality in weather conditions
                      where other sensors may fail (e.g., camera-equipped aerial drones in stormy
                      weather)
                    </p>
                  </div>
                }
                quoteText="Dependable in Harsh Conditions"
                bodySegments={[
                  'Boost tactical operations decision-making confidence with advanced acoustic sensing integrated and aligned with other sensor modes like video data feeds from aerial drones, improving threat identity confirmation and minimizing false positives',
                  'Stationary site security: Provide the same continuous acoustic monitoring capabilities to secure permanent military facilities and assets',
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
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">How It Works</h2>
              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/audio.png"
                    alt="Sentinel Drone"
                    zoom={1.1}
                    positionX="50%"
                    positionY="50%"
                    width={320}
                    shadow={true}
                  />
                }
                bodySegments={[
                  'Sounds are captured by a microphone in or near the field of operations. The audio data signal can be collected by an advanced microphone or a microphone built into a warfighter’s smartphone.',
                  'The raw audio data signal is then received by an edge device running EchoNet software which includes a series of in-house AI/ML models, the solution’s backbone.',
                ]}
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Echonet Models
                    </h2>
                    <p className="pb-4">
                      • Detect, analyze, separate, and denoise sounds, filtering out background
                      noise while enhancing key audio cues
                    </p>
                    <p className="pb-4">
                      • Classify the audio data, distinguishing specific sound patterns made by
                      guns, drones and other vehicles, humans, animals—practically any
                      sound-producing object an ML model can be trained to detect{' '}
                    </p>
                    <p>
                      • Calculate distance and direction, enabling sustained tracking of sound
                      sources
                    </p>
                  </div>
                }
                quoteText="Echonet Models"
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
                Faster Model Training, Lower Resource Cost
              </h2>
              <FeatureRow
                bodySegments={[
                  'Automated data collection dramatically accelerates the dataset creation process that’s required to train and retrain ML models for environmental sounds of interest. ',
                  'In conjunction with IBM oLabs’ Hatteras MLOps platform, it’s possible to train EchoNet’s sound recognition models in hours instead of months, making it easier and faster to monitor key areas and identify mission-sensitive targets.',
                  'An open-source, hardware-agnostic platform, EchoNet enables seamless integration with new and existing sensor systems, fostering collaboration between government and IBM developers',
                ]}
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      AI-powered Acoustic Sensing
                    </h2>
                    <p className="pb-4">
                      EchoNet offers the ability to provide warfighters a complete operational
                      picture when full situational awareness is an imperative
                    </p>
                  </div>
                }
                quoteText="AI-powered Acoustic Sensing"
              />
            </MaskedSection>

            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-700"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                Reduce The Cognitive Burden
              </h2>
              <FeatureRow
                reverse
                bodySegments={[
                  'Acoustic sensing technologies enhanced with AI deliver powerful object monitoring and threat detection capabilities that other sensor modalities cannot provide. ',
                  'EchoNet, an AI-enabled acoustic sensor solution from IBM oLabs™, can significantly enhance situational clarity for your teams, adding a critical layer of operational awareness at the tactical edge',
                ]}
              />
            </MaskedSection>
          </>
        )}

        {mode === 'advanced' && (
          <section>
            <p className="text-gray-700 dark:text-gray-300">
              Under the hood, Echonet leverages edge compute nodes to run sentiment pipelines…
            </p>
          </section>
        )}
      </main>
    </PageFade>
  );
}
