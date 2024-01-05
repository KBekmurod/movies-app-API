import { useEffect, useState } from "react"
import { HeroProps } from "./hero.props"
import { IMovie } from "@/interfaces/app.interfaces";
import Image from "next/image";
import ReactStars from 'react-stars'
import { image_base } from "@/helpers/constants";

const Hero = ({trending}: HeroProps) => {
  const [movie, setmovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    const randomMovies = trending[Math.floor(Math.random() * trending.length)];
    setmovie(randomMovies);
  }, [trending]);
  console.log(movie);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-center lg:pb-12 lg:space-x-10">
      <div className="absolute left-0 top-0 -z-10 w-full h-[95vh]">
        <Image 
        src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`} 
        alt={movie?.original_title}
        fill   
        className="object-cover"
        />
    </div>
    <div 
    className="text-center py-[4px] px-[8px] bg-[#1b1b1b]/50 rounded-bl-[8px] rounded-tr-[8px] p-4 w-[111px]">
      {movie.media_type}
    </div>
    <div className="flex items-center space-x-2">
      <ReactStars count={10} value={movie.vote_average} color2="#ffd700" size={30} edit={false} />  
      <p>{movie.vote_count}</p>
    </div>
    <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">{movie?.original_title || movie?.title || movie?.original_name || movie?.name}</h1>
    <p className="max-w-xs max-h-xs md:max-w-lg text-shadow-md lg:max-w-2xl text-xs md:text-lg lg:text-2xl">{movie?.overview?.slice(0, 100)}...</p>
     <div>
      <button className="flex justify-center items-center space-x-2 bg-white/60 font-bold text-black w-[200px] h-[56px] rounded-full">Watch now</button>
    </div>
    </div>

  )
} 

export default Hero