export default function Post() {
  return (
    <div className="post">
      <div className='image'>
        <img src="https://techcrunch.com/wp-content/uploads/2020/01/GettyImages-1125716134.jpg?w=1390&crop=1" alt="image1" />
      </div>
      <div className='texts'>
        <h2>Inside Stripe’s latest moves</h2>
        <p className='info'>
          <a className='author'>Mary Ann Azevedo, Christine Hall</a>
          <time>2020-06-04 20:00</time>
        </p>
        <p className='summary'>Stripe made headlines more than once this week as it acquired a (non-fintech!) startup and announced an expansion of its issuing product into credit. In each case, I covered the news exclusively, which helped give me some insight into the fintech giant’s motivations behind each move.
        </p>
      </div>
    </div>
  );
}