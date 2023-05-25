import "./Donate.scss";
import AccordionSlider from "../AccordionSlider/AccordionSlider";

const SaveDonate = () => {
  return (
    <section className={"donate"}>
      <div className={"container"}>
        <div className={"donate-wrap"}>
          <h2 className={"donate-title"}>Безпечний донат</h2>
          <AccordionSlider />
        </div>
      </div>
    </section>
  );
};

export default SaveDonate;