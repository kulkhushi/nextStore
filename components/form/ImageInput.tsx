

const ImageInput = () => {
    const name = 'image';
  return (
    <div className="mb-2">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={name}
      >
        Product Image
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        name={name}
        required accept='image/*'
      />
    </div>
  );
};

export default ImageInput;
