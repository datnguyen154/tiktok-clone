export type VideoData = {
    id: string;
    videoUrl: string;
    authorName: string;
    description: string;
    likesCount: number;
};

export const mockVideos: VideoData[] = [
    {
        id: "1",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        authorName: "NguyenXuanDatj",
        description: "Video test số 1 - Big Buck Bunny 🐰",
        likesCount: 120,
    },
    {
        id: "2",
        videoUrl:
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
        authorName: "Frontend.Dev",
        description: "Video test số 2 - Chúc mọi người cuối tuần vui vẻ! 🚀",
        likesCount: 85,
    },
    {
        id: "3",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
        authorName: "Nextjs.Lover",
        description: "Video test số 3 - Trailer phim ngắn Sintel 🎬",
        likesCount: 256,
    },
];
