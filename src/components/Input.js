import styled from "@emotion/styled";

// Formating the input tag
const StyledInput = styled.input`
  border-radius: 6px;
  padding: 8px 12px;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

function Input({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div style={{ width: "100%" }}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <StyledInput
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
