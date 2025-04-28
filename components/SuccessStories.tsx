import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
  title: string;
  region: string;
  quote: string;
  personName: string;
  personRole: string;
  imageUrl: string;
  avatarUrl: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  region,
  quote,
  personName,
  personRole,
  imageUrl,
  avatarUrl
}) => (
  <div className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300">
    <div className="relative h-48">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-primary font-medium mb-4">{region}</div>
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
      
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={avatarUrl}
            alt={personName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{personName}</h4>
          <p className="text-gray-600 text-sm">{personRole}</p>
        </div>
      </div>
    </div>
  </div>
);

const SuccessStories: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const stories = [
    {
      title: "Promoting in Colombia",
      region: "Latin America",
      quote: "There's a lot of fierce competition in Colombia. But thanks to Deriv's Credit & Boom indices, promoting the broker is quite easy.",
      personName: "Eduard Fajardo",
      personRole: "Trading Influencer, Colombia",
      imageUrl: "/images/stories/colombia.jpg",
      avatarUrl: "/images/avatars/eduard.jpg",
      category: "content-creator"
    },
    {
      title: "The Nigerian Market",
      region: "Africa",
      quote: "I just kept going until one day, boom! The Jamaican market just kept me growing non-stop! Now, I'm looking to conquer new markets across the Globe.",
      personName: "Temitope Lawrence",
      personRole: "Trading Influencer, Nigeria",
      imageUrl: "/images/stories/nigeria.jpg",
      avatarUrl: "/images/avatars/temitope.jpg",
      category: "ib"
    },
    {
      title: "How Deriv changed my life",
      region: "Southeast Asia",
      quote: "Working with Deriv Partners transformed my hobby into a full-time business. The tier multipliers and 121 Program took my earnings to another level.",
      personName: "Jin Wei Chang",
      personRole: "Content Creator, Malaysia",
      imageUrl: "/images/stories/malaysia.jpg",
      avatarUrl: "/images/avatars/jin.jpg",
      category: "affiliate"
    }
  ];
  
  const filteredStories = filter === 'all' 
    ? stories 
    : stories.filter(story => story.category === filter);

  return (
    <section className="py-16 bg-deriv-lightgray">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Inspired</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from our partners around the world
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setFilter('all')}
            >
              All Stories
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'affiliate' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setFilter('affiliate')}
            >
              Affiliates
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'ib' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setFilter('ib')}
            >
              IBs
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'content-creator' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setFilter('content-creator')}
            >
              Content Creators
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <StoryCard 
              key={index}
              title={story.title}
              region={story.region}
              quote={story.quote}
              personName={story.personName}
              personRole={story.personRole}
              imageUrl={story.imageUrl}
              avatarUrl={story.avatarUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/success-stories" className="btn btn-secondary">
            View All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 