import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    const greenBox = document.getElementById("green-box");

    // Animate the green box from a new state to its current state
    gsap.from(greenBox, {
      duration: 1,
      x: -96,
      opacity: 0,
      ease: "power1.inOut",
      repeat: -1, // Repeat indefinitely
      // yoyo: true, // Reverse the animation on each repeat
    });
  }, []);

  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow">
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div
          id="green-box"
          className="w-20 h-20 ml-24 bg-green-500 rounded-lg"
        />
      </div>
    </main>
  );
};

export default GsapFrom;
