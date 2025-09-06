import React from 'react';
import { mockAlumni } from '@/data/mock-data';
import alumniImage from '@/assets/alumni-success.jpg';

export const AlumniScrollSection: React.FC = () => {
  // Duplicate the array to create seamless loop
  const extendedAlumni = [...mockAlumni, ...mockAlumni, ...mockAlumni];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Alumni Work At
              </h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of successful professionals who started their journey with XCampus
              </p>
              <p className="text-primary font-medium mt-2">
                "From students to industry leaders - your success story starts here"
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={alumniImage} 
                alt="Successful alumni in various professional settings" 
                className="rounded-xl shadow-lg hover-scale transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Scrolling Alumni Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
          
          {/* Scrolling Content */}
          <div className="flex animate-slide-in-right">
            <div 
              className="flex gap-8 items-center"
              style={{
                animation: 'scroll-right 60s linear infinite',
              }}
            >
              {extendedAlumni.map((alumni, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover-scale">
                    <div className="flex items-center gap-3">
                      {/* Avatar with real image placeholder */}
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">
                            {alumni.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      
                      {/* Info */}
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground text-sm truncate">
                          {alumni.name}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {alumni.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Featured Companies
          </p>
          
          {/* Scrolling company logos */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
            
            <div className="flex">
              <div 
                className="flex gap-8 items-center"
                style={{
                  animation: 'scroll-left 40s linear infinite',
                }}
              >
                {[...Array(3)].map((_, groupIndex) => (
                  ['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Tesla', 'Uber'].map((company, index) => (
                    <div
                      key={`${groupIndex}-${index}`}
                      className="flex-shrink-0 group cursor-pointer"
                    >
                      <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:opacity-100 opacity-70 min-w-[120px] text-center">
                        <div className="text-2xl mb-2">
                          {company === 'Google' && '🔍'}
                          {company === 'Microsoft' && '🪟'}
                          {company === 'Amazon' && '📦'}
                          {company === 'Apple' && '🍎'}
                          {company === 'Meta' && '👥'}
                          {company === 'Netflix' && '🎬'}
                          {company === 'Tesla' && '⚡'}
                          {company === 'Uber' && '🚗'}
                        </div>
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {company}
                        </span>
                      </div>
                    </div>
                  ))
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};