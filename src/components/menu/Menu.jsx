import "./menu.scss";
export default function Menu({ menuOpen, setMenuOpen }) {
  const MENU_OPTS = [
    { text: "Home", link: "#intro" },
    { text: "Portfolio", link: "#portfolio" },
    { text: "Works", link: "#works" },
    { text: "Testimonials", link: "#testimonials" },
    { text: "Contact", link: "#contact" },
  ];
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul className="">
        {MENU_OPTS.map((opt, i) => {
          return (
            <li onClick={() => setMenuOpen(false)}>
              <a href={opt.link}>{opt.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
