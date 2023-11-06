import { React } from "react";
import { useLoaderData, Link, Outlet } from "react-router-dom";
import css from "./Tabs.module.css";

export function loader() {
  return fetch("/tabs.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response wasn't ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    });
}

const Tabs = () => {
  const tabs = useLoaderData();

  return (
    <>
      <div className={css.container}>
        <nav>
          {tabs
            .sort((a, b) => a.order - b.order)
            .map((tab) => (
              <Link className={css.button} key={tab.order} to={tab.id}>
                {tab.title}
              </Link>
            ))}
        </nav>
      </div>
      <div className={css.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default Tabs;
