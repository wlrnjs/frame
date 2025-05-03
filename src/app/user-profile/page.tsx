"use client";

import React, { useState } from "react";
import Image from "next/image";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="w-full min-h-screen pt-[120px] pb-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-neutral-900 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image
              src={"/BlackPhoto.JPG"}
              alt="Profile"
              width={32}
              height={32}
              className="w-32 h-32 rounded-full object-cover border-4 border-neutral-700"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-white">nickname</h1>
              <p className="text-neutral-400">tjwlrnjs7336@naver.com</p>
              <p className="text-sm text-neutral-500">Joined: 2025.05.04</p>
              <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full">
                  Landscape
                </span>
                <span className="inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full">
                  Portrait
                </span>
                <span className="inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full">
                  Street
                </span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg font-semibold text-white">Activity Score</p>
              <p className="text-2xl text-white">1200</p>
            </div>
          </div>

          {/* Camera Gear & Social Links */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Camera Gear</h3>
              <p className="text-neutral-400">Camera: FujiFilm</p>
              <p className="text-neutral-400">Lens: 23.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <a
                href="https://instagram.com/mockuser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://mockuser.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline block"
              >
                Website
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-neutral-900 rounded-lg shadow-lg">
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 text-center font-semibold ${
                activeTab === "posts"
                  ? "border-b-2 border-white text-white"
                  : "text-neutral-400"
              }`}
              onClick={() => setActiveTab("posts")}
            >
              Posts
            </button>
            <button
              className={`flex-1 py-3 text-center font-semibold ${
                activeTab === "liked"
                  ? "border-b-2 border-white text-white"
                  : "text-neutral-400"
              }`}
              onClick={() => setActiveTab("liked")}
            >
              Liked Images
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "posts" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={"/BlackPhoto.JPG"}
                    alt="Sunset in the Mountains"
                    width={120}
                    height={48}
                    className="object-cover"
                  />
                  <p className="p-2 text-center text-black">
                    Sunset in the Mountains
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={"/BlackPhoto.JPG"}
                    alt="City at Night"
                    width={120}
                    height={48}
                    className="object-cover"
                  />
                  <p className="p-2 text-center text-black">City at Night</p>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={"/BlackPhoto.JPG"}
                    alt="Portrait in Nature"
                    width={120}
                    height={48}
                    className="object-cover"
                  />
                  <p className="p-2 text-center text-black">
                    Portrait in Nature
                  </p>
                </div>
              </div>
            )}
            {activeTab === "liked" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={"/BlackPhoto.JPG"}
                    alt="Ocean Breeze"
                    width={120}
                    height={48}
                    className="object-cover"
                  />
                  <p className="p-2 text-center text-black">Ocean Breeze</p>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={"/BlackPhoto.JPG"}
                    alt="Golden Hour"
                    width={120}
                    height={48}
                    className="object-cover"
                  />
                  <p className="p-2 text-center text-black">Golden Hour</p>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={"/BlackPhoto.JPG"}
                    alt="Foggy Forest"
                    width={120}
                    height={48}
                    className="object-cover"
                  />
                  <p className="p-2 text-center text-black">Foggy Forest</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
