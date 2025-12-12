"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

interface FileType extends File {
  preview?: string | null;
  formattedSize?: string;
}

interface FileUploaderProps {
  onFileUpload?: (files: FileType[]) => void;
  showPreview?: boolean;
  title?: string;
  maxFiles?: number;
}

export default function FileUploader({
  onFileUpload,
  showPreview = true,
  title = "Drop Image or Document here or click to upload.",
  maxFiles = 10,
}: FileUploaderProps) {
  const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);

  const formatBytes = (bytes: number, decimals: number = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleAcceptedFiles = useCallback(
    (files: File[]) => {
      const newFiles: FileType[] = files.map((file: FileType) => ({
        ...file,
        preview: file.type.startsWith("image") ? URL.createObjectURL(file) : null,
        formattedSize: formatBytes(file.size),
      }));

      const merged = [...selectedFiles, ...newFiles].slice(0, maxFiles);

      setSelectedFiles(merged);

      if (onFileUpload) onFileUpload(merged);
    },
    [selectedFiles, maxFiles, onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleAcceptedFiles,
  });

  const removeFile = (index: number) => {
    const updated = [...selectedFiles];
    updated.splice(index, 1);
    setSelectedFiles(updated);
    if (onFileUpload) onFileUpload(updated);
  };

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <i className="text-4xl text-gray-500">☁️</i>
        <h4 className="mt-2 text-gray-700 font-semibold">{title}</h4>
        <p className="text-xs text-gray-400">Max {maxFiles} files</p>
      </div>

      {/* Previews */}
      {showPreview && selectedFiles.length > 0 && (
        <div className="space-y-3">
          {selectedFiles.map((file, index) => (
            
            <Card
              key={index}
              className="p-3 flex items-center justify-between shadow-sm border"
            >
              <div className="flex justify-between items-center gap-4">
                {/* Thumbnail */}
                {file.preview ? (
                  <Image
                    src={file.preview}
                    alt={file.name}
                    width={56}
                    height={56}
                    className="object-cover rounded-md"
                  />
                ) : (
                  <div className="w-14 h-14 bg-gray-200 flex items-center justify-center rounded-md text-gray-600 font-semibold">
                    {file.type.split("/")[1]?.substring(0, 4).toUpperCase()}
                  </div>
                )}

                {/* File Details */}
                <div>
                  <p className="text-sm font-medium text-gray-800">{file.name}</p>
                  <p className="text-xs text-gray-500">{file.formattedSize}</p>
                </div>
              </div>

              {/* Remove Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
              >
                <X className="h-5 w-5 text-red-500" />
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
