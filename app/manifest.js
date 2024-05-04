const mapOfIcon = [
  { name: "favicon.ico", size: "16x16" },
  // { name: "icon.png", size: "1080x1080" },
  { name: "icon-520.png", size: "520x520" },
  { name: "icon-310.png", size: "310x310" },
  { name: "icon-64.png", size: "64x64" },
]

export default function manifest() {
  return {
    name: "Spesana 24'B",
    short_name: "Spesana 24'B",
    description: "Kami adalah siswa siswi dari SMPN 1 Nnanggulan angkatan 2021 - 2024 !",
    start_url: "/",
    display: "standalone",
    background_color: "#242424",
    theme_color: "#242424",
    screenshots: [
      {
        src: "",
        sizes: "",
      }
    ],
    icons: mapOfIcon.map(a => ({
      src: `/${a.name}`,
      sizes: a.size,
      type: `image/${a.name.split(".").pop() === "ico"?"x-icon":a.name.split(".").pop()}`
    }))
  }
}