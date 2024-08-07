type TextAreaInputType = {
  defaultValue?: string;
  name: string;
  labelText: string;
};

const TextAreaInput = ({
  defaultValue,
  name,
  labelText,
}: TextAreaInputType) => {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText}
      </label>
      <textarea
        id={name}
        name={name}
        rows={5}
        defaultValue={defaultValue}
        required
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
