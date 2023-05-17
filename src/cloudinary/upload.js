const UploadCloudinary = async ({ file }) => await fetch(
  `${process.env.NEXT_PUBLIC_HOMEPAGE}/api/cloudinary/upload`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ file: file }),
  }
).then(async (res) => {
  console.log(await res.json());
  return await res.json();
});

export default UploadCloudinary;