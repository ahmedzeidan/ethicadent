import { businessInfo } from "@/data/site";

export function HoursList() {
  return (
    <ul className="hours">
      {businessInfo.hours.map((item) => (
        <li key={item.day}>
          <strong>{item.day}</strong>
          <span>{item.time}</span>
        </li>
      ))}
    </ul>
  );
}

