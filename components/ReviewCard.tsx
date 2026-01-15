import React from 'react';
import { Review } from '../types';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
  themeColor: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, themeColor }) => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between h-full hover:border-zinc-700 transition-colors duration-300">
      <div>
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={16} fill={themeColor} stroke={themeColor} />
          ))}
        </div>
        <p className="text-zinc-300 leading-relaxed mb-6 italic">
          "{review.text}"
        </p>
      </div>
      <div>
        <p className="font-bold text-white">{review.author}</p>
        <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">
          {review.location}
          {review.role && <span className="block text-zinc-400 normal-case mt-1">{review.role}</span>}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;