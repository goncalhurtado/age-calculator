const Footer = () => {
  return (
    <div className="footer">
      <p>
        Develop by Goncal Hurtado{" "}
        <a href="https://github.com/goncalhurtado">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github icon"
            style={{ width: "20px" }}
          />
        </a>{" "}
        <a href="https://www.linkedin.com/in/goncalhurtado/">
          <img
            src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
            alt="linkedin icon"
            style={{ width: "20px" }}
          />
        </a>
      </p>
    </div>
  );
};

export default Footer;
