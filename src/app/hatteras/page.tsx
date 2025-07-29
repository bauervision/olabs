'use client';
import Image from 'next/image';
import FeatureRow from '../components/FeatureRow';
import MaskedImage from '../components/MaskedImage';
import MaskedSection from '../components/MaskedSection';
import PageFade from '../components/PageFade';
import ProductHeaderBar from '../components/ProductHeaderBar';
import { ProductTitleRow } from '../components/ProductTitleRow';
import { useViewMode } from '../context/ViewModeContext';

// app/cx-edge/page.tsx
export default function HatterasPage() {
  const { mode } = useViewMode();
  return (
    <PageFade>
      {/* <ProductHeaderBar techDocUrl="/docs/cx-edge-tech.pdf" /> */}
      <main className=" bg-zinc-900 text-white py-8  flex flex-col justify-center items-center text-center">
        <ProductTitleRow productName="Hatteras" logoUrl="/images/HatterasLogo.png" />

        {mode === 'basic' && (
          <>
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-zinc-800/80"
              contentPosition="center"
            >
              <h2 className="text-3xl font-bold text-blue-500 mb-4 animate-glitch">
                MLOps Platform Deployed and Used at the Edge
              </h2>
              <FeatureRow
                bodySegments={[
                  'Focuses on model degradation / drift detection, semi-automated data labelling, and automated retraining',
                  'Built with modular services and deployed on Kubernetes',
                  'Model agnostic',
                  'Empowers non-technical users',
                ]}
                quoteText="Drift Detection?"
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      Drift Detection
                    </h2>
                    <p>This dialog gives more info when users click the quote.</p>
                  </div>
                }
              />
            </MaskedSection>

            {/* Develop Deploy.... */}
            <MaskedSection
              topRightAngle={40}
              bottomRightAngle={40}
              bgColor="bg-gradient-to-br from-blue-500/60 via-blue-400/30 to-zinc-900/80"
              contentPosition="center"
            >
              <h2 className="text-3xl font-bold text-blue-500 mb-6 animate-glitch">
                Develop, Deploy, and Maintain Models
              </h2>

              <FeatureRow
                reverse
                image={
                  <MaskedImage
                    src="/images/HatterasCycle.png"
                    alt="Hatteras Cycle"
                    width={320}
                    shadow={false}
                    positionX="bottom"
                  />
                }
                quotePopupContent={
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-cyan-500 animate-glitch">
                      One of Two things inevitably happens...
                    </h2>
                    <p className="pb-4">
                      1. Models are dangerously allowed to run unmonitored in production
                    </p>
                    <p>
                      2. The data scientists & ML engineers become task saturated just trying to
                      maintain a relatively small number of models
                    </p>
                  </div>
                }
                quoteText="Hatteras, helps to avoids the inevitable..."
                bodySegments={[
                  'A systematic approach to developing, deploying, and maintaining ML models reliably & efficiently by embracing:',
                  '1. Automation',
                  '2. Reproducibility',
                  '3. Scalability',
                  '4. Model Monitoring and Maintenance',
                  '5. Model Security',
                ]}
              />
            </MaskedSection>

            {/* Operation Overview */}
            <MaskedSection
              topLeftAngle={40}
              bottomLeftAngle={40}
              bgColor="bg-zinc-600/80"
              contentPosition="center"
            >
              <h2 className="text-3xl font-bold text-blue-500 mb-6 animate-glitch">
                Operational Overview
              </h2>

              <FeatureRow
                bodySegments={[
                  'A Data Scientist or ML Engineer create the model in Hatteras',
                  'The model gets deployed into service',
                  'Objects are detected based on the model',
                  'Hatteras monitors the performance of that model over time',
                  'If drift detection occurs, Hatteras re-trains the model and re-deploys',
                ]}
              />
            </MaskedSection>
          </>
        )}

        {mode === 'advanced' && (
          <section>
            <p className="text-gray-700 dark:text-gray-300">
              Under the hood, Hatteras leverages edge compute nodes to run sentiment pipelines…
            </p>
          </section>
        )}
      </main>
    </PageFade>
  );
}
