import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayinweek = new Date().getDay();
  const forecastdays = WEEK_DAYS.slice(dayinweek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayinweek)
  );
  //console.table(forecastdays);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  ></img>
                  <label className="day">{forecastdays[idx]}</label>
                  <label className="description">
                    {item.weather[0].descrition}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                  <label className="wind-speed">
                    {Math.round(item.wind.speed)} m/s
                  </label>
                  <label className="pressure">
                    {Math.round(item.main.humidity)}%
                  </label>
                  <label className="humidity">
                    {Math.round(item.main.pressure)}%
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
