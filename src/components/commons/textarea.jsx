import React from "react";

const TextArea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="text-capitalize">{label}</label>
      <textarea name={name} className="form-control" rows="4" {...rest}></textarea>
      {error && (
        <div className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextArea;
