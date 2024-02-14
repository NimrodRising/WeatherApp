function DropdownItem({ name, setCity, region }) {
  return (
    <li
      className="bg-white border-black border w-30 hover:bg-gray-200"
      onClick={() => setCity(`${name}, ${region}`)}
    >
      {`${name}, ${region}`}
    </li>
  );
}

export default DropdownItem;
