// Home 컴포넌트입니다. Home 컴포넌트는 / 경로에서 사용되며, 블로그 게시물을 나열.

// `BlogList`와 `useFetch` 모듈을 임포트.
import BlogList from "./BlogList"; // 블로그 게시물 목록을 렌더링하는 데 사용
import useFetch from "./useFetch"; // fetch()` API를 사용하여 데이터를 가져오는 커스텀 훅.

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading... </div>}
      {/* {blogs && (
        <BlogList
          propsBlogs={blogs}
          title="All Blogs"
          handleDelete={handleDelete}
        />
      )} */}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};
export default Home;

// `Home` 컴포넌트는 화살표 함수로 구현. 이 함수는 `useFetch` 훅을 사용하여 블로그 데이터를 가져오고, `BlogList` 컴포넌트를 사용하여 블로그 게시물을 나열.

// `useFetch("http://localhost:8000/blogs")` : `useFetch` 훅을 사용하여 "http://localhost:8000/blogs" 경로에서 블로그 데이터를 가져옴.

// `const { data, isPending, error } = useFetch("http://localhost:8000/blogs");` : `useFetch` 훅이 반환하는 객체에서 `data`, `isPending`, `error` 값을 추출. `data`는 가져온 블로그 데이터, `isPending`는 데이터를 가져오는 동안 로딩 상태 여부, `error`는 에러 메시지.

// `{error && <div>{error}</div>}` : 에러가 발생한 경우, `error` 메시지를 렌더링.

// `{isPending && <div>Loading... </div>}` : 데이터를 가져오는 동안 `isPending` 값이 `true`인 경우, "Loading..." 메시지를 렌더링.

// `{data && <BlogList blogs={data} title="All Blogs" />}` : 데이터가 성공적으로 가져온 경우, `BlogList` 컴포넌트를 사용하여 블로그 게시물을 나열. `blogs` prop으로 가져온 블로그 데이터를 전달하고, `title` prop으로 "All Blogs" 값을 전달.

// 마지막으로, `export default Home;`을 사용하여 `Home` 컴포넌트를 내보냄. 이를 통해 `Home` 컴포넌트는 다른 파일에서 `import`하여 사용할 수 있게 됨.
