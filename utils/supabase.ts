import {createClient} from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPERBASE_URL as string, process.env.SUPERBASE_KEY as string);

const bucketName = 'storeImage';

export const uploadImage = async (image: File) => {
    const timeStamp = new Date().getTime();
    const fileName = `${timeStamp}-${image.name}`;
    const {data, error } = await supabase
       .storage
       .from(bucketName)
       .upload(fileName, image,{cacheControl:'3600'});

    if(error) {
        throw new Error(`Error uploading image: ${error.message}`);
    }

   // return data.fullPath;
    return supabase.storage.from(bucketName).getPublicUrl(fileName).data.publicUrl;
    
}