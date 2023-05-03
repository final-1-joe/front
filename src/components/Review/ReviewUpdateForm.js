const ReviewUpdateForm = ({ review, setreview, handleupdate }) => {
  const onChange = (e) => {
    setreview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };
  return <div></div>;
};

export default ReviewUpdateForm;
