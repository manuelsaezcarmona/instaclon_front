// eslint-disable-next-line consistent-return
export const uploadFileToCloud = async (file) => {
  const url = 'https://api.cloudinary.com/v1_1/manulk/image/upload';
  const uploadPreset = 'photoclonapp';

  const formData = new FormData();

  formData.append('upload_preset', uploadPreset);
  formData.append('file', file);

  try {
    const resp = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if (resp.ok) {
      const cloudinaryResult = await resp.json();
      if (cloudinaryResult.asset_id) {
        return cloudinaryResult.secure_url;
      }
      return cloudinaryResult.error.message;
    }
  } catch (error) {
    return error;
  }
};
