// src/app/certificates/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function CertificatesPage() {
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
    <main className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">
        My Certificates & Training
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg p-5 hover:scale-105 transition"
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
    </main>
  );
}
