import axios from "axios";

const applicationUrl = "https://whatsapp-chatbot-service-dev-fa3ocuxbpq-el.a.run.app"

export async function getComplaints() {
  const response = await axios.get(`${applicationUrl}/get/complaints`);
  return response.data;
}

export async function loadImage(imageId){
  const response = await axios.get(`${applicationUrl}/image?id=${imageId}`)
  console.log(response.data);
  return response.data

}