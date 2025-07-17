import React, { useState } from 'react';

const CLOUD_NAME = 'dyhx1f7fn'; // Ganti sesuai Cloudinary kamu
const UPLOAD_PRESET = 'unsigned_preset'; // Pastikan sesuai preset Cloudinary

const ImageUploader = ({ onUploaded }) => {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setUploaded(false);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.secure_url) {
        onUploaded(data.secure_url);
        setUploaded(true);
      } else {
        console.error('Upload gagal:', data);
        alert('Upload gagal');
      }
    } catch (err) {
      console.error(err);
      alert('Upload error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-3">
      <label className="block font-semibold mb-1">Foto (opsional)</label>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <input type="file" accept="image/*" onChange={handleUpload} />
        {uploading && <span className="text-sm text-gray-600">Uploading...</span>}
        {!uploading && uploaded && <span className="text-sm text-green-600">Done!</span>}
      </div>
    </div>
  );
};

export default ImageUploader;
