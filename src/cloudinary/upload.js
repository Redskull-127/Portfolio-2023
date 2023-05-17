const UploadCloudinary = async ({ file }) => await fetch(
  "http://localhost:3000/api/cloudinary/upload",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ file }),
  }
).then(async (res) => {
  console.log(await res.json());
  return await res.json();
});

export default UploadCloudinary;