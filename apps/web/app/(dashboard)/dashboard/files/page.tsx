"use client";

import { useEffect, useState } from "react";
import { FileServices } from "@/services/fileServices";
import { PageHeader } from "@/components/page-header";
import { FormDialog } from "@/components/dialog/form-dialog";
import { EntityList } from "@/components/entity/entity-list";
import { EntityCard } from "@/components/card/entity-card";
import { StatsCards } from "@/components/card/stats-cards";
import {
  Eye,
  Download,
  Trash2,
  Upload,
  FileText,
  Image,
  HardDrive,
  Database,
  File,
} from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { FileUploadForm, formatFileSize } from "./components/fileForm";

export default function FilesPage() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const token = useAuthStore.getState().token;

  useEffect(() => {
    const getFiles = async () => {
      try {
        const data = await FileServices.getAllFiles(token as string);
        setFiles(data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    getFiles();
  }, []);

  const handleUploadFile = async (file: File) => {
    setLoading(true);
    try {
      const result = await FileServices.uploadFile(file, token as string);
      if (result.success) {
        setFiles([...files, result.data]);
        setDialogOpen(false);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewFile = (file: any) => {
    // TODO: Implement view functionality
    console.log("View file:", file);
  };

  const handleDownloadFile = (file: any) => {
    try {
      const link = document.createElement("a");
      link.href = file.url || file.fileUrl;
      link.download = file.filename || file.name;
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleDeleteFile = (file: any) => {
    // TODO: Implement delete functionality
    console.log("Delete file:", file);
  };

  const getFileIcon = (filename: string) => {
    const ext = filename.split(".").pop()?.toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "svg"].includes(ext || ""))
      return <Image className="h-4 w-4" />;
    if (["pdf", "doc", "docx", "txt"].includes(ext || ""))
      return <FileText className="h-4 w-4" />;
    return <File className="h-4 w-4" />;
  };

  const renderFileCard = (file: any, index: number) => (
    <EntityCard
      key={file.id || index}
      title={file.filename}
      description={file.description || "No description"}
      metadata={[
        { label: "Size", value: formatFileSize(file.size || 0) },
        { label: "Type", value: file.mimeType || "Unknown" },
        {
          label: "Uploaded",
          value: new Date(file.createdAt).toLocaleDateString(),
        },
      ]}
      actions={[
        {
          icon: getFileIcon(file.filename),
          label: "View",
          onClick: () => handleViewFile(file),
        },
        {
          icon: <Download className="h-4 w-4" />,
          label: "Download",
          onClick: () => handleDownloadFile(file),
        },
        {
          icon: <Trash2 className="h-4 w-4" />,
          label: "Delete",
          onClick: () => handleDeleteFile(file),
          variant: "destructive" as const,
        },
      ]}
    />
  );

  const stats = [
    {
      title: "Total Files",
      value: files.length,
      description: "Files uploaded",
      icon: HardDrive,
      trend: { value: 5, label: "from last week", positive: true },
    },
    {
      title: "Total Size",
      value: `${(files.reduce((acc, file) => acc + (file.size || 0), 0) / 1024 / 1024).toFixed(2)} MB`,
      description: "Storage used",
      icon: Database,
      trend: { value: 12, label: "from last month", positive: true },
    },
    {
      title: "Images",
      value: files.filter((f) => f.mimeType?.startsWith("image/")).length,
      description: "Image files",
      icon: Image,
      trend: { value: 3, label: "from last week", positive: true },
    },
    {
      title: "Documents",
      value: files.filter(
        (f) => f.mimeType?.includes("pdf") || f.mimeType?.includes("document"),
      ).length,
      description: "Document files",
      icon: FileText,
      trend: { value: 1, label: "from last week", positive: false },
    },
  ];

  return (
    <div className="space-y-6">
      <StatsCards stats={stats} />

      <PageHeader
        title="File Management"
        description="Upload and manage your contract files"
        action={{
          label: "Upload File",
          icon: <Upload className="h-4 w-4" />,
          onClick: () => setDialogOpen(true),
        }}
      />

      <EntityList
        title="Files"
        description={`${files.length} file(s) uploaded`}
        items={files}
        renderItem={renderFileCard}
        emptyMessage="No files uploaded yet"
        emptyAction={{
          label: "Upload your first file",
          onClick: () => setDialogOpen(true),
        }}
      />

      <FormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="Upload New File"
        description="Select and upload a file for your contracts"
        maxWidth="max-w-2xl overflow-y-auto"
      >
        <FileUploadForm onSubmit={handleUploadFile} loading={loading} />
      </FormDialog>
    </div>
  );
}
