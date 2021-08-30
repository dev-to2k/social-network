/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
export const checkImage = (file) => {
  let err = '';
  if (!file) err = 'File does not exists.';

  if (file.size > 1024 * 1024) {
    // 1mb
    err = 'The largest file is 1mb';
  }

  if (file.type !== 'image/jpeg' && file.type !== 'image/png') err = 'The image is incorrect';

  return err;
};

export const imageUpload = async (images) => {
  const imgArr = [];
  for (const item of images) {
    const formData = new FormData();

    if (item.camera) {
      formData.append('file', item.camera);
    } else {
      formData.append('file', item);
    }

    formData.append('upload_preset', 'z7zord5p');
    formData.append('cloud_name', 'to2k');

    // eslint-disable-next-line no-await-in-loop
    const res = await fetch('https://api.cloudinary.com/v1_1/to2k/image/upload', {
      method: 'POST',
      body: formData,
    }).then((response) => response.json());

    imgArr.push({ public_id: res.public_id, url: res.secure_url });
  }
  return imgArr;
};
