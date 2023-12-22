import { Icon } from "components/ui";
import { useState } from "react";

const MyInterestCard = (props: { title: String; list: Array<any> }) => {
  const [show, toggleShow] = useState(false);
  const { title, list } = props;
  return (
    <div
      className="my-interests-card"
      onClick={() => toggleShow(!show)}
      data-aos="zoom-in"
    >
      <div className="my-interests-card__heading">
        <h3>{title}</h3>
        <Icon icon={!show ? "dropup" : "dropdown"} />
      </div>
      {show && (
        <div className="my-interests-card__items">
          <ul>
            {list?.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyInterestCard;
