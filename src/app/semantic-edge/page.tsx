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
export default function SemanticEdgePage() {
  const { mode } = useViewMode();

  return (
    <PageFade>
      {/* <ProductHeaderBar techDocUrl="/docs/cx-edge-tech.pdf" /> */}
      <main className=" bg-zinc-900 text-white py-8  flex flex-col justify-center items-center text-center">
        <ProductTitleRow productName="Semantic Edge" />
        {mode === 'basic' && (
          <>
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-zinc-900/90 via-zinc-900/40 to-zinc-700/90"
              contentPosition="center"
            >
              <p className="pb-2">
                The AI landscape today is saturated with actors and tremendous amount of open-source
                tooling.
              </p>
              <p className="py-2">
                Therefore, we set ourselves apart through{' '}
                <span className="font-bold text-blue-600">
                  original innovation, strategic integration, and rigorous research
                </span>
                . Most tools on the market are nothing more than a collection of existing tools
                bundled into a single package with a nice user interface and new branding.
              </p>

              <p className="py-2">
                We don't do that. We go further. Our solutions offers novel capabilities that do not
                yet exist not just in the open-source ecosystem but anywhere.
              </p>
              <p className="py-2">
                At the same time, we aggressively incorporate the strongest elements from open
                source tools where our testing or other research has demonstrated their value.
              </p>
              <p className="py-2">
                What truly sets us apart, however, is our{' '}
                <span className="font-bold text-blue-600">research-driven design methodology</span>.
                Every capability is developed not just for functionality, but for fit, purpose and
                impact. This methodological approach ensures that our system is intuitive to the
                user without compromising on performance.{' '}
              </p>
              <p className="pb-4">
                Moreover, we aim to{' '}
                <span className="font-bold text-blue-600">deploy everywhere</span>. Our service scan
                run entirely offline and in a wide variety of platforms including embedded devices,
                laptops, mobile workstations, private datacenters, or even the cloud.
              </p>
            </MaskedSection>

            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-zinc-900/60 via-zinc-400/30 to-zinc-700/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                AI Powered Battlefield Assistant
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <QuoteBubble
                  text="Resilient"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                        Resilient
                      </h2>
                      <p>
                        Operates in disconnected, contested, and denied environments--no cloud
                        required
                      </p>
                    </div>
                  }
                />
                <QuoteBubble
                  text="Efficient"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                        Efficient
                      </h2>
                      <p>
                        Transforms overwhelming data into mission-ready insight in seconds, not
                        hours
                      </p>
                    </div>
                  }
                />
                <QuoteBubble
                  text="Effective"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch animate-glitch">
                        Effective
                      </h2>
                      <p>
                        Delivers real-time intelligense, decision support, and tactical clarity when
                        it matters most
                      </p>
                    </div>
                  }
                />
              </div>
            </MaskedSection>

            {/* Data overload */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-blue-500/60 via-blue-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-6 animate-glitch">
                Data Overload
              </h2>

              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/overload.png"
                    alt="Hatteras Cycle"
                    circle
                    zoom={2}
                    positionX="center"
                    positionY="80%"
                    width={320}
                    shadow={true}
                  />
                }
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Analysts face data overload
                    </h2>
                    <p className="pb-4">Data sources integrated into one single source of truth</p>
                    <p>(Marketing Data Lake)</p>
                  </div>
                }
                quoteText="Analysts face data overload"
                bodySegments={[
                  'A small fraction of intel gets reviewed: Before AI less than 15% of drone video was examined in real-time ',
                  'Important signals buried in noise: Critical updates and threats often go unnoticed in long chat threads or raw logs',
                  'Decisions are delyaed-- or made too late: The time it takes to interpret intel can cost operational momentum and lives',
                ]}
              />
            </MaskedSection>

            {/* Current Faults */}
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-zinc-900/90 via-zinc-400/10 to-zinc-900/90"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-6 animate-glitch">
                Current Faults of Generative Systems at the Edge
              </h2>
              <p className="py-4">
                These are the intrinsic issues that Semantic Edge overcomes for our customers
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <QuoteBubble
                  text="Data Gathered From Web Domain"
                  borderColor="border-red-400"
                  fillColor="bg-red-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-red-500 animate-glitch">
                        Data Gathered From Web Domain
                      </h2>
                      <p className="pb-4">
                        Lacks exposure to classified, mission-specific, or doctrinally accurate
                        sources
                      </p>
                      <p className="pb-4">
                        Struggles to interpret structured military formats (e.g., OPORDs,SITREPs,
                        SALUTE reports)
                      </p>
                      <p className="pb-4">
                        Produces outputs that are often fluent, but factually or contextually
                        incorrect
                      </p>
                      <p>Misses mission-relevant language, acronyms, and command terminology</p>
                    </div>
                  }
                />
                <QuoteBubble
                  text="Evaluated on General Metrics"
                  borderColor="border-red-400"
                  fillColor="bg-red-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-red-500 animate-glitch">
                        Evaluated on General Metrics
                      </h2>
                      <p className="pb-4">
                        Prioritizes token speed, response fluency, and cloud latency
                      </p>
                      <p className="pb-4">
                        Lacks performance evaluation on military understanding or accuracy
                      </p>
                      <p className="pb-4">
                        Not tested for operational alignment, survivability, or interpretability in
                        disconnected environments
                      </p>
                      <p>Performance is non-explainable, leaving warfighters guessing</p>
                    </div>
                  }
                />
                <QuoteBubble
                  text="Optimized for General Use-Cases"
                  borderColor="border-red-400"
                  fillColor="bg-red-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-red-500 animate-glitch animate-glitch">
                        Optimized for General Use-Cases
                      </h2>
                      <p className="pb-4">
                        Designed for corporate summarization, search, and productivity
                      </p>
                      <p className="pb-4">
                        Assumed clean input, strong connectivity, and enterprise support systems
                      </p>
                      <p className="pb-4">
                        Fails under DDIL conditions or unstructured, fragmented intelligence sources
                      </p>
                      <p>
                        Broad, generalized answers -- not tailored for warfighter decision making
                      </p>
                    </div>
                  }
                />
              </div>
            </MaskedSection>

            {/* Engineered for the Edge */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-zinc-500/60 via-zinc-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-6 animate-glitch">
                Semantic Edge Solution
              </h2>

              <FeatureRow
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      24x increase efficiency
                    </h2>
                    <p>
                      In a DOJ test case, we reduced entity tracking time from 48 hours to 2 hours
                      using a single operator!
                    </p>
                  </div>
                }
                quoteText="24x increase efficiency"
                bodySegments={[
                  'Optimized to run on low-SWaP tactical hardware without relying on constant connectivity ',
                  'Integrated into IBM-OLabs CXEdge system, Semantic Edge has supported real-world SOCOM missions',
                  'Semantic Edge increased entity tracking efficiency by 24x',
                  'We leverage virtual large language models (vLLMs), transformer based vision models, and LoRA optimization to process unstructured battlefield data',
                ]}
              />
            </MaskedSection>

            {/* Core capabilities */}
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-gradient-to-br from-blue-500/60 via-blue-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-4 animate-glitch">
                Core Capabilities
              </h2>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <QuoteBubble
                  text="Identify"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                        Identify
                      </h2>
                      <p className="pb-2">
                        Identify people, vehicles, and behaviors in live or recorded video.
                      </p>
                      <p className="pb-2">
                        It runs on low-SWaP edge devices, enabling frontline unitys to process
                        surveillance footage in real time without reliance on cloud or backend
                        servers.
                      </p>
                      <p className="pb-2">
                        This reduces analyst workload and accelerates time to decision for
                        mission-critical insights
                      </p>
                    </div>
                  }
                />
                <QuoteBubble
                  text="Data Injestion"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                        Data Injestion
                      </h2>
                      <p className="pb-2">
                        Injestion of chat logs, intercepted communications, and text-based reports
                        to identify critical updates, threats, or patterns in real-time.
                      </p>
                      <p className="pb-2">
                        It filters through noise, highlights mission-essential data and pushes
                        notifications directly to operators.
                      </p>
                      <p className="pb-2">
                        Whether its a buried warning in a long message thread or a sudden spike in
                        chatter, the system ensures nothing important goes unseen.
                      </p>
                    </div>
                  }
                />
                <QuoteBubble
                  text="Instant Understanding"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                  popupContent={
                    <div>
                      <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch animate-glitch">
                        Instant Understanding
                      </h2>
                      <p className="pb-2">
                        Delivers instant, plain language answers from technical manuals, vender
                        documentatio, and unstructured data.
                      </p>
                      <p className="pb-2">
                        A soldier needing to troubleshoot a comms device or operate unfamiliar
                        equipment can ask Semantic Edge for guidance--receiving a simplified
                        walkthrough on the spot
                      </p>
                    </div>
                  }
                />
              </div>
            </MaskedSection>

            {/* Full spectrum */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-zinc-700/60 via-zinc-900/30 to-zinc-800/80"
              contentPosition="center"
            >
              <h2 className="text-4xl font-bold text-blue-500 mb-6 animate-glitch">
                Full Spectrum Intelligence
              </h2>

              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/intelligence.png"
                    alt="Hatteras Cycle"
                    zoom={2}
                    positionX="center"
                    positionY="60%"
                    width={420}
                    shadow={true}
                  />
                }
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      SOCOM & INSCOM Missions
                    </h2>
                    <p>
                      Field-tested and integrated special operations and intelligence command
                      workflows, delivering edge-based decision support
                    </p>
                  </div>
                }
                quoteText="SOCOM & INSCOM Missions"
                bodySegments={[
                  'HUMINT Analysis: Extracting key intelligence from unstructured human reports',
                  'Counterintelligence Operations: Supports threat detection and anomaly identification through automated monitoring of communications',
                  'Border Security Operations: Assists agents by analyzing surveillance feeds, flagging unusual movements, translating foreign documents, and generating rapid situational summaries',
                  'Counterterrorism and Threat Monitoring: Monitors intercepted communications, open-source chatter, and intel reports--providing real-time alerts and automated threat assessments',
                  'Natural Language Mission Queries: Supports investigators and analysts with natural language queries, entity tracking, and multilingual intel summaries during critical operations.',
                ]}
              />
            </MaskedSection>
          </>
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
