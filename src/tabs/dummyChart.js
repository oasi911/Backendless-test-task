import React from "react";
import css from "./DummyTabs.module.css";

const DummyChart = () => (
  <>
    <div className={css.chartContainer}>
      <div className={css.bar} style={{ height: "50%" }}>
        50%
      </div>
      <div className={css.bar} style={{ height: "70%" }}>
        70%
      </div>
      <div className={css.bar} style={{ height: "100%" }}>
        100%
      </div>
      <div className={css.bar} style={{ height: "30%" }}>
        30%
      </div>
      <div className={css.bar} style={{ height: "80%" }}>
        80%
      </div>
      <div className={css.bar} style={{ height: "60%" }}>
        60%
      </div>
    </div>
  </>
);

export default DummyChart;
