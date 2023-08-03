import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

const BulkUploadComponent = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    try {
      setUploading(true);
      for (const file of files) {
        const filename = file.name;
        await Storage.put(filename, file);
      }
      alert('Files uploaded successfully!');
      setFiles([]);
    } catch (error) {
      console.error('Error uploading files', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Bulk File Upload</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading || files.length === 0}>
        {uploading ? 'Uploading...' : 'Upload Files'}
      </button>
    </div>
  );
};

export default BulkUploadComponent;
