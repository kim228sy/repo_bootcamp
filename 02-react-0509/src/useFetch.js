// useFetch라는 커스텀 훅. 이 훅은 fetch() API를 사용하여 데이터를 가져오는 기능을 구현.

// useEffect와 useState 모듈을 import.
import { useEffect, useState } from "react";

// useFetch 함수형 컴포넌트를 정의. 이 컴포넌트는 url 매개변수를 받아서 데이터를 가져옴.

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  // `useState` 훅을 사용하여 `data`, `isPending`, `error` 값을 설정.
  // `data`는 가져온 데이터를 저장하는 변수,
  // `isPending`는 데이터를 가져오는 중인지 여부를 저장하는 변수,
  // `error`는 에러 메시지를 저장하는 변수.

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

// `useEffect` 훅을 사용하여 컴포넌트가 마운트된 후 `fetch()` API를 호출하여 데이터를 가져옴. 이때 `AbortController`를 사용하여 데이터 가져오기를 중단할 수 있도록 함.

// - `abortCont` : `AbortController` 객체를 생성.
// - `setTimeout()` : 1초 후에 `fetch()` API를 호출.
// - `fetch(url, { signal: abortCont.signal })` : `fetch()` API를 호출합니다. `signal` 옵션으로 `AbortController` 객체를 전달.
// - `.then()` : 데이터를 가져오는 데 성공한 경우 실행. 응답 객체를 `JSON`으로 변환.
// - `.catch()` : 데이터를 가져오는 데 실패한 경우 실행. `AbortError`가 발생한 경우에는 콘솔에 메시지를 출력하고, 그 외의 경우에는 `error` 상태를 업데이트.
// - `return () => { abortCont.abort(); };` : 컴포넌트가 unmount되기 전에 `AbortController` 객체를 해제.

// `return { data, isPending, error };` : 커스텀 훅에서는 `data`, `isPending`, `error` 값을 반환. 이를 통해 `useFetch`를 호출한 컴포넌트에서 데이터를 활용.
