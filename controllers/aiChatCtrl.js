const { openai } = require("../server");
const Files = require("../models/fileModel");
const pdf = require("pdf-parse");

// 3. Import Tiktoken for token counting
var Tiktoken = require("@dqbd/tiktoken/lite").Tiktoken;
var load = require("@dqbd/tiktoken/load").load;
var registry = require("@dqbd/tiktoken/registry.json");
var models = require("@dqbd/tiktoken/model_to_encoding.json");

// 3. Import dotenv for loading environment variables and fs for file system operations
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();

const aiChatCtrl = {
  aiChat: async (req, res) => {
    try {
      const { text, activeChatId } = req.body;
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant and a friendly wise friend.",
          },
          { role: "user", content: `${text}` },
        ],
        model: "gpt-3.5-turbo",
      });
      return res
        .status(200)
        .json({ completion: completion.choices[0].message.content });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  aiChatPdf: async (req, res) => {
    try {
      const dataBuffer = await fs.readFileSync(
        `public/documents/${req.user._id}/${req.params.id}`
      );
      const text = await pdf(dataBuffer).then((data) => data.text);
      const model = await load(registry[models["gpt-3.5-turbo"]]);
      const encoder = new Tiktoken(
        model.bpe_ranks,
        model.special_tokens,
        model.pat_str
      );
      const tokens = encoder.encode(JSON.stringify(text));
      const tokenCount = tokens.length;
      if (tokenCount > 16385) {
        return res.status(400).json({
          msg: "Your pdf content is too large for this section.\nTo know more checkout pricing.",
        });
      }
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Summarize the main points of the passage/text/article in around 1000 to 2000 words then reply in the same language of the passage/text/article with bullet points format and \n newline after a point: ${text}`,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      return res
        .status(200)
        .json({ completion: completion.choices[0].message.content });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
    // // 4. Initialize the document loader with supported file formats
    // const loader = new DirectoryLoader(
    //   `../public/documents/${req.params.uid}/${req.params.id}`,
    //   {
    //     ".json": (path) => new JSONLoader(path),
    //     ".txt": (path) => new TextLoader(path),
    //     ".csv": (path) => new CSVLoader(path),
    //     ".pdf": (path) => new PDFLoader(path),
    //   }
    // );

    // // 5. Load documents from the specified directory
    // console.log("Loading docs...");
    // const docs = await loader.load();
    // console.log("Docs loaded.");

    // const VECTOR_STORE_PATH = "Documents.index";
    // const question = "Tell me about these docs";

    // // 6. Define a function to normalize the content of the documents
    // function normalizeDocuments(docs) {
    //   return docs.map((doc) => {
    //     if (typeof doc.pageContent === "string") {
    //       return doc.pageContent;
    //     } else if (Array.isArray(doc.pageContent)) {
    //       return doc.pageContent.join("\n");
    //     }
    //   });
    // }

    // const model = new OpenAI({});

    // let vectorStore;

    // // 13. Check if an existing vector store is available
    // console.log("Checking for existing vector store...");
    // if (fs.existsSync(VECTOR_STORE_PATH)) {
    //   // 14. Load the existing vector store
    //   console.log("Loading existing vector store...");
    //   vectorStore = await HNSWLib.load(
    //     VECTOR_STORE_PATH,
    //     new OpenAIEmbeddings()
    //   );
    //   console.log("Vector store loaded.");
    // } else {
    //   // 15. Create a new vector store if one does not exist
    //   console.log("Creating new vector store...");
    //   const textSplitter = new RecursiveCharacterTextSplitter({
    //     chunkSize: 1000,
    //   });
    //   const normalizedDocs = normalizeDocuments(docs);
    //   const splitDocs = await textSplitter.createDocuments(normalizedDocs);

    //   // 16. Generate the vector store from the documents
    //   vectorStore = await HNSWLib.fromDocuments(
    //     splitDocs,
    //     new OpenAIEmbeddings()
    //   );
    //   // 17. Save the vector store to the specified path
    //   await vectorStore.save(VECTOR_STORE_PATH);

    //   console.log("Vector store created.");
    // }

    // // 18. Create a retrieval chain using the language model and vector store
    // console.log("Creating retrieval chain...");
    // const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());

    // // 19. Query the retrieval chain with the specified question
    // console.log("Querying chain...");
    // const response = await chain.call({ query: question });
    // console.log({ response });
  },
  upload: async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const uploadFile = req.file;
    await Files.create({ owner_id: req.user._id, pdf: uploadFile.filename });
    return res.status(200);
    // let pdfs = uploadedFiles
    // const selectedFile = uploadedFiles.filter
    // const fileName = `${uploadedFile.originalname}`;
    // const filePath = `${uploadDirectory}/${fileName}`;
    // const fileData = fs.readFileSync(filePath, "utf8");
    // await processFileData(fileData);

    console.log(req.body.uploaded_id);
    console.log(req.file);
  },
  getFiles: (req, res) => {
    try {
      Files.find({ owner_id: req.user._id }).then((data) => {
        return res.status(200).json({ files: data });
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = aiChatCtrl;
