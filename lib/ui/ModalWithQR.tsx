import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Dialog, DialogContent, DialogHeader } from "./Dialog";
import { X } from "lucide-react";

interface ModalWithQRProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const ModalWithQR: React.FC<ModalWithQRProps> = ({ isOpen, onClose }) => {
  // Get the root URL of the current site
  const rootUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center p-6">
          <QRCodeSVG value={rootUrl} size={200} />
          <p className="mt-4 text-sm text-muted-foreground text-center text-gray-800">
            Scan this QR code to visit {rootUrl}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalWithQR;
