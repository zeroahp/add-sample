import React, { useState } from 'react';

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const UploadMultipleFile = ({ uploadedImages, setImageUrlRemove = () => {}, singleImageMode = false }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  // Initialize fileList from uploadedImages
  useState(() => {
    if (uploadedImages && uploadedImages.length > 0) {
      const initialFileList = uploadedImages.map((url, index) => ({
        uid: `existing-${index.toString()}`,
        name: url,
        status: 'done',
        url: url,
        uploaded: true,
      }));
      setFileList(initialFileList);
    }
  }, [uploadedImages]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    const newFileList = files.map((file) => ({
      uid: file.name,
      name: file.name,
      status: 'uploading',
      originFileObj: file,
      url: URL.createObjectURL(file),
    }));
    setFileList([...fileList, ...newFileList]);
  };

  const handleRemove = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
    setImageUrlRemove(file.url);
  };

  return (
    <>
      <div>
        <label>{singleImageMode ? 'Upload avatar' : 'Upload images (max 8 images):'}</label>
        <input
          type="file"
          multiple={!singleImageMode}
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      {fileList.map((file) => (
        <div key={file.uid}>
          <img src={file.url} alt={file.name} />
          <button onClick={() => handleRemove(file)}>Remove</button>
        </div>
      ))}
      {previewOpen && (
        <div>
          <h2>{previewTitle}</h2>
          <img alt="preview img" style={{ width: '100%' }} src={previewImage} />
          <button onClick={handleCancel}>Close Preview</button>
        </div>
      )}
    </>
  );
};

export default UploadMultipleFile;
