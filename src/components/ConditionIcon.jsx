import { useState, useEffect } from "react";
import { Suspense } from "react";

function ConditionIcon({ condition }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    async function getIcon() {
      let importedIcon = await import(
        `../icons/${condition.replace(/\s/g, "")}.svg`
      ).catch(() => {
        setIcon("");
        return;
      });
      if (importedIcon) {
        setIcon(importedIcon.default);
      } else {
        setIcon("");
      }
    }
    getIcon();
  });

  return (
    <div className="weather-summary__icon">
      <Suspense fallback={<div>no icon</div>}>
        <img className="w-44" src={icon} />
      </Suspense>
    </div>
  );
}

export default ConditionIcon;
