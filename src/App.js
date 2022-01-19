import { useState, useRef, useEffect } from "react";
import "./styles.css";

const sections = ["products", "developers", "company"];

const dimensions = {
  products: { width: 490, height: 280, x: 0 },
  developers: { width: 390, height: 266, x: 100 },
  company: { width: 260, height: 296, x: 200 }
};

export default function App() {
  const [selected, setSelected] = useState(null);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  const onMouseEnter = (event) => {
    const localSelected = event.target.getAttribute("data-nav");
    setSelected(localSelected);
    let rect = event.target.getBoundingClientRect();
    const popoverLeft = popoverRef.current.getBoundingClientRect().x;
    dimensions[localSelected].arrowX = rect.left + rect.width / 2 - popoverLeft;
    arrowRef.current.style.transform = `translateX(${dimensions[localSelected].arrowX}px) rotate(45deg)`;
  };

  useEffect(() => {
    const rect = buttonRef.current.getBoundingClientRect();
    const popoverLeft = popoverRef.current.getBoundingClientRect().x;
    dimensions.products.arrowX = rect.left + rect.width / 2 - popoverLeft;
    arrowRef.current.style.transform = `translateX(${dimensions.products.arrowX}px) rotate(45deg)`;
  }, []);

  const onMouseLeave = () => {
    setSelected(null);
  };

  return (
    <header className="header">
      <section>
        <nav className="nav">
          {sections.map((ele, i) => {
            return (
              <button
                ref={(ref) => (i === 0 ? (buttonRef.current = ref) : null)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="nav-link"
                data-nav={ele}
                key={i}
              >
                {ele}
              </button>
            );
          })}
        </nav>
      </section>

      <div ref={popoverRef} className={`popover ${selected ? "open" : ""}`}>
        <div
          className="content"
          style={
            selected
              ? {
                  width: dimensions[selected].width + "px",
                  height: dimensions[selected].height + "px",
                  transform: `translateX(${dimensions[selected].x}px)`
                }
              : {}
          }
        >
          <section
            className={`section section-products ${
              selected === "products" ? "active" : ""
            }`}
          >
            <ul className="navlist-primary">
              <li className="navlist-primary-payments">
                <div className="circle"></div>
                <div className="navlist-primary-text">
                  <h3>Payments</h3>
                  <p>A complete payments platform engineered for growth</p>
                </div>
              </li>
              <li className="navlist-primary-billing">
                <div className="circle"></div>
                <div className="navlist-primary-text">
                  <h3>Billing</h3>
                  <p>Build and scale your recurring business model.</p>
                </div>
              </li>
              <li className="navlist-primary-connect">
                <div className="circle"></div>
                <div className="navlist-primary-text">
                  <h3>Connect</h3>
                  <p>Everything platforms need to get sellers paid.</p>
                </div>
              </li>
            </ul>
          </section>

          <section
            className={`section section-developers ${
              selected === "developers" ? "active" : ""
            }`}
          >
            <ul className="navlist">
              <li>Documentation</li>
            </ul>
            <p className="subtle">
              Start integrating Stripe's products and tools.
            </p>
            <div className="two-col">
              <div>
                <h4>Get started</h4>
                <ul className="navlist-subtle">
                  <li>Elements</li>
                  <li>Checkout</li>
                  <li>Mobile apps</li>
                  <li>Libraries</li>
                </ul>
              </div>
              <div>
                <h4>Popular topics</h4>
                <ul className="navlist-subtle">
                  <li>Apple Pay</li>
                  <li>Testing</li>
                  <li>Launch checklist</li>
                  <li>Plug-ins</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            className={`section section-company ${
              selected === "company" ? "active" : ""
            }`}
          >
            <ul className="navlist">
              <li>
                <i data-feather="info"></i>About Stripe
              </li>
              <li>
                <i data-feather="users"></i>Customers
              </li>
              <li>
                <i data-feather="server"></i>Partner program
              </li>
              <li>
                <i data-feather="briefcase"></i>Jobs
              </li>
              <li>
                <i data-feather="image"></i>Environment
              </li>
              <li>
                <i data-feather="layout"></i>Newsroom
              </li>
            </ul>
          </section>
        </div>
        <div
          className="background"
          style={
            selected
              ? {
                  transform: `translateX(${dimensions[selected].x}px) scaleX(${
                    dimensions[selected].width / dimensions["products"].width
                  }) scaleY(${
                    dimensions[selected].height / dimensions["products"].height
                  })`
                }
              : {}
          }
        />
        <div className="arrow" ref={arrowRef} />
      </div>
    </header>
  );
}
