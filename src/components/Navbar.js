export default function Navbar({ open }) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src="/IMG_3767.PNG" alt="logo" className="logo-img" />
        <div className="logo">LIVARA HOMES</div>
      </div>

      <div className="nav-right">
        <a href="#about">About</a>
        <a href="#kitchen">Kitchens</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>

        <button className="btn" onClick={open}>Enquire</button>
      </div>
    </div>
  );
}