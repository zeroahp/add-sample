const buildFormData = (formData, data, parentKey) => {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
}

const objectToFormData = (data) => {
  const formData = new FormData();
  buildFormData(formData, data);

  if (data.thumbnail) {
    if (data.thumbnail instanceof FileList) {
      // Multiple thumbnails (FileList)
      for (const imageFile of data.thumbnail) {
        console.log("imageFile:", imageFile)
        formData.append('thumbnail', imageFile);
      }
    } else if (data.thumbnail instanceof File) {
      // Single thumbnail (File object)
      formData.append('thumbnail', data.thumbnail);
    }
  }

  return formData;
}

export default objectToFormData;
