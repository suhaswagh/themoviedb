// please place your GOOGLE_TRANSLATE_API_KEY in .env file
const gtKey = process.env.GOOGLE_TRANSLATE_API_KEY;
const apiLink = "https://translation.googleapis.com/language/translate/v2";

const Translate = async (text, targetLng) => {
  try {
    if (text && targetLng) {
      const link = `${apiLink}?key=${gtKey}&q=${encodeURI(
        text
      )}&source=&target=${targetLng}`;
      const res = await fetch(link);
      const json = await res.json();
      const newText = json?.data?.translations;
      return newText;
    }
  } catch (error) {
    console.error({ error });
  }
};

export default Translate;
