import cloudinary from "cloudinary";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    cloudinary.config({
      cloud_name: "dd2fpuwag",
      api_key: "874114542148822",
      api_secret: "VAr1DycSM5bVOKI41T7i6yhrRUI",
    });
    const { file } = req.body;
    const uploadedResponse = await cloudinary.uploader.upload(file, {
      upload_preset: "upload",
    });
    return res.status(200).json({ url: uploadedResponse.secure_url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
