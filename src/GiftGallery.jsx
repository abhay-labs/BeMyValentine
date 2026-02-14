import React from "react";

/* 👇 Folder ki saari photos auto load */
const images = Object.values(
  import.meta.glob("./assets/mygfphoto/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

export default function GiftGallery() {
  return (
    <div style={{padding:"40px", textAlign:"center"}}>
      <h1>Our Memories 💖</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
        gap:"15px"
      }}>
        {images.map((src,i)=>(
          <img key={i} src={src} style={{
            width:"100%",
            height:"220px",
            objectFit:"cover",
            borderRadius:"15px"
          }}/>
        ))}
      </div>
    </div>
  );
}
