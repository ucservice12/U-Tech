import CaseStudyCard from "@/components/CaseStudyCard";
import { motion } from "framer-motion";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Headline, TypographyH4, TypographyH1, TypographyMuted } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import HeroSection from "@/components/HeroSection";
import { Button } from '@/components/ui/button'

import {
  FaCheck,
} from "react-icons/fa";
import {
  digitalTransformationFeatures,
  dxFeatures,
  facilityAssurance,
  facilityHighlights,
  features,
  growthInnovationFeaturesData,
  industrySolutions,
  points,
  readingData,
  services
} from "./Data";

const DigitalTransformation = () => {

  return (
    <>

      {/* ===== HERO SECTION ===== */}
      <HeroSection
        backgroundImage='/assets/services/transformation-banner.jpg'
        title="DIGITAL TRANSFORMATION SERVICES & SOLUTIONS"
        buttonText="Hire A Reliable DX Resource"
        buttonLink="#"
        imageFit="cover"
        overlayOpacity={0.6}
      />

      <PageLayout className="py-12 space-y-8 text-center">
        <Headline
          title="Drive Growth and Innovation With Our Digital Transformation
            Solutions"
          description="U Technology’s digital transformation consulting experts will help your
            business reach optimal performance through innovative strategies and
            implementation of digital transformation initiatives. Our DevOps
            specialists are available to provide workflow automation, deploy,
            and support technical solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          <FeaturesList features={growthInnovationFeaturesData.slice(0, 2)} fadeUp={fadeUp} />
          <FeaturesList features={growthInnovationFeaturesData.slice(2, 4)} fadeUp={fadeUp} />
        </div>

        <FadeInWhenVisible>
          <Button variant="hover">
            WORK WITH TRASFORAMTION EXPERTS
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="py-16 bg-secondary text-center">
        <PageLayout className="space-y-12">

          <Headline
            title="Work With Top Digital Transformation Experts"
            description="We provide digital transformation services that will optimize your
            business by increasing efficiency and enabling a greater competitive
            advantage. We can integrate systems, automate processes, and provide
            staff augmentation to help you fulfill your core objectives."
          />

          <div className="flex justify-center md:flex-row flex-col items-center gap-6">
            <FeaturesList features={digitalTransformationFeatures} fadeUp={fadeUp} />
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/digital-services.jpg"
                alt="Financial Planning Dashboard"
                className="w-110"
              />
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1  text-start sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <CaseStudyCard
                key={index}
                index={index}
                icon={item?.icon}
                title={item?.title}
                description={item?.description}
                link={item?.link}
              />
            ))}
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">
              GET DIGITAL TRANSFORMATION SERVICES
            </Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      <PageLayout className="py-16 text-center space-y-10">

        <Headline
          title='Industry-Specific Digital Transformation Solutions'
          description='U Technology provides customized digital transformation solutions to meet
          the specific needs of businesses across different industries,
          including finance, healthcare, and retail.'
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          <FeaturesList features={industrySolutions.slice(0, 4)} fadeUp={fadeUp} />
          <FeaturesList features={industrySolutions.slice(4, 8)} fadeUp={fadeUp} />
        </div>

        {/* Button */}
        <FadeInWhenVisible>
          <Button variant="hover">
            Get Industry DX Solution
          </Button>
        </FadeInWhenVisible>

      </PageLayout>

      <section className="py-16 bg-secondary">
        <PageLayout className="space-y-10 text-center">

          <Headline
            title='Reliable Digital Transformation Service Providers'
            description='We have the infrastructure and bandwidth to provide streamlined
            service and support in digital transformation and business process
            outsourcing. Our facilities and resources are secure and reliable.'
          />

          <div className="flex justify-center md:flex-row flex-col items-center gap-6">
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/images.png"
                alt="Financial Planning Dashboard"
                className="w-56 sm:w-84"
              />
            </FadeInWhenVisible>
            <FeaturesList features={facilityHighlights} fadeUp={fadeUp} />
          </div>

          <div className="flex justify-center md:flex-row flex-col items-center gap-6">
            <FeaturesList features={facilityAssurance} fadeUp={fadeUp} />
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/vector.jpg"
                alt="Financial Planning Dashboard"
                className="w-56 sm:w-84"
              />
            </FadeInWhenVisible>
          </div>

          <FadeInWhenVisible>
            <Button variant="hover">
              Hire A Reliable DX Resource
            </Button>
          </FadeInWhenVisible>

        </PageLayout>
      </section>

      <PageLayout className="py-20 text-center space-y-10">
        <Headline
          title='Top Talent & Industry Expertise'
          description="U Technology recruits top talent that goes through a rigorous hiring
          process followed by thorough training and development to provide
          optimal service."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-start">
          {features.map((item, index) => (
            <CaseStudyCard
              key={index}
              index={index}
              icon={item?.icon}
              title={item?.title}
              description={item?.description}
              link={item?.link}
            />
          ))}
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">
            WORK WITH TOP TALENT
          </Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="py-20 text-center space-y-10">
          <Headline
            title='One-Stop Digital Transformation Solution Provider'
            description="Our specialized industry-specific teams provide skill, intelligence,
            and efficiency to drive value and growth. With our innovative
            resources, we will help you increase operational flexibility."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-start">
            {dxFeatures.map((item, index) => (
              <CaseStudyCard
                key={index}
                index={index}
                icon={item?.icon}
                title={item?.title}
                description={item?.description}
                link={item?.link}
              />
            ))}
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">
              HIRE A ONE-STOP SHOP
            </Button>
          </FadeInWhenVisible>
        </PageLayout>

      </section >

      <PageLayout className="py-12">
        <Headline
          title="Compliance Measures"
          description='Our expert management team will help you make business process
            outsourcing as seamless as possible as we implement processes per
            industry standards.'
        />

        <div className="flex justify-center space-y-10 md:flex-row flex-col items-center gap-6">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/newsroom.png"
              alt="Financial Planning Dashboard"
              className="w-84"
            />
          </FadeInWhenVisible>

          <ul className="text-left space-y-4">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm sm:text-base"
              >
                <FaCheck className="text-teal-600 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="text-center space-y-10">
          <TypographyH1>
            SUGGESTED READING
          </TypographyH1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {
              readingData?.map((item, index) => (
                <div key={index} className="space-y-4 text-start">
                  <FadeInWhenVisible>
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-sm"
                    />
                  </FadeInWhenVisible>
                  <TypographyH4>
                    {item.title}
                  </TypographyH4>
                  <FadeInWhenVisible>
                    <Button className="w-full">
                      READ MORE
                    </Button>
                  </FadeInWhenVisible>
                </div>
              ))
            }
          </div>
        </PageLayout>
      </section>
    </>
  );
};

export default DigitalTransformation;
