import "./expertise.css";

const expertise = () => {
  return (
    <div className="expertise-main">
      <div className="exp-pic">
        <img src="../../public/photo-1520583457224-aee11bad5112.jpg" alt="" />
      </div>
      <div>
        <h3>Our Expertise</h3>
        <p>
          With a dedicated team, passionate towards serving our clients, you can
          be rest assured throughout the development process of our Software
          Applications. We have adopted Integrity, Value and Ethics in our core
          principles and the same shall reflect in our actions. We believe in
          revolutionizing the development process, one step at a time!
        </p>
        <div className="exp-content">
          <div className="exp-contents-1">
            <h3> Web Applications</h3>
            <p>We provide latest frameworks that are best for your business.</p>
          </div>
          <div className="exp-contents-2">
            <h4>Web Design</h4>
            <p>Our Websites are well optimized to showcase your business.</p>
          </div>
          <div className="exp-contents-3">
            <h4> Mobile Applications</h4>
            <p>
              Our Mobile Apps optimize the user experience towards your
              customers.
            </p>
          </div>
          <div className="exp-contents-4">
            <h4>Payment Gateways</h4>
            <p>We provide several payment gateway options for your business.</p>
          </div>
          <div className="exp-contents-5">
            <h4>Cloud Solutions</h4>
            <p>
              We offer scalable cloud solutions to enhance your business
              operations.
            </p>
          </div>
          <div className="exp-contents-6">
            <h4>Database Management</h4>
            <p>
              We manage all your custom data to be utilized in a effective
              manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default expertise;
