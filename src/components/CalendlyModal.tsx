import { useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CALENDLY_URL = "https://calendly.com/your-link";

const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[700px] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Book a Call</DialogTitle>
        <div
          className="calendly-inline-widget w-full h-full"
          data-url={CALENDLY_URL}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
