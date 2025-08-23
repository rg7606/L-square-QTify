import React, { useEffect, useMemo, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import axios from "axios";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false); // default shows Grid + "Collapse" button

  const navId = useMemo(
    () => title.toLowerCase().replace(/\s+/g, "-"),
    [title]
  );

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(endpoint);
        if (isMounted) setAlbums(res.data || []);
      } catch (e) {
        if (isMounted) setError("Failed to load albums");
        // eslint-disable-next-line no-console
        console.error(e);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, [endpoint]);

  const renderCard = (album) => (
    <Card
      image={album.image}
      follows={album.follows}
      title={album.title}
    />
  );

  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.toggleBtn}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {loading && <p className={styles.status}>Loading…</p>}
      {error && !loading && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <>
          {isCollapsed ? (
            // Collapsed state → show Carousel
            <Carousel items={albums} renderItem={renderCard} navId={navId} />
          ) : (
            // Expanded state → show Grid
            <div className={styles.grid}>
              {albums.map((album) => (
                <div key={album.id} className={styles.gridItem}>
                  {renderCard(album)}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Section;
