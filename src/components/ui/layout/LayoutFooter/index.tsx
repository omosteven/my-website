import Icon from "components/ui/Icon";
import "./LayoutFooter.scss";

const LayoutFooter = () => {
  return (
    <footer className="layout-footer">
      <div>
        <span>Follow me @</span>
        <a href="https://twitter.com/omolesteven" target="__blank">
          <Icon icon="twitter" />
        </a>
        <a href="https://linkedin.com/in/steven-omole" target="__blank">
          <Icon icon="linkedin" />
        </a>
        <a href="https://instagram.com/omolesteven" target="__blank">
          <Icon icon="instagram" />
        </a>
        <a href="https://github.com/omosteven" target="__blank">
          <Icon icon="github" />
        </a>
      </div>
      <p>
        <Icon icon="copyright" />
        Designed and Fully Engineered By <b>Steven</b>
      </p>
    </footer>
  );
};
export default LayoutFooter;
