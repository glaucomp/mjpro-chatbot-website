import axios from "axios";
import React, { useEffect } from "react";

const ELEVENLABS_API_KEY =
  "sk_a883dc5b73fefbdf423b935034b9b114274230c25c190c7e";
//const VOICE_ID = '3rsWYcMUA2tSohcUFdEu'; // ENGLISH
//const VOICE_ID = 'zoKp0PmGjBtnQEHXzpdJ'; // CHINESE
const VOICE_ID = "DswtmHtPzq8X3yycrmVL"; // PRO
const VoiceMessage = ({ texto }) => {
  useEffect(() => {
    const gerarAudio = async () => {
      const response = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
        {
          text: texto,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
          },
        },
        {
          headers: {
            "xi-api-key": ELEVENLABS_API_KEY,
            "Content-Type": "application/json",
          },
          responseType: "blob",
        }
      );

      const audioUrl = URL.createObjectURL(response.data);
      const audio = new Audio(audioUrl);
      audio.play();
    };

    if (texto) gerarAudio();
  }, [texto]);

  return <div></div>;
};

export default VoiceMessage;
