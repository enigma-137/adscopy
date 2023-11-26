// // pages/api/prompt/[text].js

// export default async function handler(req, res) {
//   const { text } = req.query;

//   const LANGUAGE_MODEL_API_KEY = process.env.LANGUAGE_MODEL_API_KEY;
//   const LANGUAGE_MODEL_URL = `https://generativelanguage.googleapis.com/v1beta1/models/chat-bison-001:generateMessage?key=${LANGUAGE_MODEL_API_KEY}`;

//   const payload = {
//     prompt: { "messages": [{ "content": text }]},
//     temperature: 0.1,
//     candidate_count: 1,
//   };

//   try {
//     const response = await fetch(LANGUAGE_MODEL_URL, {
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(payload),
//       method: "POST",
//     });

//     const data = await response.json();
//     console.log(data);
    
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
