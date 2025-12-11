import { Heart, MapPin } from 'lucide-react';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { photos } from '../data/photos';
import './PhotoGallery.css';

export function PhotoGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedPhotos, setLikedPhotos] = useState<Set<string | number>>(new Set());
    const [showHeartAnimation, setShowHeartAnimation] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentIndex(swiper.realIndex);
    };

    const toggleLike = (photoId: string | number) => {
        setLikedPhotos((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(photoId)) {
                newSet.delete(photoId);
            } else {
                newSet.add(photoId);
                setShowHeartAnimation(true);
<<<<<<< HEAD
                setTimeout(() => setShowHeartAnimation(false), 800);
=======
                setTimeout(() => setShowHeartAnimation(false), 500);
>>>>>>> 1872e5dc7a063961827b6543657ecfd55e14125d
            }
            return newSet;
        });
    };

    const handleDoubleClick = (photoId: string | number) => {
        if (!likedPhotos.has(photoId)) {
            toggleLike(photoId);
        }
    };

    const currentPhoto = photos[currentIndex];
    const isLiked = currentPhoto ? likedPhotos.has(currentPhoto.id) : false;

    return (
        <div className="photo-gallery">
            <div className="instagram-post">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
<<<<<<< HEAD
                        delay: 10000,
=======
                        delay: 5000,
>>>>>>> 1872e5dc7a063961827b6543657ecfd55e14125d
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    onSlideChange={handleSlideChange}
                    className="photo-swiper">
                    {photos.map((photo) => (
                        <SwiperSlide key={photo.id}>
                            <div className="photo-slide" onDoubleClick={() => handleDoubleClick(photo.id)}>
                                <div className="photo-container">
                                    <img src={photo.url} alt="" />
                                    {showHeartAnimation && photo.id === currentPhoto.id && (
                                        <div className="heart-animation">
                                            <Heart size={80} fill="white" color="white" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="instagram-actions">
                    <button className={`like-btn ${isLiked ? 'liked' : ''}`} onClick={() => toggleLike(currentPhoto.id)}>
                        <Heart size={26} fill={isLiked ? '#ff4458' : 'none'} color={isLiked ? '#ff4458' : 'white'} />
                    </button>
                </div>

                <div className="post-info">
                    {likedPhotos.size > 0 && (
                        <p className="likes-count">
                            {likedPhotos.size} {likedPhotos.size === 1 ? 'curtida' : 'curtidas'}
                        </p>
                    )}
                    {currentPhoto?.comment && <p className="post-comment">{currentPhoto?.comment}</p>}
                    <p className="love-quote">{currentPhoto?.caption}</p>
                    <div className="post-meta">
                        {currentPhoto?.location && (
                            <span className="post-location">
                                <MapPin size={12} />
                                {currentPhoto.location}
                            </span>
                        )}
                        {currentPhoto?.date && <span className="post-date">{currentPhoto.date}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
