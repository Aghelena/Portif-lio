import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import dynamic from "next/dynamic";

import { useEffect } from "react";

import { accordion } from "../../common/utilits";

import Link from "next/link";

import PricingSection from "@components/sections/Pricing";
import { serviceData } from "@/src/data/services/services";


export default function ServiceDetail({ services }) {
  if (!services) {
    return <p>Serviço não encontrado.</p>;
  }

  const { previewDetails, fullDetails } = services;

  
  return (
    <Layouts fullWidth
    >
      <PageBanner pageTitle={previewDetails.title} align={"center"} />

      {fullDetails.subtitle != undefined && (
        <div className="mil-section-title mil-up mil-mb-90">
          <div className="mil-divider" />
          <h3>{fullDetails.subtitle}</h3>
        </div>
      )}

      {/* about */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="mil-text-lg mil-dark mil-center mil-up mil-mb-90">
            <p className="text-muted">{services.description}</p>
          </div>
        </div>
      </div>
      {/* about end */}

      {fullDetails.list != undefined && (
        <>
          <div className="mil-section-title mil-up mil-mb-90">
            <div className="mil-divider" />
            <h3>{fullDetails.list.heading}</h3>
          </div>
          {/* service */}
          <div className="mil-p-0-60">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                {fullDetails.list.items.map((item, key) => (
                  <div
                    className="mil-accordion-group mil-up"
                    key={`service-list-${key}`}
                  >
                    <div className="mil-accordion-menu">
                      <p className="mil-accordion-head">{item.label}</p>
                      <div className="mil-symbol mil-h3">
                        <div className="mil-plus">+</div>
                        <div className="mil-minus">-</div>
                      </div>
                    </div>
                    <div
                      className="mil-accordion-content"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* service end */}
        </>
      )}

      <PricingSection />
    </Layouts>
  );
};

export async function getStaticPaths() {
  const paths = serviceData.map((s) => ({
    params: { id: `${s.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const services = serviceData.find((service) => service.id == params.id);
  return {
    props: {
      services,
    },
  };
}