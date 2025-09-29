import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    image: string;
    category: string;
    metrics: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div>
            {/* Mobile: Vertical List */}
            <div className="sm:hidden space-y-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                                    <ExternalLink className="w-8 h-8 text-purple-600" />
                                </div>
                                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 break-words">{project.title}</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed break-words">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-green-600">{project.metrics}</span>
                                <a href="/contact">
                                    <button className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                                    Unlock with Premium
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                              </a>       
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop: Carousel */}
            <div className="hidden sm:flex justify-center">
                <div className="relative w-[400px] md:w-[500px] lg:w-[600px]">
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="flex-shrink-0 w-full">
                                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                                        <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 mx-auto">
                                                    <ExternalLink className="w-8 h-8 text-purple-600" />
                                                </div>
                                                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 break-words">{project.title}</h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed break-words">{project.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-semibold text-green-600">{project.metrics}</span>
                                                <a href="/contact">
                                                    <button className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                                                        Unlock With Premium
                                                        <ExternalLink className="w-4 h-4" />
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCarousel;
