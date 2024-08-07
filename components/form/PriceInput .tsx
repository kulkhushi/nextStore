import { Label } from '../ui/label';
import { Input } from '../ui/input';

const name = 'price';
type FormInputNumberProps = {
  defaultValue?: number;
};

const PriceInput  = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
          <Label htmlFor='price' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">{name}</Label>
          <Input
            id={name}
            type='number'
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            name={name}
            min={0}
            defaultValue={defaultValue || 100}
            required
          />
        </div>
  )
}

export default PriceInput 