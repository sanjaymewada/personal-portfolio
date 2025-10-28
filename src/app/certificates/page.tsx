"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certificates = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      image: "/certificates/azure-fundamentals.png",
      link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS & Simplilearn",
      date: "Oct 2025",
      image: "/certificates/aws-cert.png",
      link: "https://www.credly.com/badges/your-cert-link",
    },
    {
      title: "Docker Fundamentals",
      issuer: "Simplilearn",
      date: "Sept 2025",
      image: "/certificates/docker-cert.png",
      link: "https://example.com",
    },
  ];

  return (
    <main className="container mx-auto py-16 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">
        My Certificates & Training
      </h1>

      {/* Certificate Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg p-5 hover:scale-105 transition cursor-pointer bg-white"
            onClick={() => setSelectedCert(cert)}
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={600}
              height={400}
              className="rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {cert.issuer}
            </p>
            <p className="text-sm text-gray-500">{cert.date}</p>
            <Link
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-3 inline-block underline"
            >
              View Certificate
            </Link>
          </div>
        ))}
      </div>

      {/* 🔍 Preview Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCert.image}
              alt={selectedCert.title}
              width={1200}
              height={900}
              className="rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full px-3 py-1 text-sm font-semibold shadow-lg hover:bg-gray-200"
            >
              ✕ Close
            </button>

            <div className="bg-white p-4 rounded-b-lg mt-4 text-center">
              <h2 className="text-2xl font-bold">{selectedCert.title}</h2>
              <p className="text-gray-600">{selectedCert.issuer}</p>
              <p className="text-gray-500 text-sm">{selectedCert.date}</p>
              <Link
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 inline-block"
              >
                Open Official Certificate
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
