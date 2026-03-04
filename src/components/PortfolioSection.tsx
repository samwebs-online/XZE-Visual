import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

const videos = [
  { id: 1, title: "SaaS Onboarding Animation", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", url: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" },
  { id: 2, title: "E-commerce Product Launch", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", url: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" },
  { id: 3, title: "App Install Campaign", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", url: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" },
  { id: 4, title: "Brand Awareness Animation", thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&h=400&fit=crop", url: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" },
];

const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected Work</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 tracking-tight">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video.url)}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-muted"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play size={20} className="text-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
                <p className="text-sm font-medium text-background">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <VideoModal
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
        videoUrl={selectedVideo || ""}
      />
    </section>
  );
};

export default PortfolioSection;
