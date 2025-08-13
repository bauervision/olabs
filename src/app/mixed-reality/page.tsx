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
              topLeftAngle={0}
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

            {/* Surge/Sonus  */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-blue-500/60 via-blue-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                SONUS ( Sonic Targeting )
              </h2>
              <FeatureRow
                image={
                  <MaskedImage
                    src="/images/SonusScreen.png"
                    alt="Sonus Logo"
                    zoom={1.2}
                    positionX="60%"
                    positionY="40%"
                    width={420}
                    shadow={true}
                    // circle
                  />
                }
                bodySegments={[
                  'Here we present an application that allows the user to hear the location of targets identified on the battlefield',
                  'It is recommended that you have stereo capable headphones so you can hear how the 3d sounds direct you to the target locations in the demo.',
                  'Very similiar to our Echonet technology, but instead of determining where targets are located based on sound emitted from the target, SONUS emits a 3d sound based on a calculation of their geospatial location in relation to yours.',
                  'This allows to listen to the targets and deduce where they are located, and thereby where you need to go to engage them.',
                ]}
                quoteText="SONUS"
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">SONUS</h2>
                    <p className="pb-4">
                      This version of the app places you in an environment where you can experience
                      the effectiveness of sonic targeting
                    </p>
                    <p className="pb-4"></p>
                    <p className="pb-4">
                      If the target has already been identified, SONUS will guide you right to it
                    </p>

                    <div className="flex flex-col items-center justify-center  gap-2 ">
                      <div className="flex items-center ustify-center gap-2">
                        {/* Mobile */}
                        <div className="flex items-center gap-1 text-green-500">
                          <span className="text-lg">📱</span>
                          <span>Mobile</span>
                        </div>
                        <button
                          onClick={() => window.open('https://sonus-targeting.web.app/', '_blank')}
                          className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 text-white border-blue-300 border-2"
                        >
                          Launch App
                        </button>

                        {/* Desktop */}
                        <div className="flex items-center gap-1 text-green-500">
                          <span className="text-lg">💻</span>
                          <span>Desktop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </MaskedSection>

            {/* Cutting-edge mission planning  */}
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-700"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-6 animate-glitch">
                Cutting-Edge Mission Planning
              </h2>

              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/nextgenterrain.png"
                    alt="Sentinel Drone"
                    zoom={1.5}
                    positionX="35%"
                    positionY="42%"
                    width={320}
                    shadow={true}
                  />
                }
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Next-Gen Terrain
                    </h2>
                    <p className="pb-4">
                      This example, was designed as mission planner that allows the user to set
                      mission location, time of day, and weather. You then can launch a 3d
                      simulation environment with that data.{' '}
                    </p>

                    <div className="flex flex-col items-center justify-center  gap-2 ">
                      <div className="flex items-center ustify-center gap-2">
                        {/* Mobile */}
                        <div className="flex items-center gap-1 opacity-40 line-through">
                          <span className="text-lg">📱</span>
                          <span>Mobile</span>
                        </div>
                        <button
                          onClick={() => window.open('https://next-gen-terrain.web.app/', '_blank')}
                          className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 text-white border-blue-300 border-2"
                        >
                          Launch App
                        </button>

                        {/* Desktop */}
                        <div className="flex items-center gap-1 text-green-500">
                          <span className="text-lg">💻</span>
                          <span>Desktop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                quoteText="Next-Gen Terrain"
                bodySegments={[
                  'The Next-Gen Terrain example is to allow users to interactively create a VR training simulation with objectives from a web browser, save the data to the cloud, and have the end user launch the updated mission on their Oculus without the need to update anything.',
                  'The app was started under a proposal effort, so it is still under construction, you can still explore alot of the initial functionality',
                  'Note: this web app only works on desktop, no mobile version is available',
                ]}
              />
            </MaskedSection>

            {/* web and oculus */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor=" bg-zinc-600"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                Immersive Mixed Reality Interactions
              </h2>
              <FeatureRow
                image={
                  <MaskedImage
                    src="/images/vrSoldier.png"
                    alt="Sentinel Drone"
                    zoom={1.2}
                    positionX="55%"
                    positionY="52%"
                    width={320}
                    shadow={true}
                  />
                }
                bodySegments={[
                  'The following example has both a web and Oculus version. Here we showcase an interactive app that allows the user to examine different equipment loads for a soldier and how the weight affects route decision of a mission',
                ]}
                quoteText="Route Planner"
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Route Planner
                    </h2>
                    <p className="pb-4">
                      In this app you can attach and remove various pieces of equipment and see how
                      a specific route becomes more or less intense based on the weight the soldier
                      must carry.
                    </p>

                    <div className="flex flex-col items-center justify-center  gap-2 ">
                      <div className="flex items-center ustify-center gap-2">
                        {/* Mobile */}
                        <div className="flex items-center gap-1 opacity-40 line-through">
                          <span className="text-lg">📱</span>
                          <span>Mobile</span>
                        </div>
                        <button
                          onClick={() => window.open('https://vr-soldier.web.app/', '_blank')}
                          className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 text-white border-blue-300 border-2"
                        >
                          Launch App
                        </button>

                        {/* Desktop */}
                        <div className="flex items-center gap-1 text-green-500">
                          <span className="text-lg">💻</span>
                          <span>Desktop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </MaskedSection>

            {/* Data viz */}
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-blue-500/60 via-blue-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                Data Visualization
              </h2>
              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/dataviz2.png"
                    alt="Sentinel Drone"
                    zoom={1.2}
                    positionX="45%"
                    positionY="52%"
                    width={320}
                    shadow={true}
                    circle
                  />
                }
                bodySegments={[
                  'The beauty of mixed reality technology is how diverse the applications can be, and how varied the end goal.',
                  'We created a data visualization app for the Census Bureau which focused on displaying data output to enable scientists to refine the underlying algorithm.',
                ]}
                quoteText="Data Visualization"
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Data Visualization
                    </h2>
                    <p className="pb-4">
                      This app built in Unity, showcases about 3,000 points of data and how it
                      changes over time
                    </p>

                    <div className="flex flex-col items-center justify-center  gap-2 ">
                      <div className="flex items-center ustify-center gap-2">
                        {/* Mobile */}
                        <div className="flex items-center gap-1 opacity-40 line-through">
                          <span className="text-lg">📱</span>
                          <span>Mobile</span>
                        </div>
                        <button
                          onClick={() => window.open('https://census-data.web.app/', '_blank')}
                          className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 text-white border-blue-300 border-2"
                        >
                          Launch App
                        </button>

                        {/* Desktop */}
                        <div className="flex items-center gap-1 text-green-500">
                          <span className="text-lg">💻</span>
                          <span>Desktop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </MaskedSection>

            {/* Mobile App  */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-700"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                Mobile App Design
              </h2>
              <FeatureRow
                bodySegments={[
                  'Sometimes the mission calls for mobile app design, this was an app we made for the Air Force that provided modern UX for leave request submission and approval.',
                  'We do not wait until the end of a project to address how the user will use it.',
                  'This example highlights how we produce live prototypes for the customer to use and provide feedback on from day one. ',
                ]}
                quoteText="Leave Web Mobile"
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Leave Web Mobile
                    </h2>
                    <p className="pb-4">
                      The version you will see was one of the final UX approval steps before we
                      moved to live device testing.
                    </p>
                    <p className="pb-4">
                      At oLabs we strive not just for mission excellence with our technology but
                      also with UX because we understand that it does not matter how awesome tech
                      is, if no one can use it, it is worthless
                    </p>

                    <div className="flex flex-col items-center justify-center  gap-2 ">
                      <div className="flex items-center ustify-center gap-2">
                        {/* Mobile */}
                        <div className="flex items-center gap-1 text-green-500">
                          <span className="text-lg">📱</span>
                          <span>Mobile</span>
                        </div>
                        <button
                          onClick={() => window.open('https://leaveweb.web.app/', '_blank')}
                          className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 text-white border-blue-300 border-2"
                        >
                          Launch App
                        </button>

                        {/* Desktop */}
                        <div className="flex items-center gap-1 text-green-500">
                          <span className="text-lg">💻</span>
                          <span>Desktop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </MaskedSection>

            {/* tech stack */}
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={0}
              bgColor="bg-zinc-900 "
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">Tech Stack</h2>
              <FeatureRow
                image={
                  <MaskedImage
                    src="/images/mixedtech.png"
                    alt="Sentinel Drone"
                    zoom={1.05}
                    positionX="50%"
                    positionY="50%"
                    width={320}
                    shadow={true}
                  />
                }
                bodySegments={[
                  'While the tech stack for mixed reality is gaming based, we include the highest levels of security including deploying to GovCloud',
                ]}
              />
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
