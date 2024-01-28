function DropdownItem({ key, name, setCity, region }) {
  return (
    <li
      key={key}
      className="bg-white border-black border w-30 hover:bg-gray-200"
      onClick={() => setCity(`${name}, ${region}`)}
    >
      {`${name}, ${region}`}
    </li>
  );
}

export default DropdownItem;
