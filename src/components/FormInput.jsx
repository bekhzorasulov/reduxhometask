function FormInput({ type, label, placeholder, value, onChange, name }) {
  return (
    <label className="form-control w-full mb-2">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered input-primary w-full"
        value={value}
        name={name}
        onChange={onChange}
      />
    </label>
  );
}

export default FormInput;
