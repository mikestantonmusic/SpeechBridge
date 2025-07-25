import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { History, Play, Download, Trash2 } from "lucide-react";
import type { Translation } from "@shared/schema";

interface HistoryCardProps {
  onLoadTranslation?: (translation: Translation) => void;
}

export function HistoryCard({ onLoadTranslation }: HistoryCardProps) {
  const { data: translations = [], isLoading } = useQuery<Translation[]>({
    queryKey: ["/api/translations"],
  });

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes} mins ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  const handlePlayAudio = (audioUrl: string | null) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  const handleDownloadAudio = async (audioUrl: string | null, englishText: string) => {
    if (!audioUrl) return;
    
    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${englishText.slice(0, 30).replace(/[^a-zA-Z0-9]/g, "_")}.mp3`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  if (isLoading) {
    return (
      <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
        <CardContent className="p-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-4 w-1/3"></div>
            <div className="space-y-3">
              <div className="h-16 bg-gray-100 rounded-lg"></div>
              <div className="h-16 bg-gray-100 rounded-lg"></div>
              <div className="h-16 bg-gray-100 rounded-lg"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <History className="w-5 h-5 text-primary mr-2" />
            Recent Translations
          </h3>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        </div>
        
        {translations.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <History className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No translations yet</p>
            <p className="text-sm">Your translation history will appear here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {translations.map((translation) => (
              <div
                key={translation.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => onLoadTranslation?.(translation)}
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900 line-clamp-1">
                    {translation.englishText}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {translation.chineseText}
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {formatTimeAgo(new Date(translation.createdAt))}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayAudio(translation.audioFileUrl);
                    }}
                    className="text-primary hover:text-blue-600 transition-colors p-1"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadAudio(translation.audioFileUrl, translation.englishText);
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
