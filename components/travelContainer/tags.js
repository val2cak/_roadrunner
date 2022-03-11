const Tag = ({ text }) => (
  <li className="bg-searchColor text-sm px-2 py-0 mt-2 mr-2 rounded-sm group-hover:bg-pink-500 whitespace-nowrap">
    {text}
  </li>
);

const FilterTag = ({ text, active, toggleActive }) => (
  <li
    onClick={() => toggleActive(text)}
    className={`${
      active ? "bg-hci-general-middle text-white" : "bg-hci-general-dark text-white"
    } px-4 py-1 mb-2 mr-2 rounded-sm hover:bg-hci-general-middle cursor-pointer whitespace-nowrap font-regular`}
  >
    {text}
  </li>
);

export { Tag, FilterTag };
