import React from "react";
import {
  Boxes,
  Clock3,
  Network,
  Tag,
  Printer,
  ScanLine,
  MonitorCog,
  PenTool,
  Files,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

const whyCards = [
  {
    title: "Small Batch Customization",
    icon: Boxes,
  },
  {
    title: "7×24 Rapid Response",
    icon: Clock3,
  },
  {
    title: "Digital Workflow Support",
    icon: Network,
  },
];

const focusItems = [
  { title: "LABELS", icon: Tag },
  { title: "PRINTER", icon: Printer },
  { title: "SCANNER", icon: ScanLine },
  { title: "SOFTWARE", icon: MonitorCog },
  { title: "LABEL DESIGN", icon: PenTool },
  { title: "PRE-PRINTED LABELS", icon: Files },
  { title: "PRE-APPLIED LABELING", icon: PackageCheck },
];

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="UVMARK home">
        <img src="/uvmark-logo.png" alt="UVMARK logo" />
      </a>
      <nav className="nav" aria-label="Main navigation">
        <a href="#about">ABOUT UVMARK</a>
        <a href="#products">PRODUCTS & SERVICES</a>
        <a href="#cases">CASE STUDIES</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroGlow" />
      <div className="heroContent">
        <p className="eyebrow">Modern Biotech Workflow Support</p>
        <h1>Flexible Labeling Solutions for Fast-Moving Laboratories and Clinical Research</h1>
        <p className="slogan">Agile labeling and identification support for modern biotech workflows.</p>
        <a className="primaryButton" href="#contact">
          Talk to a Specialist <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function WhyUVMARK() {
  return (
    <section className="section" id="about">
      <div className="sectionHeader">
        <p className="eyebrow">WHY UVMARK</p>
        <h2>Built for flexibility, speed, and digital workflows.</h2>
      </div>

      <div className="whyGrid">
        {whyCards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="featureCard" key={card.title}>
              <div className="iconBox">
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3>{card.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function WhatWeFocus() {
  return (
    <section className="section focusSection" id="products">
      <div className="sectionHeader">
        <p className="eyebrow">WHAT WE FOCUS</p>
        <h2>Labeling materials, systems, and services for laboratory operations.</h2>
      </div>

      <div className="focusGrid">
        {focusItems.map((item) => {
          const Icon = item.icon;
          return (
            <article className="focusCard" key={item.title}>
              <Icon size={30} strokeWidth={1.7} />
              <span>{item.title}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CaseStudiesPlaceholder() {
  return (
    <section className="caseStrip" id="cases">
      <div>
        <p className="eyebrow">CASE STUDIES</p>
        <h2>Application stories coming soon.</h2>
      </div>
      <p>
        Cryogenic sample identification, clinical research labeling, and small-batch biotech workflows.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactCard">
        <p className="eyebrow">CONTACT</p>
        <h2>Ready to Support Your Workflow</h2>
        <p>Tell us what you need. We’ll help build the right labeling solution around your workflow.</p>
        <a className="primaryButton" href="tel:18326471898">
          Contact UVMARK <ArrowRight size={18} />
        </a>
      </div>

      <footer className="footer">
        <strong>UVMARK Inc.</strong>
        <span>3027 OLD MASTERS DR, SUGAR LAND, TX 77479</span>
        <span>Phone: 832-647-1898</span>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyUVMARK />
      <WhatWeFocus />
      <CaseStudiesPlaceholder />
      <Contact />
    </main>
  );
}
