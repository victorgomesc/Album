import { NextResponse } from "next/server";
import * as multiparty from "multiparty";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false, // Desabilita o body parser do Next.js
  },
};

export async function POST(req: Request) {
  try {
    // Cria o diretório de uploads, se não existir
    await fs.mkdir("./public/uploads", { recursive: true });

    // Lê o corpo da requisição como um Blob
    const body = await req.blob();
    const buffer = await body.arrayBuffer();
    
    // Inicializa o parser do multiparty
    const form = new multiparty.Form({
      uploadDir: "./public/uploads", // Diretório de upload
      keepExtensions: true,          // Mantém as extensões dos arquivos
    });

    // Faz o parsing dos dados de formulário a partir do buffer
    const parsedData = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
      form.parse(buffer, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    // Verifica se o arquivo foi enviado corretamente
    const uploadedFile = Array.isArray(parsedData.files.image)
      ? parsedData.files.image[0]
      : parsedData.files.image;

    if (!uploadedFile) {
      return NextResponse.json({ message: "Nenhum arquivo enviado." }, { status: 400 });
    }

    return NextResponse.json({
      message: "Upload concluído!",
      path: `/uploads/${uploadedFile.path}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erro ao processar o upload." }, { status: 500 });
  }
}
