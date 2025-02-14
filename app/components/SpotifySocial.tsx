import React from 'react';
import { Home, Search, Library, Users, PlayCircle, Share2 } from 'lucide-react';
import Image from 'next/image';

const SpotifySocial = () => {
  const friends = [
    {
      name: 'Sarah K.',
      matchPercentage: 87,
      currentTrack: {
        name: 'Midnight City',
        artist: 'M83',
        albumArt: '/api/placeholder/64/64'
      },
      recentTracks: [
        { name: 'Dreams', artist: 'Fleetwood Mac', albumArt: '/api/placeholder/48/48' },
        { name: 'Blinding Lights', artist: 'The Weeknd', albumArt: '/api/placeholder/48/48' }
      ],
      isOnline: true
    },
    {
      name: 'Alex M.',
      matchPercentage: 92,
      currentTrack: {
        name: 'Starboy',
        artist: 'The Weeknd',
        albumArt: '/api/placeholder/64/64'
      },
      recentTracks: [
        { name: 'Take on Me', artist: 'a-ha', albumArt: '/api/placeholder/48/48' },
        { name: 'Under Pressure', artist: 'Queen, David Bowie', albumArt: '/api/placeholder/48/48' }
      ],
      isOnline: true
    }
  ];

  return (
    <div className="bg-black w-full max-w-md mx-auto h-screen relative overflow-hidden">
      {/* Status Bar Area */}
      <div className="h-12 bg-zinc-900" />
      
      {/* Main Content */}
      <div className="h-full pb-24 overflow-y-auto">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-6 text-white">Friend Activity</h1>
          
          {/* Friends List */}
          <div className="space-y-4">
            {friends.map((friend, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-lg text-white">{friend.name}</h2>
                    <div className="text-green-500 text-sm">
                      Music Match: {friend.matchPercentage}%
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-green-600 rounded-full bg-green-500">
                      <PlayCircle size={20} className="text-white" />
                    </button>
                    <button className="p-2 hover:bg-zinc-700 rounded-full bg-zinc-800">
                      <Share2 size={20} className="text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Currently Playing */}
                <div className="mb-4">
                  <div className="text-sm text-zinc-400 mb-2">Currently Playing:</div>
                  <div className="flex items-center space-x-3">
                    <div className="relative w-16 h-16">
                      <Image 
                        src={friend.currentTrack.albumArt}
                        alt="Album art"
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-white">{friend.currentTrack.name}</div>
                      <div className="text-sm text-zinc-400">{friend.currentTrack.artist}</div>
                    </div>
                  </div>
                </div>
                
                {/* Recent Tracks */}
                <div>
                  <div className="text-sm text-zinc-400 mb-2">Recent Tracks:</div>
                  <div className="space-y-2">
                    {friend.recentTracks.map((track, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="relative w-12 h-12">
                          <Image 
                            src={track.albumArt}
                            alt="Album art"
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm text-zinc-300">{track.name}</div>
                          <div className="text-xs text-zinc-400">{track.artist}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <button className="text-sm bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full text-white">
                    Listen In
                  </button>
                  <button className="text-sm bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full text-white">
                    Start Jam Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full bg-zinc-900 border-t border-zinc-800">
        <div className="flex justify-around py-4">
          <button className="flex flex-col items-center text-zinc-400 hover:text-white">
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-zinc-400 hover:text-white">
            <Search size={24} />
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center text-zinc-400 hover:text-white">
            <Library size={24} />
            <span className="text-xs mt-1">Library</span>
          </button>
          <button className="flex flex-col items-center text-white">
            <Users size={24} />
            <span className="text-xs mt-1">Social</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotifySocial;