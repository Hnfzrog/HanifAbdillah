// Konten terpusat — ubah teks/kontak/skill/layanan di sini tanpa menyentuh komponen.
// Sumber: resume_hanifabdillah.pdf (root repo).

export interface Experience {
  role: string;
  org: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  period: string;
  detail: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const profile = {
  name: "Hanif Abdillah Kuswanto",
  role: "Frontend Developer",
  tagline:
    "Saya membangun website yang cepat, rapi, dan terstruktur — dari landing page sampai aplikasi web.",
  about:
    "Software Engineer dengan fondasi kuat di pengembangan software dan fokus membangun aplikasi yang andal serta terstruktur dengan baik. Berpengalaman menulis kode yang bersih dan mudah dirawat, cepat beradaptasi dengan teknologi baru, dan nyaman bekerja di lingkungan yang terorganisir dan serba cepat. Teliti, disiplin, dan berkomitmen memberikan solusi teknis yang efisien dengan kualitas yang konsisten.",
  skills: ["Angular", "TypeScript", "Responsive UI", "Vue", "React"],
  contact: {
    whatsapp: "6281392186005",
    whatsappDisplay: "+62 813-9218-6005",
    email: "hanifabdillah668@gmail.com",
  },
};

export const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#skill", label: "Skill" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#layanan", label: "Layanan" },
  { href: "#kontak", label: "Kontak" },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    org: "Badan Sistem Informasi UII",
    period: "September 2023 – sekarang",
    description:
      "Mengembangkan dan memelihara aplikasi web menggunakan TypeScript dan Angular di lingkungan produksi. Berkontribusi pada pengembangan fitur, perbaikan bug, dan peningkatan UI sambil mengikuti arsitektur komponen yang bersih dan scalable.",
  },
  {
    role: "Internship — Frontend Developer",
    org: "Badan Sistem Informasi UII",
    period: "Juli 2022 – Desember 2022",
    description:
      "Magang 6 bulan di lingkungan pengembangan profesional, memperoleh pengalaman langsung dengan TypeScript dan Angular dalam membangun serta memelihara aplikasi web. Aktif berkontribusi pada pengembangan fitur, perbaikan bug, dan peningkatan UI.",
  },
];

export const education: Education[] = [
  {
    school: "Universitas Mercu Buana",
    period: "2024 – sekarang",
    detail: "S1 Informatika (semester 5)",
  },
  {
    school: "SMK N 2 Magelang",
    period: "2020 – 2023",
    detail: "Rekayasa Perangkat Lunak",
  },
];

export const services: Service[] = [
  {
    title: "Landing Page / Company Profile",
    description:
      "Website satu halaman yang profesional untuk bisnis atau personal branding.",
    icon: "🚀",
  },
  {
    title: "Website Portofolio Pribadi",
    description:
      "Portofolio personal untuk menampilkan karya dan profil secara menarik.",
    icon: "👤",
  },
  {
    title: "Web Aplikasi Frontend (SPA)",
    description:
      "Aplikasi web interaktif menggunakan Angular, React, atau Vue.",
    icon: "💻",
  },
  {
    title: "Slicing Desain & Responsive UI",
    description:
      "Mengubah desain (Figma) menjadi kode yang rapi dan responsif di semua perangkat.",
    icon: "🎨",
  },
];
