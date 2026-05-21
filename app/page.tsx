import VideoPlayer from "@/components/VideoPlayer";
import { mockVideos } from "@/lib/mockData";

export default function Home() {
    return (
        /* 1. h-[100dvh]: Chiều cao full màn hình
      2. overflow-y-scroll: Cho phép cuộn dọc
      3. snap-y snap-mandatory: Ép buộc scroll phải khựng lại đúng vị trí (snap)
      4. md:w-[450px]: Trên PC, giới hạn chiều rộng để tạo tỷ lệ dọc giống điện thoại
    */
        <div className="w-full md:w-[450px] h-[100dvh] mx-auto bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide relative">
            {mockVideos.map((video) => (
                <VideoPlayer key={video.id} data={video} />
            ))}
        </div>
    );
}
