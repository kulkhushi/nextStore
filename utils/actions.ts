import db from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z, ZodSchema } from "zod";
import { imageSchema, productSchema } from "./schemas";
import { uploadImage } from "./supabase";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const randarError = (error: any): { message: string } => {
  return {
    message:
      error instanceof Error ? `Hello ${error.message}` : "An error occurred",
  };
};

const getAuthUser = async () => {
  const user = await currentUser();
  //auth().userId
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};

export const fetchFeaturedProduct = async () => {
  const featuredProduct = await db.product.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return featuredProduct;
};

export const fetchALlProduct = async ({ search = "" }: { search: string }) => {
  const allProducts = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return allProducts;
};

export const fetchProductById = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/products");
  return product;
};

export const createProduct = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  "use server";
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = productSchema.safeParse(rawData);
    const validateiMAGE = imageSchema.safeParse(formData.get('image') as File)
    // const name = formData.get('name') as string;
    // const company = formData.get('company') as string;
    // const price = Number(formData.get('price') as string);
    // const image = formData.get('image') as File;
    // const description = formData.get('description') as string;
    // const featured = Boolean(formData.get('featured') as string)
   
    if (!validateiMAGE.success) {
      throw new Error(validateiMAGE.error?.errors[0].message)
    }

    const imageBucketpat = await uploadImage(validateiMAGE.data);
    console.log(imageBucketpat);

    if (!validatedFields.success) {
      const errors = validatedFields.error.errors.map((error) => error.message);
      throw new Error(errors.join(","));
    }

    await db.product.create({
      data: {
        ...validatedFields.data,
        image: imageBucketpat,
        clerkId: user.id,
      },
    });
    //return { message: "Product created successfully" };
  } catch (error) {
    return randarError(error);
  }
  redirect('/admin/products');
};
