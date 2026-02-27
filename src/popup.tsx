import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import QRCode from "qrcode";

export default function QRCodeComponent() {
  const [inputValue, setInputValue] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = () => {
    QRCode.toDataURL(inputValue)
      .then((url: string) => {
        setImageUrl(url);
      })
      .catch((err: string) => {
        console.error(err)
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-semibold text-center">quiQR</h1>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter text"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <Button
            onClick={handleSubmit}
            className="w-full rounded-xl text-base"
          >
            Create QR Code
          </Button>

          {imageUrl && (
            <motion.img
              key={imageUrl}
              src={imageUrl}
              alt="Result visual"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-56 object-cover rounded-2xl shadow-md"
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
