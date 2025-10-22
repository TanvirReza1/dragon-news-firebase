import React from "react";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const NewsCard = ({ news }) => {
  const { total_view, author, thumbnail_url, details, tags, others } = news;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h3 className="font-semibold text-base">{author.name}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <MdDateRange className="text-gray-400" />
              {new Date(author.published_date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <button className="btn btn-sm btn-ghost rounded-full">
          <FaShareAlt className="text-gray-500 text-lg hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">
          Breakthrough in Number Theory
          {others?.is_trending && (
            <div className="badge badge-secondary text-xs">Trending</div>
          )}
          {others?.is_today_pick && (
            <div className="badge badge-accent text-xs">Today’s Pick</div>
          )}
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
          {details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs font-medium hover:badge-primary cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer border-t px-4 py-3 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaRegEye className="text-gray-500" />
          <span>{total_view.toLocaleString()} views</span>
        </div>
        <button className="btn btn-sm btn-outline btn-primary rounded-full px-4">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
