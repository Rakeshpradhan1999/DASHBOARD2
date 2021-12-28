const CustomInput = ({ placeholder }) => (
  <div className="custom-input mb-4">
    <input
      type="text"
      className="focus:outline-none "
      placeholder={placeholder}
    />
  </div>
);

export default CustomInput;
