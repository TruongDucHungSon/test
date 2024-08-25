import ic1 from "../assets/svgs/ic1.svg";
import ic2 from "../assets/svgs/ic2.svg";
import ic3 from "../assets/svgs/ic3.svg";
import ic4 from "../assets/svgs/ic4.svg";
import ic5 from "../assets/svgs/ic6.svg";
import ic6 from "../assets/svgs/ic7.svg";

export const DATA_SERVICE = [
  {
    id: 0,
    title: "Technology Service",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: ic1,
  },
  {
    id: 1,
    title: "Application & Software",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: ic2,
  },
  {
    id: 2,
    title: "Cybersecurity Hub",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data.",
    icon: ic3,
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.",
    icon: ic4,
  },
] as const;
export const DATA_FOOTER = [
  {
    id: 0,
    title: "Need-Based Aid",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    phone: "000-000-000",
    email: "youremail@email.com",
    iconPhone: ic5,
    iconEmail: ic6,
  },
  {
    id: 1,
    title: "Application & Software",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: ic2,
    phone: "000-000-000",
    email: "youremail@email.com",
    iconPhone: ic5,
    iconEmail: ic6,
  },
  {
    id: 2,
    title: "Cybersecurity Hub",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    phone: "000-000-000",
    email: "youremail@email.com",
    iconPhone: ic5,
    iconEmail: ic6,
  },
] as const;
