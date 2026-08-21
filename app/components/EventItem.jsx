import Image from 'next/image';
import './EventItem.css';

const GITHUB_ICON = (
  <svg className="gh-icon" viewBox="0 0 16 16" width="25" height="25" fill="currentColor" aria-label="github">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const EventItem = ({ event }) => {
  return (
    <div className="event-container">
      <div className="event-image-wrapper">
        <div className="event-fade-layer" style={event.bgColor ? {backgroundColor: event.bgColor} : undefined}>
          {event.background && (
            <Image
              className={`event-background${event.backgroundPositionBottom ? ' event-background-bottom' : ''}`}
              src={event.background}
              alt={`${event.name} background`}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
            />
          )}
          {event.backgroundMobile && (
            <Image
              className={`event-background event-background-mobile${event.backgroundPositionBottom ? ' event-background-bottom' : ''}`}
              src={event.backgroundMobile}
              alt={`${event.name} background`}
              fill
              sizes="100vw"
            />
          )}
          {event.bgPattern && (
            <div className="event-pattern-mask">
              <div
                className="event-pattern-rotate"
                style={{transform: `rotate(${event.bgAngle ?? -19.54}deg)`}}
              >
                <div
                  className="event-pattern-layer pattern-slide"
                  style={{backgroundImage: `url(${event.bgPattern})`}}
                />
              </div>
            </div>
          )}
          {event.billboard && (
            <div className={`event-header${event.logoFullWidth ? ' event-header-flush' : ''}${event.logoCentered ? ' event-header-centered' : ''}`}>
              <div className="event-logo-stack">
                <Image
                  className="event-billboard"
                  src={event.billboard}
                  alt={`${event.name} billboard`}
                  width={205}
                  height={194}
                />
              </div>
            </div>
          )}
        </div>
        <div className={`event-header${event.logoFullWidth ? ' event-header-flush' : ''}${event.logoCentered ? ' event-header-centered' : ''}`}>
          {event.logo && (
            event.billboard || event.smoke ? (
              <div className="event-logo-stack">
                <Image
                  className="event-logo-stacked"
                  src={event.logo}
                  alt={`${event.name} logo`}
                  width={1173}
                  height={512}
                />
                {event.smoke && (
                  <Image
                    className="event-smoke"
                    src={event.smoke}
                    alt={`${event.name} smoke`}
                    width={283}
                    height={130}
                    unoptimized
                  />
                )}
              </div>
            ) : (
              <Image
                className={event.logoFullWidth ? 'event-logo-full' : event.logoCentered ? 'event-logo-centered' : 'event-logo'}
                src={event.logo}
                alt={`${event.name} logo`}
                width={event.logoFullWidth ? 1210 : event.logoCentered ? 1173 : 432}
                height={event.logoFullWidth ? 234 : event.logoCentered ? 512 : 272}
                style={event.logoScale ? {'--logo-scale': event.logoScale} : undefined}
              />
            )
          )}
          {!event.logo && event.showNameFallback && <p className="event-text">{event.name}</p>}
        </div>
        {event.rightImage && (
          <div className={`event-right-image-container${event.rightImageAlt ? ' event-right-image-alt' : ''}${event.rightImageCards ? ' event-right-image-cards' : ''}${event.rightImageSpin ? ' event-right-image-idle-wobble' : ''}`}>
            <div className={event.rightImageSpin ? 'event-right-image-hover' : undefined}>
              {event.rightImageOutline && (
                <Image
                  className="event-right-image-outline"
                  src={event.rightImageOutline}
                  alt=""
                  width={event.rightImageOutlineWidth ?? event.rightImageWidth}
                  height={event.rightImageOutlineHeight ?? event.rightImageHeight}
                />
              )}
              <Image
                className={`event-right-image${event.rightImageOutline ? '' : ' event-right-image-filtered'}`}
                src={event.rightImage}
                alt={`${event.name} decoration`}
                width={event.rightImageWidth}
                height={event.rightImageHeight}
              />
            </div>
          </div>
        )}
      </div>
      {(event.description || event.links || event.date) && (
        <div className="event-content">
          {event.links && (
            <p className="project-links">
              {event.links.map((link, index) => (
                <span key={index}>
                  {index > 0 && <span className="project-links-separator"> • </span>}
                  <a className="link" href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name.toLowerCase() === "github" ? GITHUB_ICON : link.name}
                  </a>
                </span>
              ))}
            </p>
          )}
          {event.date && <p className="event-date">{event.date}</p>}
          {event.description && <p className="event-description">{event.description}</p>}
        </div>
      )}
    </div>
  );
};

export default EventItem;
