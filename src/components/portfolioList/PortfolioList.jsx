import "./portfolioList.scss";

export default function PortfolioList({ item, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(item.id)}
    >
      {item.title}
    </li>
  );
}
