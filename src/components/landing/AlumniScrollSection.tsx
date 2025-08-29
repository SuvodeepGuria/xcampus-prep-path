import React from 'react';
import { mockAlumni } from '@/data/mock-data';

export const AlumniScrollSection: React.FC = () => {
  // Duplicate the array to create seamless loop
  const extendedAlumni = [...mockAlumni, ...mockAlumni, ...mockAlumni];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Alumni Work At
          </h2>
          <p className="text-muted-foreground">
            Join thousands of successful professionals who started their journey with XCampus
          </p>
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
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-semibold text-primary">
                          {alumni.name.split(' ').map(n => n[0]).join('')}
                        </span>
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
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Tesla', 'Uber'].map((company) => (
              <div
                key={company}
                className="group cursor-pointer"
              >
                <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:opacity-100 opacity-70">
                  <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {company}
                  </span>
                </div>
              </div>
            ))}
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
      `}</style>
    </section>
  );
};