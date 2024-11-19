const InputComponent = ({
  label,
  type,
  name,
  placeholder,
  value,
  options,
  checked,
  onChange,
  error,
}) => {
  if (type == "radio") {
    return (
      <div className="form-field">
        <label>{label}</label>
        <div className="radio-group">
          {options.map((option) => (
            <div key={option.value}>
              <input
                type={type}
                name={name}
                value={option.value}
                checked={checked(option.value)}
                onChange={onChange}
              />
              {option.label}
            </div>
          ))}
        </div>
        {error && (
          <span style={{ color: "red", fontSize: "12px" }}>{error}</span>
        )}
      </div>
    );
  } else if (type == "checkbox") {
    return (
      <div className="form-field">
        <label>Your best Subject</label>
        <div className="checkbox-group">
          {value.map((subject) => (
            <div key={subject}>
              <input
                type={type}
                name={name}
                value={subject}
                checked={checked(subject)}
                onChange={onChange}
              />
              {subject}
            </div>
          ))}
        </div>
        {/* {error && (
          <span style={{ color: "red", fontSize: "12px" }}>{error}</span>
        )} */}
      </div>
    );
  } else if (type == "select") {
    return (
      <div className="form-field">
        <label>{label}</label>
        <select name={name} value={value} onChange={onChange}>
          <option value="">Select your Ans</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span style={{ color: "red", fontSize: "12px" }}>{error}</span>
        )}
      </div>
    );
  } else if (type == "textarea") {
    return (
      <div className="form-field">
        <label>{label}</label>
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
        {error && (
          <span style={{ color: "red", fontSize: "12px" }}>{error}</span>
        )}
      </div>
    );
  }
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span style={{ color: "red", fontSize: "12px" }}>{error}</span>}
    </div>
  );
};

export default InputComponent;
