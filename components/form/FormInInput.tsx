

type FormInputType = {
    type: string;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    label?:string;
}

const FormInInput = ({type,name, defaultValue, placeholder,label}:FormInputType) => {
  return (
    <div className="mb-2">
          <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
          <input
            id={name}
            type={type}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required
          />
        </div>
  )
}

export default FormInInput