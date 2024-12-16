import React, { useState, FormEvent } from "react";

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) {
      setMessage("Por favor, selecione uma imagem.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response) {
        setMessage("Imagem enviada com sucesso!");
      } else {
        setMessage("Erro ao enviar a imagem.");
      }
    } catch (error) {
      setMessage("Erro ao enviar a imagem.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Upload de Imagem</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Upload;
