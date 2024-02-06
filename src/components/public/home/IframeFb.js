export const IframeFb = () => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "2em",
      }}
    >
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D61555409192993&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        height="500"
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};
