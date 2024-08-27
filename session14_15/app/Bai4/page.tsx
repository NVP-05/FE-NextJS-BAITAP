import axios from 'axios';

async function get404() {
  try {
    const response = await axios.get('https://example.com/invalid-endpoint');
    return {
      props: {
        data: response.data,
        error: null,
      },
    };
  } catch (error: any) {
    let errorMessage = '';

    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        errorMessage = '404 - Trang không tồn tại';
      } else if (status === 500) {
        errorMessage = '505 - Lỗi máy chủ';
      } else {
        errorMessage = `Server responded with status code ${status}.`;
      }
    }
    return {
      props: {
        data: null,
        error: errorMessage,
      },
    };
  }
}

export default async function Page() {
  const { props } = await get404();
  const { data, error } = props;

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div>Có dữ liệu</div>
  );
}
