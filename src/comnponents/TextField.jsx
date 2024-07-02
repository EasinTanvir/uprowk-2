const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={` font-semibold text-md text-slate-800 `}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={` px-2 py-2 border   outline-none bg-transparent  text-slate-700 rounded-md ${
          errors[id]?.message ? "border-red-500" : "border-slate-600"
        }`}
        {...register(id, {
          required: { value: required, message },
          minLength: min
            ? { value: min, message: "Minimum 6 character is required" }
            : null,
        })}
      />

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-500 mt-0">
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
};

export default TextField;
