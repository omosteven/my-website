import Icon from "components/ui/Icon";
import "./LayoutFooter.scss";

const  LayoutFooter =()=>{
    return(
        <footer className="layout-footer">
            <div>
                <span>Follow me @</span>
                <Icon icon='twitter'/>
                <Icon icon='linkedin'/>
                <Icon icon='instagram'/>
                <Icon icon='github'/>
            </div>
            <p><Icon icon='copyright'/>Copyright and Fully Engineered By <b>Steven</b></p>
        </footer>
    )
};
export default LayoutFooter;