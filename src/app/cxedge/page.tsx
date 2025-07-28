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
export default function CXEdgePage() {
  const { mode } = useViewMode();
  return (
    <PageFade>
      <ProductHeaderBar techDocUrl="/docs/cx-edge-tech.pdf" />
      <main className=" bg-zinc-900 text-white py-8   flex flex-col justify-center items-center text-center">
        <ProductTitleRow productName="CXEdge™" />

        {mode === 'basic' && (
          <>
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-zinc-800/80"
              contentPosition="center"
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-4 animate-glitch">
                360° Situational Awareness at the Tactical Edge
              </h2>
              <FeatureRow
                body="Tactical units operating in austere conditions represent the tip of the tactical
                  spear on today’s battlefield. On these front lines where communication networks
                  are weak and access to the latest cloud computing technology is limited, units
                  struggle to move data and quickly analyze threats. The solution? CXEdge™"
                quoteText="Units struggle to move data and quickly analyze threats"
              />
            </MaskedSection>

            {/* Simple but Robust */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-orange-500/60 via-orange-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-6 animate-glitch">
                Simple but Robust
              </h2>

              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/devices.png"
                    alt="Tactical hardware"
                    circle
                    fill={false}
                    zoom={2.75}
                    positionX="bottom"
                    //positionY="80%"
                  />
                }
                quoteText="Collect, analyze, and distribute mission critical data in real time on handheld devices"
                bodySegments={[
                  'CXEdge is an AI platform designed to run on low size, weight, power, and cost (SWaP-C) hardware. It enables tactical teams to collect, analyze, and distribute mission critical data in real time on handheld devices.',
                  'CXEdge enhances situational awareness and shortens target timelines increasing mission effectiveness and safety in the most challenging conditions.',
                  'Designed for tactical units and teams without access to robust networks or enterprise cloud resources, CXEdge uses the power of AI to employ innovative compute and data management capabilities at the tactical edge.',
                ]}
              />
            </MaskedSection>

            {/* Give Your Team The Edge */}
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-zinc-600/80"
              contentPosition="center"
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-6 animate-glitch">
                Give Your Team The Edge
              </h2>

              <FeatureRow
                quoteText="Real Time Critical Data"
                bodySegments={[
                  'CXEdge allows end users to ingest, store, transform, and disseminate real time insights from tactical AI and Machine Learning (ML) processes to Android Team Awareness Kits (ATAK), Integrated Visual Augmentation Systems (IVAS),Enhanced Night Vision Goggle Binoculars (ENVG-B), and other devices.',
                  'A user centric AI platform, CXEdge enables real time aggregation of information across battlefield sensors—everything from handheld devices to Group 5 UAVs, even in delayed/disconnected, intermittently connected, low bandwidth (DDIL)environments. It delivers relevant information to the end user when and where they need it, no cloud necessary.',
                ]}
              />
            </MaskedSection>

            {/* Store and Disseminate Products From The Tactical Edge */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-zinc-700/80"
              contentPosition="center"
              background="/images/world.png"
            />

            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-zinc-700/80"
              contentPosition="center"
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-6 animate-glitch">
                Store and Disseminate Products From The Tactical Edge
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <QuoteBubble
                  text="Aided Target Recognition (AiTR)"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                />{' '}
                <QuoteBubble
                  text="Natural Language Processing (NLP) and Optical Character Recognition (OCR) on captured enemy material"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                />
                <QuoteBubble
                  text="3D geospatial analysis"
                  borderColor="border-cyan-400"
                  fillColor="bg-cyan-900/80"
                />
              </div>
            </MaskedSection>
            {/* Real Users in Mind */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-zinc-500/60 via-orange-400/30 to-orange-900/80"
              contentPosition="center"
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-6 animate-glitch">
                Real Users in Mind
              </h2>

              <FeatureRow
                // reverse
                image={
                  <MaskedImage
                    src="/images/people.png"
                    alt="Tactical hardware"
                    // circle
                    fill={false}
                    zoom={1.55}
                    positionX="center"
                    positionY="50%"
                  />
                }
                // quoteText="Real Time Critical Data"
                bodySegments={[
                  'Developed by industry leading AI/ML engineers who want to help solve hard tactical problems and whose focus is to develop battlefield changing technology unconstrained, CXEdge compresses the target approval timeline.',
                ]}
              />
            </MaskedSection>
          </>
        )}
        {mode === 'advanced' && (
          <MaskedSection topLeftAngle={-60} bgColor="bg-zinc-800/80">
            <h2 className="text-3xl font-bold text-orange-500">AI Integration</h2>
            <p className="text-white mt-2 max-w-xl">
              Seamless LLM and ML model integration for enterprise platforms.
            </p>
          </MaskedSection>
        )}
      </main>
    </PageFade>
  );
}
