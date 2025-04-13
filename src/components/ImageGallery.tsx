
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  aspectRatio?: number;
  className?: string;
  hoverEffect?: boolean;
}

const ImageGallery = ({ 
  images, 
  columns = 3, 
  aspectRatio = 1, 
  className = "",
  hoverEffect = true
}: ImageGalleryProps) => {
  const columnsClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${columnsClass} gap-4 ${className}`}>
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`overflow-hidden rounded-lg shadow-md ${
            hoverEffect ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' : ''
          }`}
        >
          <AspectRatio ratio={aspectRatio} className="bg-muted">
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const imgElement = e.currentTarget as HTMLImageElement;
                imgElement.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
              }}
            />
          </AspectRatio>
          {image.caption && (
            <div className="p-3 bg-background">
              <p className="text-sm text-muted-foreground">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
