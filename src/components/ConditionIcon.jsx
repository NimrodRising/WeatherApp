import sunny from "../icons/sunny.svg";

function ConditionIcon() {
  return (
    <div className="weather-summary__icon">
      <img src={sunny} className="w-44" alt="" />
    </div>
  );
}

export default ConditionIcon;
