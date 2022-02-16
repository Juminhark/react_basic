import { useState, useEffect } from 'react'
import axios from 'axios';

export default function useFetch(url) {

  const [ users, setUsers] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(null);

  // 랜더링 될 때, 그리고 url이 바뀔 때만 실행됨
  useEffect(() => {
    const fetchdata = async () => {
      setIsError(null); // 에러 null 처리
      try {
        setIsLoading(true); // 로딩중
        const result  = (await axios.get(url)).data;
        setUsers(result);  // 받아온 데이터
      } catch(err) {
        setIsError(err);
      }
      setIsLoading(false); // 로딩 종료
    }
    fetchdata();
  }, [url]);

  return { users, isLoading, isError };
}

// https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd