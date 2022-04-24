import React, { useState, useEffect, useCallback } from "react";

function NewsFeed() {
  const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  const responses = {
    status: "ok",
    totalResults: 0,
    articles: [],
  };

  const [news, setNews] = useState(responses);
  const [page, setPage] = useState(0);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isRefresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setNews(responses);
    setPage(1);
    setLoading(false);
    setRefresh(false);
  };

  const findAll = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${endpoint}&page=${page}`);
      const result = await response.json();
      setNews((current) => {
        return {
          ...result,
          articles: [...current.articles, ...result.articles],
          totalResults: result.totalResults,
          status: result.status,
        };
      });

      if (result.status !== "ok") {
        alert("Something went wrong");
        throw new Error(result.message);
      }
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  }, [endpoint, page]);

  useEffect(() => {
    findAll();
  }, [page, isRefresh, findAll]);

  return (
    <div>
      <h1>News Feed Top Headline</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {isError}</div>}
      <ol>
        {news.articles.map((article, index) => {
          return (
            <li key={index}>
              <p>{article.title}</p>
              {/*  <p>{article.description}</p> */}
              {/*  <img src={article.urlToImage} alt={article.title} /> */}
            </li>
          );
        })}
      </ol>
      {news.articles.length < parseInt(news.totalResults.toString()) ? (
        <button disabled={isLoading} onClick={() => setPage((c) => c + 1)}>
          Load More
        </button>
      ) : null}

      <button disabled={isLoading} onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
}

export default NewsFeed;
