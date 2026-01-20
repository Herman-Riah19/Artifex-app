import z from "zod";

/**
 * Organization type enum
 */
export const OrganizationTypeEnum = z.enum([
  "startup",
  "enterprise",
  "nonprofit",
  "government",
]);

/**
 * Organization validation schema
 */
export const OrganizationSchema = z.object({
  name: z
    .string()
    .min(1, "Le nom est requis")
    .max(255, "Le nom ne doit pas dépasser 255 caractères"),

  description: z
    .string()
    .min(1, "La description est requise")
    .max(1000, "La description ne doit pas dépasser 1000 caractères"),

  type: OrganizationTypeEnum,

  logo: z
    .string()
    .url("Le logo doit être une URL valide")
    .nullable()
    .optional(),
  slug: z
    .string()
    .min(1, "Le slug est requis")
    .max(10, "Le slug ne doit pas dépasser 100 caractères"),
});

/**
 * Member validation schema
 */
export const MemberSchema = z.object({
  userId: z
    .string()
    .min(1, "L'utilisateur est requis"),

  role: z.enum(["SIGNER", "ADMIN", "CLIENT", "VIEWER", "EDITOR"]),
});

export type OrganizationFormData = z.infer<typeof OrganizationSchema>;
export type MemberFormData = z.infer<typeof MemberSchema>;
