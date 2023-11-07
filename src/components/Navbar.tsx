const Navbar = () => {
  const NavStyle: React.CSSProperties = {
    width: "100%",
    height: "3em",
    backgroundColor: "#FF8C19",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: ".5rem",
    marginBottom: "1rem",
    color: "white",
  };

  const BurgerAlign: React.CSSProperties = {
    height: "100%",
    width: "4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  };

  const Burger: React.CSSProperties = {
    width: "4em",
    height: "0.5em",
    backgroundColor: "white",
    borderRadius: "0.5em",
  };

  const NavButton: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "2rem",
    cursor: "pointer",
  };

  return (
    <>
      <nav style={NavStyle}>
        <div style={BurgerAlign}>
          <div style={Burger} className="burger-bar"></div>
          <div style={Burger} className="burger-bar"></div>
          <div style={Burger} className="burger-bar"></div>
        </div>
        <div style={NavButton}>
          <h3>home</h3>
          <h3>about</h3>
          <h3>store</h3>
          <h3>contact</h3>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
