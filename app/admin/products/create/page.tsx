import CheckboxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInInput from "@/components/form/FormInInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput ";
import SubmitButton from "@/components/form/SubmitButton";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProduct } from "@/utils/actions";
import { faker } from "@faker-js/faker";



const ProductCreate = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section className="">
      <h1 className="text-2xl">Product Create</h1>
      {/* Form for creating a new product */}
      <FormContainer action={createProduct}>
        <div className="grid md:grid-cols-2 gap-6">
           {/* Product name */}
        <FormInInput
          name="name"
          label="Product Name"
          defaultValue={name}
          placeholder="Type product Name"
          type="text"
        />
          {/* Product company */}
          <FormInInput
            name="company"
            label="Company Name"
            defaultValue={company}
            placeholder="Type company Name"
            type="text"
          />
          {/* Product price */}
          <PriceInput
          defaultValue={0}
          />

          {/* Product image */}
          <ImageInput/>
          </div>
          {/* Product description */}
         <div className="mt-4">
         <TextAreaInput labelText="Product Descrption" name="description" defaultValue={description}/>
         </div>
         <div className="my-4">
          <CheckboxInput name="featured" label="Feature"/>
          </div>
          {/* Submit button */}
          <SubmitButton text='create Product' />
       
       
      </FormContainer>
    

       

      
        {/* Submit button */}

    </section>
  );
};

export default ProductCreate;
