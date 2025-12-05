import { GalleryItem } from "./GalleryItem";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
  "/images/img8.png",
  "/images/img9.png",
  
];

export function Gallery({ view }) {
  return (
    <div
      className={`mt-6 ${
        view === "grid"
          ? "grid grid-cols-3 gap-6"
          : "flex flex-col gap-6"
      }`}
    >
      {images.map((img, i) => (
        <GalleryItem key={i} img={img} view={view} />
      ))}
    </div>
  );
}
