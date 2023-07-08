const Home = () => {
  return (
    <>
      <section className="banner">
        <div>
          <h1>Little Lemon 30% off</h1>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day.
          </p>
        </div>
      </section>
      <section className="articles">
        <article>
          <img
            src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="menu"
            height={400}
          />
          <h2>Our new menu</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ullam consectetur sunt corrupti nostrum in quisquam neque
            repudiandae iste quasi, ipsa ut, sequi ducimus magni voluptatibus
            iure velit sed tenetur?
          </p>
          <a href="/">See menu &gt;&gt;</a>
        </article>
        <article>
          <img
            src="https://images.pexels.com/photos/16833332/pexels-photo-16833332/free-photo-of-burger-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="table booking"
            height={400}
          />
          <h2>Book a table</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ullam consectetur sunt corrupti nostrum in quisquam neque
            repudiandae iste quasi, ipsa ut, sequi ducimus magni voluptatibus
            iure velit sed tenetur?
          </p>
          <a href="/">Book a table &gt;&gt;</a>
        </article>
        <article>
          <img
            src="https://images.pexels.com/photos/5410138/pexels-photo-5410138.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="opening hours"
            height={400}
          />
          <h2>Opening hours</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ullam consectetur sunt corrupti nostrum in quisquam neque
            repudiandae iste quasi, ipsa ut, sequi ducimus magni voluptatibus
            iure velit sed tenetur?
          </p>
          <a href="/">Check availability &gt;&gt;</a>
        </article>
      </section>
    </>
  );
};

export default Home;
