import { GenericForm } from "@/components/generic-form";
import { AttachmentSchema } from "@/validators/attachment-validator";
import { Upload } from "lucide-react";
import { useState } from "react";

export function formatFileSize(bytes: number) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

interface FileUploadFormProps {
  onSubmit: (file: File) => void;
  loading?: boolean;
}

export function FileUploadForm({ onSubmit, loading }: FileUploadFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Generate preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    }
  };

  const getFileCategory = (file: File): string => {
    if (file.type.startsWith("image/")) return "image";
    if (file.type.startsWith("video/")) return "video";
    if (file.type.startsWith("audio/")) return "audio";
    if (
      file.type.includes("pdf") ||
      file.type.includes("document") ||
      file.type.includes("text")
    )
      return "document";
    if (
      file.type.includes("zip") ||
      file.type.includes("rar") ||
      file.type.includes("tar")
    )
      return "archive";
    return "other";
  };

  const formFields = [
    {
      name: "filename",
      label: "Nom du fichier",
      placeholder: "Mon document",
    },
    {
      name: "mimeType",
      label: "Type MIME",
      placeholder: "image/png",
      description: "Format: type/subtype (ex: image/png, application/pdf)",
    },
    {
      name: "size",
      label: "Taille (bytes)",
      type: "number" as const,
      placeholder: "0",
    },
    {
      name: "contractId",
      label: "ID du contrat",
      placeholder: "Entrez l'UUID du contrat",
    },
  ];

  const handleFormSubmit = (data: any) => {
    if (selectedFile) {
      onSubmit(selectedFile);
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Cliquez pour uploader un fichier
              </span>
              <input
                id="file-upload"
                name="file"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt,.zip,.rar,.tar"
              />
            </label>
            <p className="mt-1 text-xs text-gray-500">
              PNG, JPG, PDF, DOC, TXT, ZIP jusqu'à 10MB
            </p>
          </div>
        </div>
      </div>

      {selectedFile && (
        <div className="space-y-4">
          {preview && (
            <div className="flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="max-h-32 max-w-32 object-contain rounded"
              />
            </div>
          )}
          <div className="text-center">
            <p className="text-sm text-gray-600">{selectedFile.name}</p>
            <p className="text-xs text-gray-500">
              {formatFileSize(selectedFile.size)}
            </p>
          </div>
        </div>
      )}

      <GenericForm
        schema={AttachmentSchema}
        fields={formFields}
        onSubmit={handleFormSubmit}
        submitLabel={loading ? "Upload..." : "Uploader le fichier"}
        loading={loading}
        defaultValues={{
          filename: selectedFile?.name.split(".")[0] || "",
          category: selectedFile ? getFileCategory(selectedFile) : "other",
        }}
      />
    </div>
  );
}