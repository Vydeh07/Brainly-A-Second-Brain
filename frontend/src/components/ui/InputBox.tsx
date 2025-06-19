interface inputProp {
  placeholder: string;
  type: string;
  required: boolean;
  reference?: any;
  extraClasses?: string;
}

const InputBox = (props: inputProp) => {
  return (
    <input
      required={props.required}
      ref={props.reference}
      type={props.type}
      placeholder={props.placeholder}
      className={`
        w-[90%]
        px-4 py-2 
        rounded-xl 
        border border-white/20 
        bg-white/10 backdrop-blur-md 
        text-white placeholder-white/70
        shadow-md 
        outline-none 
        focus:ring-2 focus:ring-primary focus:border-transparent 
        transition-all duration-200 
        ${props.extraClasses}
      `}
    />
  );
};

export default InputBox;
