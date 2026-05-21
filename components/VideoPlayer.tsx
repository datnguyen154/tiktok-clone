"use client";

import { useRef, useState, useEffect } from "react";
import { VideoData } from "@/lib/mockData";
import { Heart, MessageCircle, Share2, Play } from "lucide-react";

interface VideoPlayerProps {
    data: VideoData;
}

export default function VideoPlayer({ data }: VideoPlayerProps) {
    // Ref cho thẻ video để gọi hàm play/pause
    const videoRef = useRef<HTMLVideoElement>(null);
    // Thêm Ref cho thẻ div bọc ngoài cùng để Observer theo dõi
    const containerRef = useRef<HTMLDivElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(data.likesCount);

    // --- LOGIC AUTO-PLAY VỚI INTERSECTION OBSERVER ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // entry.isIntersecting trả về true nếu thẻ div lọt vào màn hình
                    if (entry.isIntersecting) {
                        videoRef.current?.play();
                        setIsPlaying(true);
                    } else {
                        videoRef.current?.pause();
                        setIsPlaying(false);
                    }
                });
            },
            {
                // threshold: 0.6 nghĩa là khi 60% component xuất hiện thì mới trigger
                threshold: 0.6,
            },
        );

        // Bắt đầu quan sát containerRef
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Cleanup function: Hủy quan sát khi component bị unmount (rất quan trọng để không lỗi bộ nhớ)
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []); // Cặp ngoặc vuông rỗng [] đảm bảo useEffect chỉ chạy 1 lần khi component mount

    const onVideoPress = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const onLikePress = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isLiked) {
            setLikes((prev) => prev - 1);
        } else {
            setLikes((prev) => prev + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[100dvh] snap-start bg-black flex justify-center items-center"
        >
            <video
                ref={videoRef}
                src={data.videoUrl}
                className="w-full h-full object-cover cursor-pointer"
                loop
                muted // Bắt buộc phải có muted thì trình duyệt mới cho phép auto-play
                playsInline
                onClick={onVideoPress}
            />

            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Play
                        size={80}
                        fill="white"
                        className="text-white opacity-70"
                    />
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex justify-between items-end pb-24 md:pb-12 pointer-events-none">
                <div className="flex-1 text-white pr-4 pointer-events-auto">
                    <h3 className="font-bold text-lg">@{data.authorName}</h3>
                    <p className="text-sm mt-2 line-clamp-2">
                        {data.description}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 pointer-events-auto">
                    <button
                        onClick={onLikePress}
                        className="flex flex-col items-center group"
                    >
                        <div className="p-3 bg-gray-800/60 rounded-full transition">
                            <Heart
                                size={28}
                                className={
                                    isLiked
                                        ? "text-red-500 fill-red-500"
                                        : "text-white"
                                }
                            />
                        </div>
                        <span className="text-xs mt-1 text-white font-medium">
                            {likes}
                        </span>
                    </button>

                    <button className="flex flex-col items-center group">
                        <div className="p-3 bg-gray-800/60 rounded-full hover:bg-gray-700 transition">
                            <MessageCircle size={28} className="text-white" />
                        </div>
                        <span className="text-xs mt-1 text-white font-medium">
                            12
                        </span>
                    </button>

                    <button className="flex flex-col items-center group">
                        <div className="p-3 bg-gray-800/60 rounded-full hover:bg-gray-700 transition">
                            <Share2 size={28} className="text-white" />
                        </div>
                        <span className="text-xs mt-1 text-white font-medium">
                            Share
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
