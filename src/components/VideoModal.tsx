import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoUrl: string;
}

const VideoModal = ({ open, onOpenChange, videoUrl }: VideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 bg-primary border-none overflow-hidden">
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full aspect-video"
        />
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
