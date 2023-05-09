import { useEffect, useState } from "react";

// useEffect(() => {
//   // fetch("http://localhost:8000/blogs")
//   //   .then((res) => {
//   //     return res.json();
//   //   })
//   //   .then((data) => {
//   //     setBlogs(data);
//   //   });
//   setTimeout(() => {
//     fetch("http://localhost:8000/blogs")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setBlogs(data);
//         setIsPending(false);
//       })
//       .catch((err) => {
//         console.log("Error: " + err.message);
//       });
//   }, 1000);
// }, []);

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("데이터를 불러올 수 없습니다");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("불러오기를 중단합니다");
          } else {
            setPending(null);
            setError(err.message);
          }
        });
    }, 1000);
    return () => {
      // console.log('clean up');
      abortCont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
