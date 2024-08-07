import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(4, {
      message: "Name must be at least 4 characters long",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  company: z.string().min(4, { message: "Company must be" }),
  price: z.coerce.number().int().min(0),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),
  featured: z.coerce.boolean(),
});


// Define the allowed MIME types for images
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

// Define the file size limit in bytes (3MB = 3 * 1024 * 1024 bytes)
const MAX_FILE_SIZE =  1024 * 1024; // 3MB

// Create a Zod schema for file validation
export const imageSchema = z.custom<File>((file) => {
  // Validate MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return false; // Invalid file type
  }

  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    return false; // File size exceeds the limit
  }

  return true; // Valid file
}, {
  message: "Invalid file type or size. Only JPEG, PNG, GIF images under 1MB are allowed."
});