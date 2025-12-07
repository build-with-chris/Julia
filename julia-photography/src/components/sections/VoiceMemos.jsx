import { useState, useRef, useEffect } from 'react';

const VoiceMemos = () => {
  // Audio data with real files
  const voiceMemos = [
    {
      id: 1,
      title: 'Portraitshooting',
      audioUrl: '/Kundenstimme 2 Portraitshooting.opus',
    },
    {
      id: 2,
      title: 'Familienshooting',
      audioUrl: '/Kundenstimme Mathias und Hannah Familienshooting.opus',
    },
  ];

  const [playingId, setPlayingId] = useState(null);
  const [currentTime, setCurrentTime] = useState({});
  const [duration, setDuration] = useState({});
  const audioRefs = useRef({});

  useEffect(() => {
    // Initialize audio refs
    voiceMemos.forEach((memo) => {
      const audio = new Audio(memo.audioUrl);
      audioRefs.current[memo.id] = audio;

      audio.addEventListener('loadedmetadata', () => {
        setDuration((prev) => ({
          ...prev,
          [memo.id]: audio.duration,
        }));
      });

      audio.addEventListener('timeupdate', () => {
        setCurrentTime((prev) => ({
          ...prev,
          [memo.id]: audio.currentTime,
        }));
      });

      audio.addEventListener('ended', () => {
        setPlayingId(null);
        setCurrentTime((prev) => ({
          ...prev,
          [memo.id]: 0,
        }));
      });
    });

    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.removeEventListener('loadedmetadata', () => {});
        audio.removeEventListener('timeupdate', () => {});
        audio.removeEventListener('ended', () => {});
      });
    };
  }, []);

  const togglePlay = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    // Pause all other audios
    Object.keys(audioRefs.current).forEach((audioId) => {
      if (audioId !== id.toString() && audioRefs.current[audioId]) {
        audioRefs.current[audioId].pause();
        audioRefs.current[audioId].currentTime = 0;
      }
    });

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
    } else {
      audio.play();
      setPlayingId(id);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = (id) => {
    const time = currentTime[id] || 0;
    const dur = duration[id] || 0;
    if (dur === 0) return 0;
    return (time / dur) * 100;
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-offwhite relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Side - Vertical Text */}
          <div className="hidden lg:block lg:flex-shrink-0">
            <div className="flex items-center h-full">
              <p
                className="text-anthracite/30 text-sm uppercase tracking-wider font-medium"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                }}
              >
                Das sagen meine Kundinnen
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-anthracite mb-4">
                Echte Worte statt Werbeversprechen
              </h2>
              <p className="text-base md:text-lg text-anthracite/80 leading-relaxed max-w-2xl mb-6">
                Mach den Sound an und hör rein, was Kundinnen unmittelbar nach ihrem Shooting berichten. Authentische Stimmen, echte Emotionen – direkt per Voice Memo.
              </p>
              <button
                onClick={() => window.open('https://share.google/Xaa2l7kcxdswFrMTw', '_blank')}
                className="px-6 py-3 border-2 border-anthracite text-anthracite uppercase tracking-wider text-xs md:text-sm font-medium hover:bg-anthracite hover:text-offwhite transition-all duration-200"
              >
                GOOGLE BEWERTUNGEN
              </button>
            </div>

            {/* Audio Players - Show both at once */}
            <div className="space-y-6 md:space-y-8">
              {voiceMemos.map((memo) => (
                <div
                  key={memo.id}
                  className="flex items-center gap-4 md:gap-6"
                >
                  {/* Play/Pause Button */}
                  <button
                    onClick={() => togglePlay(memo.id)}
                    className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-anthracite/30 flex items-center justify-center hover:border-anthracite hover:bg-anthracite/5 transition-all duration-200 group"
                    aria-label={`${playingId === memo.id ? 'Pause' : 'Abspielen'} ${memo.title}`}
                  >
                    {playingId === memo.id ? (
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-anthracite"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-anthracite ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  {/* Progress Bar */}
                  <div className="flex-1 flex items-center gap-3 md:gap-4">
                    <span className="text-sm md:text-base text-anthracite/60 font-mono min-w-[3rem]">
                      {formatTime(currentTime[memo.id])}
                    </span>
                    <div className="flex-1 h-1 bg-border-soft rounded-full overflow-hidden">
                      <div
                        className="h-full bg-warm-accent transition-all duration-100"
                        style={{ width: `${getProgress(memo.id)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm md:text-base text-anthracite/60 font-mono min-w-[3rem]">
                      -{formatTime((duration[memo.id] || 0) - (currentTime[memo.id] || 0))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceMemos;

