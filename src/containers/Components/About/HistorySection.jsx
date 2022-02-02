import React from "react";
import PropTypes from "prop-types";
import { Timeline } from "antd";
import ScrollableSection from "../../Common/components/ScrollableSection";

const data = [
  {
    year: "1980",
    description:
      "In 1980, a visionary educationist with over 40 years teaching experience, Sir Hafeez-ur-Rahman, founder of ITOT considering his past teaching experiences, thought of an education system in which children would not be bored. According to that period, he taught and experimented with the help of charts and diagrams. It was concluded that with the help of charts and diagrams the children learn more in a short time and these diagrams and sketches focus the attention of the children which does not feel the burden of reading. In addition to teaching in the form of a story and with activities, he made it clear that these are the requirements that must be met in the upcoming education system.",
  },
  {
    year: "2009",
    description:
      "After a long time, it was thought to form this method into a curriculum. A unique and innovative style of teaching was developed with the help of various scholars and a few Australian academics. To accomplish this, Dr. Muhammad Akmal, co-founder of ITOT, played a significant role and after their hard work introduced a method of education in which there was no need for heavy loaded bags because it’s not only a physical but also a mental burden.",
  },
  {
    year: "2012",
    description:
      "It has been applied to 5 schools for experimental observation since 2012 and has been further improved each year. In view of the increasing rate of positive results over a period of eight years, it was decided that this method of education is now one of its kind.",
  },
];

const CustomDot = ({ title }) => (
  <span className="p-2 rounded-full bg-custom-red text-white text-sm text-center">
    {title}
  </span>
);

const HistorySubSection = ({ section }) => (
  <Timeline.Item
    key={section.year}
    dot={<CustomDot title={section.year} />}
    className="text-base pl-7"
  >
    {section.description}
  </Timeline.Item>
);

function HistorySection() {
  return (
    <ScrollableSection title="History" containerId="history">
      <Timeline className="ml-3 py-4">
        {data.map(item => (
          <HistorySubSection section={item} />
        ))}
      </Timeline>
    </ScrollableSection>
  );
}

CustomDot.propTypes = {
  title: PropTypes.string.isRequired,
};

HistorySubSection.propTypes = {
  section: PropTypes.object.isRequired,
};

export default HistorySection;
