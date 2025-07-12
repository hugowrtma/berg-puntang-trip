// components/ImageUploader.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    try {
      // 1. Request presigned upload URL dari UploadThing
      const res = await axios.post('https://uploadthing.com/api/uploadFiles', {
        files: [
          {
            name: file.name,
            type: file.type,
          },
        ],
      }, {
        headers: {
          'Authorization': `Bearer YOUR_UPLOADTHING_API_KEY`,
          'Content-Type': 'application/json',
        },
      });

      const { key, url } = res.data[0];

      // 2. Upload file ke UploadThing
      await axios.put(url, file, {
        headers: {
          'Content-Type': file.type,
        },
      });

      // 3. Dapatkan URL file
      const finalUrl = `https://utfs.io/f/${key}`;
      onUploadComplete(finalUrl);
    } catch (err) {
      console.error('UploadThing error:', err);
      alert('Upload gagal!');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="bg-leaf text-cream px-4 py-1 rounded mt-2"
      >
        {uploading ? 'Mengupload...' : 'Upload Foto'}
      </button>
    </div>
  );
};

export default ImageUploader;
